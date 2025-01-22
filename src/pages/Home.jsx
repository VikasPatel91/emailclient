import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        "https://emailserver-1-gprw.onrender.com//get_template"
      );
      setData(res.data);
    };
    fetchData();
  }, []);
  const navigate = useNavigate();
  const handleOnClick = (id) => {
    navigate(`/temp?id=${id}`);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="row home-mainDiv">
      <div className="home-card">
        {data.map((ele, idx) => (
          <div
            key={idx}
            className={`home-card-content home-card-content-${idx % 6}`}
          >
            <p>
              <form onSubmit={handleSubmit} className="text-center">
                <button
                  className={`home-logo template-button template-button-${
                    idx % 6
                  }`}
                  onClick={() => handleOnClick(ele._id)}
                >
                  use template
                </button>
              </form>
              {ele.templateName}
            </p>
            <div className="pt-3">
              <img src={`./email_temp/${ele.imageUrl}`} alt="card-image" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
