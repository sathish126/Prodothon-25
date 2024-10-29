// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="logo-container">
          <img src={`${process.env.PUBLIC_URL}/img/psg_logo.png`} alt="PSG Logo" className="logo" />
          <img src={`${process.env.PUBLIC_URL}/img/PEA_Logo.png`} alt="PEA Logo" className="logo" />
          <img src={`${process.env.PUBLIC_URL}/img/sme_logo.png`} alt="SME Logo" className="logo" />
        </div>

        <div className="nav-right-up">
          <Link to="/about" className="nav-link">About Us</Link>
          <Link to="/events" className="nav-link">Events</Link>
          <Link to="/workshops" className="nav-link">Workshops</Link>
          <Link to="/team" className="nav-link">Team</Link>
          <Link to="/contact" className="nav-link">Contact Us</Link>
          <Link to="/faq" className="nav-link">FAQ</Link>
        </div>
      </header>

      <div className="header-line"></div>
    </>
  );
};

export default Header;
