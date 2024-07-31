import React, { useState } from "react";
import "./Navbar.css";

const MainPage = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [subnavitem,setIssubnavitem] = useState(null);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleSubNav = (data) =>{
    console.log(data);
    setIssubnavitem((prev)=>{
      console.log(prev);
     return prev===null?data:null
    });
  }

  return (
    <div className="body1">
      <nav className="navbar-custom">
        <div className="navbar-brand w-full ">
          <img
            src="https://res.cloudinary.com/dxyzgyveu/image/upload/v1722104660/best_imfexa.png"
            alt="Logo"
            className="logo"
          />

        <button className="navbar-toggler" onClick={toggleNav}>
          <span className="navbar-toggler-icon"></span>
        </button>

        </div>

       

        <div className={`navbar-collapse ${isNavOpen ? "open" : ""}`}>
          <ul className="subnav">
            <li className="">
              <a href="/" className="nav-link bghover">
                Home
              </a>
            </li>
            <li className="dropdown">
              <button className="nav-link dropdown-toggle" onClick={()=>handleSubNav(1)}>Courses</button>
              {subnavitem===1 && <div className="dropdown-menu">
                <a href="/cuet_ug" className="dropdown-item">CUET(UG)</a>
                <a href="/cuet_pg" className="dropdown-item">CUET(PG)</a>
                <a href="/cuet_ncert" className="dropdown-item">NCERT CLASS XII</a>
                <a href="/cuet_seba" className="dropdown-item">SEBA CLASS X</a>
              </div>}
             
            </li>
            <li className="dropdown">
              <button className="nav-link dropdown-toggle" onClick={()=>handleSubNav(2)}>Services</button>
              {subnavitem && <div className="dropdown-menu">
                <a href="/Service_online" className="dropdown-item">Online classes</a>
                <a href="/Service_mock" className="dropdown-item">Mock Test series</a>
                <a href="/Service_download" className="dropdown-item">Downloaded Study Materials</a>
                <a href="/Service_previous" className="dropdown-item">Previous Year Question Bank</a>
                <a href="/Service_counselling" className="dropdown-item">
                  Counselling and Mock Registration for Admission in Central University
                </a>
                <a href="/Service_counselling" className="dropdown-item">
                  Complete Guidance for Admission Process of Delhi University
                </a>
              </div>}
            </li>
            <li>
              <a href="/Blog" className="nav-link blogs">
                Blogs
              </a>
            </li>
            <div className="subscription-container ">
              <a href="/Check" className="nav-link gradient-text">
                CUET Online Subscription
              </a>
              <button className="small-yellow-button">New</button>
            </div>
            <div className="signbtn">
              <a href="/Signin" className="btn btn-outline-primary">
                Sign In/Sign Up
              </a>
            </div>
          </ul>
        </div>
      </nav>
      <br />
    </div>
  );
};

export default MainPage;
