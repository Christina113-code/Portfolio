import React from "react";
import location from "../imgs/location.svg";
import email from "../imgs/email.svg";
import phone from "../imgs/phone.svg";
import github from "../imgs/github.svg";
import linkedin from "../imgs/linkedin.svg";

const Footer = () => {
  return (
    <div className="footer">

             <div className="contact-info">
              <h2>Contact Info</h2>
            <span>
              <img src={location} alt="location" id="location" />
              <p>New Rochelle, NY</p>
            </span>
            <span>
              <img src={phone} alt="location" id="location" />
              <p>(914) 888-6770</p>
            </span>
            <span>
              <img src={email} alt="location" id="location" />
              <p>christinajun113@gmail.com</p>
            </span>
          </div>
          <div className="footer-link-container">
            <a href="/">Home</a>
            <a href="/">Skills</a>
            <a href="/">About Me</a>
            <a href="/">Portfolio</a>
            <a href="/">Contact Me</a>
          </div>
        
          <div className="social-info">
            <a href="https://github.com/Christina113-code" target="_blank"rel="noreferrer"><img src={github} alt="github"/></a>
            <a href="https://www.linkedin.com/in/christina-murphy-8775bb19b/"target="_blank"rel="noreferrer"><img src={linkedin} alt="linkedin"/></a>

          </div>

      </div>
    
  );
};

export default Footer;
