import React from "react";
import "../assets/styles/components/Footer.scss";

const Footer = () => (
  <footer className="footer">
    <a href="/">About us</a>
    <a href="/">Help</a>
    <a href="/">Follow Us</a>
    <div className="footer__socialMedia--Icon">
      <img src={facebookIcon} alt="socialMedia" />
      <img src={twitterIcon} alt="socialMedia" />
      <img src={InstagramIcon} alt="socialMedia" />
    </div>
  </footer>
);

export default Footer;
