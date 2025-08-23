import React, { useState } from "react";
import axios from "axios";

export default function UploadAddon() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("addon", file);

    try {
      const res = await axios.post("/api/addons/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setMessage("Addon uploaded successfully!");
    } catch (err) {
      console.error(err);
      setMessage("Failed to upload addon.");
    }
  };

  return (
    <div className="upload-addon-page">
      <h2>Upload New Addon</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      {message && <p>{message}</p>}
    </div>
  );
}
