import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footerLinkContainer">
        <Link to="/">Short URL</Link>
        <Link to="/url/track-url">URL Click Counter</Link>
        <Link to="/url/unshort">Unshort URL</Link>
        <Link to="/">Report Malicious URL</Link>
        <Link to="/">Terms of Service</Link>
        <Link to="/">Privacy</Link>
        <Link to="/">Contact</Link>
      </div>
    </div>
  );
};

export default Footer;
