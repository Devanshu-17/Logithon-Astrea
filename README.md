# Logithon-Astrea
Team Astrea project for the Logithon 2024 hackathon



### Workflow

- [x] Convert the PDF file to image
- [x] Use OCR and a Visual LLM with prompt to extract data from the images
- [x] Define a Pydantic base model with necessary fields for JSON output
- [x] Send OCR text and image description to Mixtral LLM with a prompt to generate JSON output based on the Pydantic base model
- [x] Create a user feedback button to verify data extraction accuracy
- [x] If data extraction is incorrect:
  - [x] Prompt user for reasons for inaccuracy
  - [x] Send reason, prompt, and data to LLM to generate output again
  - [ ] Save input and response in a vector database with a score of 0
- [x] If data extraction is correct:
  - [x] Convert JSON to CSV and display as an editable table
  - [ ] Save input and response in a vector database with a score of 1
- [x] Allow user to make final modifications to the data
- [x] Export data in JSON or CSV format

--------------------------------------------------------------------------------------------------------------


- [x] AFTER WORKFLOW IS IMPLEMENTED, CREATE BACKEND PIPELINE
- [x] CREATE FRONTEND
