import React from "react";
import { AiFillFacebook, AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';


const Footer = () => {
  return (
  <div className="footer-container">
    <p>&copy; {new Date().getFullYear()} BaiMi Store </p> 
    <p>All rights reserved!</p>
    <p className="icons">
      <a href="https://tinyurl.com/5cuupvkj" target="_blank" className="social-media">  
      <AiOutlineInstagram />
      </a>
      <a href="https://tinyurl.com/5cuupvkj" target="_blank" className="social-media">
      <AiOutlineTwitter />
      </a>
      <a href="https://tinyurl.com/5cuupvkj" target="_blank" className="social-media">
      <AiFillFacebook />
      </a>
    </p>
    <p>created by <a href="https://tinyurl.com/5cuupvkj" target="_blank">KayangeInc</a></p>
    </div>
  );
};

export default Footer;
