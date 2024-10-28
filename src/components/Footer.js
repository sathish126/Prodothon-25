// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { FaPhoneAlt, FaInstagram, FaWhatsapp } from 'react-icons/fa';

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
          <div className="call-info">
            <FaPhoneAlt className="call-icon" />
            <span className="contact-text">+91-9876543210(MOHAN)</span>
          </div>
          
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="nav-icon">
            <FaInstagram className="social-icon" />
            <FaWhatsapp className="social-icon" />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
