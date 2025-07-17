import React, { useState } from "react";
import axios from "axios";
import "./UploadForm.css";

// ✅ Hardcoded backend URL for now — remove .env confusion
const BASE_URL = "http://localhost:8000";

const UploadForm = ({ onUpload, onResult }) => {
  const [file, setFile] = useState(null);
  const [mode, setMode] = useState("Image to Sketch");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);
    formData.append("mode", mode);

    // Show original uploaded image
    onUpload(URL.createObjectURL(file));

    try {
      console.log("🔗 Sending to:", `${BASE_URL}/transform`);
      const response = await axios.post(`${BASE_URL}/transform`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        responseType: "blob", // we expect an image blob in return
      });

      const resultUrl = URL.createObjectURL(response.data);
      onResult(resultUrl);
    } catch (error) {
      console.error("❌ Upload error:", error.response?.data || error.message);
      alert("❌ Error transforming image. Please try again.");
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) setFile(droppedFile);
  };

  const handleDragOver = (e) => e.preventDefault();

  return (
    <form className="upload-form" onSubmit={handleSubmit}>
      <h2>Upload Your Image</h2>

      <div
        className="drop-area"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        {file ? (
          <p>{file.name}</p>
        ) : (
          <p>Drag & Drop or Click to Upload</p>
        )}
        <input type="file" accept="image/*" onChange={handleFileChange} />
      </div>

      <div className="file-button-row">
        {file && (
          <div className="file-info">
            {file.name} ({(file.size / 1024).toFixed(2)} KB)
          </div>
        )}
      </div>

      <select value={mode} onChange={(e) => setMode(e.target.value)}>
        <option value="Image to Sketch">Image to Sketch</option>
        <option value="Human to Painting">Human to Painting</option>
        <option value="Enhance Image">Enhance Image</option>
      </select>

      <button type="submit">Transform Image</button>
    </form>
  );
};

export default UploadForm;
