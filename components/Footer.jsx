import React from "react";
import { AiFillFacebook, AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';


const Footer = () => {
  return (<div className="footer-container">
    <p>&copy; {new Date().getFullYear()} BaiMi Store </p> 
    <p>All rights reserved!</p>
    <p className="icons">
      <a href="" target="_blank" className="social-media">  
      <AiOutlineInstagram />
      </a>
      <a className="social-media">
      <AiOutlineTwitter />
      </a>
      <a className="social-media">
      <AiFillFacebook />
      </a>
    </p>
  </div>);
};

export default Footer;
