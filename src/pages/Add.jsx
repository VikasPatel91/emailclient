import React, { useState } from "react";
import "./Add.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const [formData, setFormData] = useState({
    templateName: "",
    imageUrl: null,
    logoUrl: null,
    description: "",
  });

  const navigate = useNavigate();

  
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "imageUrl" || name === "logoUrl") {
      setFormData({
        ...formData,
        [name]: files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

  
    if (
      !formData.templateName ||
      !formData.imageUrl ||
      !formData.logoUrl ||
      !formData.description
    ) {
      alert("Please fill in all fields and upload the required files.");
      return;
    }

  
    const formDataToSend = new FormData();
    formDataToSend.append("templateName", formData.templateName);
    formDataToSend.append("imageUrl", formData.imageUrl);
    formDataToSend.append("logoUrl", formData.logoUrl);
    formDataToSend.append("description", formData.description);

    try {
      const response = await axios.post(
        "http://localhost:3500/upload",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("API Response:", response.data);
      alert("Template added successfully!");
      navigate("/");
    } catch (error) {
      console.error("Error uploading template:", error);
      alert("Failed to upload template. Please try again.");
    }
  };

  return (
    <div className="add-template-container">
      <h2>Add New Template</h2>
      <form className="add-template-form" onSubmit={handleSubmit}>
       
        <div className="form-group">
          <label htmlFor="templateName">Template Name</label>
          <input
            type="text"
            id="templateName"
            name="templateName"
            value={formData.templateName}
            onChange={handleChange}
            placeholder="Enter template name"
            required
          />
        </div>

        
        <div className="form-group">
          <label htmlFor="imageUrl">Image</label>
          <input
            type="file"
            id="imageUrl"
            name="imageUrl"
            onChange={handleChange}
            accept="image/*"
            required
          />
        </div>

       
        <div className="form-group">
          <label htmlFor="logoUrl">Logo</label>
          <input
            type="file"
            id="logoUrl"
            name="logoUrl"
            onChange={handleChange}
            accept="image/*"
            required
          />
        </div>

       
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter a brief description"
            rows="5"
            required
          />
        </div>

      
        <button type="submit" className="submit-btn">
          Add Template
        </button>
      </form>
    </div>
  );
};

export default Add;
