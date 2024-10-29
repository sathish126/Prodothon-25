// src/components/Sidebar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="sidebar-toggle" onClick={toggleSidebar}>
        ☰
      </div>

      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-content">
          <Link to="/accommodation" className="nav-link" onClick={toggleSidebar}>Accommodation</Link>
          <Link to="/events" className="nav-link" onClick={toggleSidebar}>Events</Link>
          <Link to="/workshops" className="nav-link" onClick={toggleSidebar}>Workshops</Link>
          <Link to="/competitions" className="nav-link" onClick={toggleSidebar}>Competitions</Link>
          <Link to="/profile" className="nav-link" onClick={toggleSidebar}>Profile</Link>
          <Link to="/signin" className="nav-button" onClick={toggleSidebar}>Sign In</Link>
          <Link to="/contact" className="nav-link" onClick={toggleSidebar}>Contact Us</Link>
          <Link to="/about" className="nav-link" onClick={toggleSidebar}>About Us</Link>
          <Link to="/faq" className="nav-link" onClick={toggleSidebar}>FAQ</Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
