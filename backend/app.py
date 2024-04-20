from fastapi import FastAPI, UploadFile, File
from pydantic import BaseModel
from typing import Optional
from tempfile import NamedTemporaryFile
import os
import json
from doctr.io import DocumentFile
from doctr.models import ocr_predictor
from groq import Groq

from dotenv import load_dotenv
load_dotenv()

from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"], # Adjust this to match your React app's domain
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

groq_client = Groq(api_key=os.getenv("GROQ_API_KEY"))

class InvoiceData(BaseModel):
    content: Optional[bytes] = None

def remove_na_values(obj):
    if isinstance(obj, dict):
        return {k: remove_na_values(v) for k, v in obj.items() if v != "NA" and v is not None}
    elif isinstance(obj, list):
        return [remove_na_values(item) for item in obj if item != "NA" and item is not None]
    else:
        return obj

@app.post("/invoice_data")
async def process_invoice_data(invoice_file: UploadFile = File(...)):
    # Read the uploaded PDF file
    contents = await invoice_file.read()
    
    # Perform OCR using Doctr
    with NamedTemporaryFile(delete=False, suffix=".pdf") as temp_pdf:
        temp_pdf.write(contents)
        temp_pdf_path = temp_pdf.name

    doc = DocumentFile.from_pdf(temp_pdf_path)
    predictor_ocr_model = ocr_predictor(pretrained=True)
    ocr_result = predictor_ocr_model(doc)
    ocr_text = ocr_result.render()
    print("OCR Text:", ocr_text)  # Print OCR text for debugging

    # Extract entities using Groq
    prompt = f"""Extract entities and their values from the provided OCR text "{ocr_text}", and separate them by a new line. Provide output by adding a : between the entities and their value. Make sure to use all the data from the "ocr_text".\nText:{ocr_text}\nEntities:"""
    response = groq_client.chat.completions.create(
        messages=[
            {"role": "system", "content": prompt},
            {"role": "user", "content": "error_message: Not able to create, ocr_text:" + ocr_text},
        ],
        model="llama3-8b-8192",
    )
    response_content = response.choices[0].message.content
    print("Response Content:", response_content)  # Print response_content for debugging
    entities = response_content
    
    # Create JSON object from entities
    prompt = """
            You have been provided with the extracted OCR Data "{ocr_text}" and the entites of these text in the "entities" list for an invoice.
            Create a JSON object from the information present in this OCR Data "{ocr_text}" and the entites of these text in the "entities" list.
            Please keep in mind the "entities" and the OCR Data. This is because the "entities" list contains the extracted entities and their values from the OCR Data.
            Keep in mind the semantic meaning of the ocr_text.
            Make sure your response is a dict and not a list.
            {% if error_message %}
            You already created the following output in a previous attempt: {{invalid_replies}}
            However, this doesn't comply with the format requirements from above and triggered this Python exception: "error_message"
            Correct the output and try again. Just return the corrected output without any extra explanations.
            If no answer value is found for a certain key, then simply fill in "NA"
            {% endif %}
            Your final output should be a JSON object that contains the properties of the invoice. This data would be used for a Supplier Invoice Automation system.
            """
    chat_completion = groq_client.chat.completions.create(
        messages=[
            {"role": "system", "content": prompt},
            {"role": "user", "content": f"error_message:Not able to create, ocr_text:{ocr_text}, entities:{entities}"}
        ],
        model="llama3-8b-8192",
    )
    response_content = chat_completion.choices[0].message.content
    print("Response Content:", response_content)
    json_start_index = response_content.find("{")
    json_end_index = response_content.rfind("}")
    data = json.loads(response_content[json_start_index:json_end_index + 1])

    cleaned_data = remove_na_values(data)
    cleaned_json = json.dumps(cleaned_data, indent=2)
    print("Cleaned JSON:", cleaned_json)

    # Delete the temporary PDF file
    os.remove(temp_pdf_path)

    return cleaned_json

from pydantic import BaseModel
from typing import Dict, Any

class FeedbackData(BaseModel):
    feedback: str
    data: str

def process_feedback_and_data(feedback: str, data: Dict[str, Any]) -> Dict[str, Any]:
    # Example: If feedback suggests adding a new field, add it to the data
    if "add new field" in feedback:
        data["new_field"] = "example value"
    # Add more processing logic as needed
    return data

from fastapi import FastAPI, Body

from fastapi import FastAPI, Body
import json

@app.post("/process_feedback")
async def process_feedback(feedback_data: FeedbackData):
    feedback = feedback_data.feedback
    print("Feedback:", feedback)
    data_str = feedback_data.data # This is now a string
    print("Data String:", data_str)
    data = json.loads(data_str) # Parse the string back into a JSON object
    print("Data:", data)

    # Send request to Groq Llama model for further processing
    response = groq_client.chat.completions.create(
        messages=[
            {"role": "system", "content": f"Based on the feedback '{feedback}', improve the {data} by making the necessary changes. Return the improved data as a JSON object."},
        ],
        model="llama3-8b-8192",
    )
    improved_response_content = response.choices[0].message.content
    print("Improved Response Content:", improved_response_content)

    json_start_index = improved_response_content.find("{")
    json_end_index = improved_response_content.rfind("}")
    data = json.loads(improved_response_content[json_start_index:json_end_index + 1])

    cleaned_improved_response_content = remove_na_values(data)
    cleaned_json = json.dumps(cleaned_improved_response_content, indent=2)
    print("Cleaned JSON:", cleaned_json)

    return cleaned_json



if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
