# Logithon-Astrea
Team Astrea project for the Logithon 2024 hackathon



### Workflow

- [x] Convert the PDF file to image
- [x] Use OCR and a Visual LLM with prompt to extract data from the images
- [x] Define a Pydantic base model with necessary fields for JSON output
- [x] Send OCR text and image description to Mixtral LLM with a prompt to generate JSON output based on the Pydantic base model
- [ ] Create a user feedback button to verify data extraction accuracy
- [ ] If data extraction is incorrect:
  - [ ] Prompt user for reasons for inaccuracy
  - [ ] Send reason, prompt, and data to LLM to generate output again
  - [ ] Save input and response in a vector database with a score of 0
- [ ] If data extraction is correct:
  - [ ] Convert JSON to CSV and display as an editable table
  - [ ] Save input and response in a vector database with a score of 1
- [ ] Allow user to make final modifications to the data
- [ ] Export data in JSON or CSV format

--------------------------------------------------------------------------------------------------------------


- [ ] AFTER WORKFLOW IS IMPLEMENTED, CREATE BACKEND PIPELINE
- [ ] CREATE FRONTEND

--------------------------------------------------------------------------------------------------------------

## NOTE: SELECT 300 SAMPLES FROM THE DATA AND CHECK OUR WORKFLOW AGAINST THE GROUND TRUTH USING GOOGLE'S "Diffpatch" TO CHECK ACCURACY

--------------------------------------------------------------------------------------------------------------


### Showstopper

- Implement a adapative Pydantic Base Model for different types of PDF
- Check the Feedback system
