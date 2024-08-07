import React, { useState, useEffect } from "react";
import axios from "axios";

const FileUploadDemo = () => {
  const [file, setFile] = useState(null);
  const [filePath, setFilePath] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const userId = 123;

  const handleFileUpload = async () => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("userId", userId); // Add user ID to form data

    try {
      const response = await axios.post(
        "https://intellix-express-backend-awa-g6g0hca5e6ccezds.eastus-01.azurewebsites.net/userJourney/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setFilePath(response.data.filePath);
      console.log("File uploaded successfully:", response.data.filePath);
    } catch (err) {
      console.error("Error uploading file:", err);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleFileUpload}>Upload File</button>
      {filePath && <p>File uploaded to: {filePath}</p>}
    </div>
  );
};

export default FileUploadDemo;
