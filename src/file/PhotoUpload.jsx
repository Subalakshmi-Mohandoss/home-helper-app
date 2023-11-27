// PhotoUpload.js
import React from "react";
import { useDropzone } from "react-dropzone";

const PhotoUpload = ({ onUpload }) => {
  const onDrop = (acceptedFiles) => {
    // Do something with the files, e.g., upload to a server
    onUpload(acceptedFiles);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      {...getRootProps()}
      className={`dropzone ${isDragActive ? "active" : ""}`}
    >
      <input {...getInputProps()} />
      <p>Upload your photo</p>
    </div>
  );
};

export default PhotoUpload;