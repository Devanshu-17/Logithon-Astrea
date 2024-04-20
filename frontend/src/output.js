import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import Navbar from './Navbar_upload';
import "./css/output.css";
import "./css/bootstrap.min.css";
import {ReactComponent as ThumbsUp} from './images/svg/thumbs-up.svg';
import { ReactComponent as Thumbsdown } from "./images/svg/thumbs-down.svg";
import previewBg from "./images/preview/Bug_Loader.gif";


function Output() {
  const [data, setData] = useState({});
  const [showFeedbackBox, setShowFeedbackBox] = useState(false);
  const [feedback, setFeedback] = useState("");

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


  // Function to handle like button click
  const handleLikeClick = () => {
    alert("Thanks for your feedback!");
  };

  // Function to handle dislike button click
  const handleDislikeClick = () => {
    setShowFeedbackBox(true);
  };

  const handleFeedbackSubmit = async (event) => {
    event.preventDefault();
    // Send feedback and JSON data to the backend
    const response = await fetch('http://localhost:8000/process_feedback', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            feedback: feedback,
            data: JSON.stringify(data), // Convert data to a string
        }),
    });

    if (response.ok) {
        const improvedData = await response.json();
        setData(improvedData); // Update the state with the improved data
    } else {
        console.error('Error submitting feedback and data');
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
      {/* <img
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
          zIndex: "1000"
        }}
      /> */}
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
          <button onClick={handleLikeClick}><ThumbsUp /></button>
          <button onClick={handleDislikeClick}><Thumbsdown /></button>
        </div>
        {showFeedbackBox && (
          <div className="feedback-container">
            <form onSubmit={handleFeedbackSubmit}>
              <textarea
                rows={4} // Adjust rows as needed
                cols={50} // Adjust cols as needed
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Enter your feedback here..."
              />
              <div className='button-container'>
              <button type="submit" className='submit-feedback'>Submit Feedback</button>
              </div>
            </form>
            <textarea
                className="glowing-textarea"
                rows={10} // Adjust rows as needed
                cols={50} // Adjust cols as needed
                value={JSON.stringify(data, null, 2)} // Convert data to a string
                onChange={handleTextareaChange} // Handle changes to the textarea
            />

          </div>
        )}
        <div className="button-container">
          <button onClick={downloadAsJSON} className='rn-btn'>Download as JSON</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Output;
