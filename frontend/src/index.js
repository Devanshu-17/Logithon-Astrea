import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Upload from './Upload';
import "./css/App.css";
import "./css/upload.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/upload" element={<Upload />} />
        {/* <Route path="/output" element={<Output />} />  */}
      </Routes>
    </Router>
 </React.StrictMode>
);