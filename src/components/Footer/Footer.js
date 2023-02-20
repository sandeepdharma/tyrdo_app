import "./Footer.scss";
import React from "react";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { TiSocialLinkedinCircular } from "react-icons/ti";
const Footer = () => {
  return (
    <div className="footer-container">
      <img
        src="https://trydo.rainbowit.net/assets/images/logo/logo.png"
        alt=""
        className="footer-image"
      />
      <div className="footer-social-icons-container">
        <TiSocialFacebookCircular className="each-social-icon" />
        <TiSocialLinkedinCircular className="each-social-icon" />
        <TiSocialTwitterCircular className="each-social-icon" />
      </div>
      <p className="copyright">
        Copyright © 2022 Rainbow-Themes. All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
