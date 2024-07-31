import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import {
  faHome,
  faPhone,
  faEnvelope,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import WhatsAppButton from "./watsapp";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="sub_row">
            <div className="footer-col">
              <h4>GOT QUESTIONS?</h4>
              <ul>
                <li>
                  <a href="#">Mobile</a>
                </li>
                <li>
                  <a href="#">+91 8811963303</a>
                </li>
                <li>
                  <a href="#">+91 8133836741</a>
                </li>
                <li>
                  <a href="#">Whatsapp</a>
                </li>
                <li>
                  <a href="#">+91 8133836741</a>
                </li>
                <li>
                  <a href="#">Email</a>
                </li>
                <li>
                  <a href="#">info@besst.in</a>
                </li>
                <li>
                  <a href="#">
                    <p className="flex"><img
                      src="https://res.cloudinary.com/dxyzgyveu/image/upload/v1722224207/srinivas_dryczu.png"
                      style={{ height: "15px", marginBottom: "" }} className="mt-[6px]"
                    />
                    <div>Location</div></p>
                  </a>
                </li>
                <li style={{color:"#bbbbbb"}}>
                  Brahmaputra Exam Success
                </li>
                <li>
                  <a style={{color:"#bbbbbb"}}>Support Team Private</a>
                </li>
                <li>
                  <a style={{color:"#bbbbbb"}}>Limited, 37, 2nd bye lane</a>
                </li>
                <li>
                  <a style={{color:"#bbbbbb"}}>B.R.Mazumdar Path Baghorbori,</a>
                </li>
                <li>
                  <a style={{color:"#bbbbbb"}}>Panjabari Guwahati-781037</a>
                </li>
                <li>
                  <a style={{color:"#bbbbbb"}}>Assam</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>ABOUT US</h4>
              <ul>
                <li>
                  <a href="/About">About us</a>
                </li>
                <li>
                  <a href="/Cookie">Cookie Policy</a>
                </li>
                <li>
                  <a href="/Privacy">Privacy Policy</a>
                </li>
                <li>
                  <a href="/Terms">Terms of Service</a>
                </li>
                <li>
                  <a href="/Contact">Write to Us?</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="row">
            <div>
              <div className="footer-col courses_space services-space">
                <h4>COURSES</h4>
                <ul>
                  <li>
                    <a href="#"> CUET(UG)</a>
                  </li>
                  <li>
                    <a href="#">CUET(PG)</a>
                  </li>
                  <li>
                    <a href="#"> NCERT(12th)</a>
                  </li>
                  <li>
                    <a href="#"> SEBA(10th)</a>
                  </li>
                </ul>
              </div>
              <div className="footer-col services-space other-space">
                <h4>OTHER PAGES</h4>
                <ul>
                  <li>
                    <a href="#"> Top Courses</a>
                  </li>
                  <li>
                    <a href="#">Success Stories</a>
                  </li>
                  <li>
                    <a href="#"> Current Affairs</a>
                  </li>
                  <li>
                    <a href="#"> Blogs & Articlesk</a>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className="footer-col services-space">
                <h4>SERVICES</h4>
                <ul>
                  <li>
                    <a href="#"> Online classNamees</a>
                  </li>
                  <li>
                    <a href="#">Mock Test Series</a>
                  </li>
                  <li>
                    <a href="#"> Downloadable Study Materials</a>
                  </li>
                  <li>
                    <a href="#"> Previous Year Question Bank</a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      Counselling and Mock Registration for Admission in Central
                      University
                    </a>
                  </li>
                </ul>
              </div>

              <div className="footer-col services-space mt-[20px]">
                <h4>Get Our Mobile App</h4>
                <div className="sub_image">
                  <div>
                    <li>
                      <a>
                        <img
                          src="https://res.cloudinary.com/dxyzgyveu/image/upload/v1722170017/download_wostys.png"
                          className="image_dis"
                          style={{
                            width: "200px",
                            height: "60px",
                            borderRadius: "10px",
                          }}
                        />
                      </a>
                    </li>
                    <li>
                      <a href="https://play.google.com/store/apps/details?id=com.besst">
                        <img
                          src="https://res.cloudinary.com/dxyzgyveu/image/upload/v1722170017/playstore_wq3ghy.png"
                          style={{
                            width: "200px",
                            height: "60px",
                            borderRadius: "10px",
                          }}
                        />
                      </a>
                    </li>
                  </div>
                  <div>
                    <li>
                      <a>
                        <img
                          src="https://res.cloudinary.com/dxyzgyveu/image/upload/v1722170017/qr-code.ef759f654ed54c39b9e7_wy0e1k.jpg"
                          style={{ width: "130px", height: "150px" }}
                        />
                      </a>
                    </li>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <center>
          {" "}
          <p className="para">
            {" "}
            Copyright © 2024 BESST (Brahmaputra Exam Success Support Team
            Private Limited)
          </p>{" "}
        </center>
        <WhatsAppButton />
      </div>
    </footer>
  );
};

export default Footer;
