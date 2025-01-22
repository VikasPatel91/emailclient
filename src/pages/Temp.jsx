import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./Temp.css";

const Temp = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");

  const [data, setData] = useState([]);
  const [templateData, setTemplateData] = useState({
    name: "",
    imageUrl: "",
    logoUrl: "",
    description: "",
  });
  const [submitted, setSubmitted] = useState(false);

  // Fetch templates data from the server
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://emailserver-1-gprw.onrender.com/get_template");
        
        console.log(res);
        
      } catch (error) {
        console.error("Error fetching templates:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filterData = () => {
      const spData = data.find((ele) => ele._id === id);
      if (spData) {
        setTemplateData(spData);
      }
    };

    if (id && data.length > 0) {
      filterData();
    }
  }, [id, data]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTemplateData({
      ...templateData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", templateData);
    setSubmitted(true);
  };
  const getCardStyle = () => {
    switch (id) {
      case "1":
        return "card-style-1";
      case "2":
        return "card-style-2";
      default:
        return "card-style-default";
    }
  };

  return (
    <div className="template-container">
      <div className={`template-card ${getCardStyle()}`}>
        <form onSubmit={handleSubmit} className="form-card">
          <div className="background-overlay">
            <img
              src={`./email_temp/${templateData.imageUrl}`}
              alt="card-background"
              className="card-background-image"
            />
          </div>
          <div className="content-container">
            <div style={{ float: "right" }}>
              <img
                src={`./email_temp/${templateData.logoUrl}`}
                alt="logo"
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  border: "none",
                }}
              />
            </div>
            <div className="template-header">
              <h1 className="happy-text">
                <input
                  type="text"
                  name="name"
                  value={templateData.name}
                  onChange={handleChange}
                  className="editable-input text-dark border-dark"
                  placeholder="Enter name"
                />
              </h1>
            </div>
            <div className="template-description" style={{ height: "15rem" }}>
              <textarea
                name="description"
                value={templateData.description}
                onChange={handleChange}
                className="editable-textarea text-dark border-dark"
                placeholder="Enter description"
              />
            </div>
            <div className="submit-button-container">
              <button type="submit" className="submit-button">
                Submit
              </button>
            </div>
          </div>
        </form>
        {submitted && (
          <div className="confirmation-message">
            <p>Your form has been successfully submitted!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Temp;
