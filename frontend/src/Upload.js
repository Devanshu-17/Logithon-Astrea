import React, { useState } from 'react';
import Footer from './Footer';
import Navbar from './Navbar_upload';
import "./css/upload.css";
import "./css/App.css";
import previewBg from "./images/preview/Bug_Loader.gif";

import { useNavigate } from 'react-router-dom'; // Import useNavigate

function Upload() {
 const [selectedFile, setSelectedFile] = useState(null);
 const [uploadStatus, setUploadStatus] = useState('');
 const [fileName, setFileName] = useState('No Files Selected');
 const navigate = useNavigate(); // Initialize useNavigate

 const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setFileName(file ? file.name : 'No Files Selected');
 };

 const handleSubmit = async (event) => {
  event.preventDefault();
  if (!selectedFile) return;
 
  const formData = new FormData();
  formData.append('invoice_file', selectedFile);
 
  try {
     const response = await fetch('http://localhost:8000/invoice_data', {
       method: 'POST',
       body: formData,
     });
 
     if (response.ok) {
       // Inside handleSubmit function after receiving the response
      try {
        const data = await response.json();
        console.log(data); // Handle the response as needed
        setUploadStatus('File uploaded successfully!');
        // Save the response data to session storage
        sessionStorage.setItem('uploadData', JSON.stringify(data));
        // Redirect to the Output page
        navigate('/output');
      } catch (error) {
        console.error('Error parsing response:', error);
        setUploadStatus('Error parsing response.');
      }

     } else {
       setUploadStatus(`Error uploading file: ${response.statusText}`);
     }
  } catch (error) {
     console.error('Error uploading file:', error);
     setUploadStatus('Error uploading file.');
  }
 };
 
   
 return (
      <body
        class="template-color-1 spybody"
        data-spy="scroll"
        data-target=".navbar-example2"
        data-offset="150"
      >
        <img
          src={previewBg}
          style={{
            position: "fixed",
            top: "-200px",
            width: "100%",
            height: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            opacity: "0.1",
          }}
        />
        <Navbar />
        <form className="dropzone-box" onSubmit={handleSubmit}>
          <h2>Upload and attach files</h2>
          <p>Click to upload or drag and drop</p>
          <div className="dropzone-area">
            <div className="file-upload-icon">
              {/* SVG icon */}
            </div>
            <input
              type="file"
              required
              id="upload-file"
              className="uploaded-file"
              onChange={handleFileChange}
            />
            <p className="file-info">{fileName}</p>
          </div>
          <div className="dropzone-actions">
            <button type="reset">Cancel</button>
            <button id="submit-button" type="submit">Submit</button>
          </div>
        </form>
        {uploadStatus && (
          <div className="upload-status">
            <p>{uploadStatus}</p>
          </div>
        )}
        <Footer />
      </body>
 );
}

export default Upload;
