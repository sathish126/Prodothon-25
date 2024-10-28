import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <Link to="/">Home</Link>
    <Link to="/events">Events</Link>
    <Link to="/about">About Us</Link>
    <Link to="/contact">Contact</Link>
    <Link to="/signin">Sign In</Link>
    <Link to="/signup">Sign Up</Link>
  </nav>
);

export default Navbar;
