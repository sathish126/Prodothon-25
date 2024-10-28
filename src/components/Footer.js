// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <>
      {/* Line above the footer */}
      <div className="footer-line"></div>
      
      <footer className="footer">
        <div className="nav-left-down">
          <Link to="/contact" className="nav-link">Contact Us</Link>
          <Link to="/about" className="nav-link">About Us</Link>
          <Link to="/faq" className="nav-link">FAQ</Link>
        </div>
        
        <div className="nav-right-down">
        <div className="nav-left-down">
          <Link to="/contact" className="nav-link">Contact Us</Link>
          <Link to="/about" className="nav-link">About Us</Link>
          <Link to="/faq" className="nav-link">FAQ</Link>
        </div>
         
        </div>
      </footer>
    </>
  );
};

export default Footer;
