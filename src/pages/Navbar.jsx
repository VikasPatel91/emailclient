import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg border-bottom sticky-top "  >
      <div className="container-fluid">
        <Link to={"/"}  className="navbar-brand text-danger" >
            Email Template
        </Link>
        <button
          className="navbar-toggler  bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon "></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ">
            <Link to={"/"} className="nav-link active text-light  text-center"  aria-current="page">
                Home
            </Link>
            <Link to={"/email"} className="nav-link text-light  text-center">
                All Email
            </Link>
            <Link to={"/add"} className="nav-link text-light  text-center">
                Add New Template
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
