import React, { useState } from 'react';
import Footer from './Footer';
import Navbar from './Navbar_upload';
import "./css/upload.css";
import "./css/App.css";
import previewBg from "./images/preview/Bug_Loader.gif";

function Upload() {
 const [selectedFile, setSelectedFile] = useState(null);
 const [uploadStatus, setUploadStatus] = useState(''); // Step 1: Add a new state variable

 const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
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
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      try {
        const data = await response.json();
        console.log(data); // Handle the response as needed
        setUploadStatus('File uploaded successfully!'); // Step 2: Update the uploadStatus
      } catch (error) {
        console.error('Error parsing response:', error);
        setUploadStatus('Error parsing response.'); // Optionally, set an error message
      }
    } catch (error) {
      console.error('Error uploading file:', error);
      setUploadStatus('Error uploading file.'); // Optionally, set an error message
    }
 };

 return (
    <div>
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
            <p className="file-info">No Files Selected</p>
          </div>
          <div className="dropzone-actions">
            <button type="reset">Cancel</button>
            <button id="submit-button" type="submit">Save</button>
          </div>
        </form>

        {/* Step 3: Display the uploadStatus */}
        {uploadStatus && <p className="upload-status">{uploadStatus}</p>}

        <Footer />
      </body>
    </div>
 );
}

export default Upload;
