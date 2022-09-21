import React from "react";
import location from "../imgs/location.svg";
import email from "../imgs/email.svg";
import phone from "../imgs/phone.svg";
// import github from "../imgs/github.svg";
import linkedin from "../imgs/linkedin.svg";

const Footer = () => {
  return (
    <div className="footer">
      <a href="/">
        <h1>Christina</h1>
      </a>
      <span>
        <img src={location} alt="location" />
        New Rochelle, NY
      </span>
      <span>
        <img src={email} alt="location" />
        christinajun113@gmail.com
      </span>
      <span>
        <img src={phone} alt="location" />
        +1 914 (888) 6770
      </span>
      <div className="link-container">
        {/* <a href="/"><img src={github} alt="github"/></a> */}
        <a href="/"><img src={linkedin} alt="linkedin"/></a>

      </div>
    </div>
  );
};

export default Footer;
