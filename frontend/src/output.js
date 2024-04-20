import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import Navbar from './Navbar_upload';
import "./css/output.css";

function Output() {
  const [data, setData] = useState({});

  useEffect(() => {
    const storedData = sessionStorage.getItem('uploadData');
    console.log("Type of storedData:", typeof storedData);
    console.log("Stored Data:", storedData);
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []); // Empty dependency array ensures the effect runs only once after initial render

  // Log the updated data whenever it changes
  useEffect(() => {
    console.log("Data:", data);
  }, [data]);

  // Handler to update the data state when the user edits the textarea
  const handleTextareaChange = (event) => {
    try {
      const newData = JSON.parse(event.target.value);
      setData(newData);
    } catch (error) {
      console.error("Invalid JSON entered in the textarea.");
    }
  };


  // Function to download data as JSON
  const downloadAsJSON = () => {
    const jsonContent = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonContent], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'data.json');
    document.body.appendChild(link);
    link.click();
  };

  return (
    <div className="container">
      <Navbar />
      <div className="content-container">
        <br />
        <br />
        <br />
        <br />
        <br />
        <h2>Parsed Data</h2>
        <div className="textbox-container">
          <textarea
            className="glowing-textarea"
            rows={10} // Adjust rows as needed
            cols={50} // Adjust cols as needed
            value={JSON.stringify(data, null, 2)} // Convert data to a string
            onChange={handleTextareaChange} // Handle changes to the textarea
          />
        </div>
        <div className="button-container">
          <button onClick={downloadAsJSON}>Download as JSON</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Output;
