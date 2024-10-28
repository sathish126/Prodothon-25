// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="nav-left-up">
          <Link to="/accommodation" className="nav-link">Accommodation</Link>
          <Link to="/events" className="nav-link">Events</Link>
          <Link to="/workshops" className="nav-link">Workshops</Link>
        </div>

        <div className="logo">Logo-Prodothon'25</div>

        <div className="nav-right-up">
          <Link to="/competitions" className="nav-link">Competitions</Link>
          <Link to="/profile" className="nav-link">Profile</Link>
          <Link to="/signin" className="nav-button">Sign In</Link>
        </div>
      </header>

      {/* Line below the header */}
      <div className="header-line"></div>
    </>
  );
};

export default Header;
