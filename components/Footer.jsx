import React from "react";
import { AiFillFacebook, AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';


const Footer = () => {
  return (<div className="footer-container">
    <p>&copy; {new Date().getFullYear()} BaiMi Store </p> 
    <p>All rights reserved!</p>
    <p className="icons">
      <AiOutlineInstagram />
      <AiOutlineTwitter />
      <AiFillFacebook />
    </p>
  </div>);
};

export default Footer;
