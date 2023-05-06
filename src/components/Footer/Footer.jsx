import React from "react";
import "./Footer.scss";
import { FiInstagram } from "react-icons/fi";
import { FaTwitter, FaFacebookF } from "react-icons/fa";
import logo from "../../assets/images/logo.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__container-wrapper">
          <div className="footer_logo">
            <img src={logo} alt="Logo" />
          </div>
          <div className="footer_title">
            <p>
              World Putting League is sanctioned by the <span>USPMGA</span> (US
              Pro MiniGolf Association) and produced by{" "}
              <span>Pro League Network</span>
            </p>
          </div>
          <div className="footer_icons">
            <div className="insta">
              <FiInstagram />
            </div>
            <div className="line">|</div>
            <div className="twit">
              <FaTwitter />
            </div>
            <div className="line">|</div>
            <div className="face">
              <FaFacebookF />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
