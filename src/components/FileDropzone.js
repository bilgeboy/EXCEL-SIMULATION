import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import "../css/dropZone.css";
import { Button } from "@mui/material";

function FileDropzone({ onFileDrop }) {
  const [selectedFile, setSelectedFile] = useState(null);

  const onDrop = (acceptedFiles) => {
    // Check if there's at least one file
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      setSelectedFile(file);
      onFileDrop(file);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: [".xlsx", ".csv"],
    multiple: false,
  });

  const handleRemoveFile = () => {
    setSelectedFile(null); // Clear the selected file
  };

  return (
    <div {...getRootProps({ className: "dropzone" })}>
      <input {...getInputProps()} />
      {selectedFile ? (
        <div className="file-info">
          <p>{selectedFile.name}</p>
          <Button onClick={handleRemoveFile}>Remove</Button>
        </div>
      ) : (
        <p>Drag &amp; drop an Excel or CSV file here, or click to select one</p>
      )}
    </div>
  );
}

export default FileDropzone;
