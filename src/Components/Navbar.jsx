import React from 'react';
import './Navbar.css';
import icon from '../assets/js.png'; 

const Navbar = () => {
  return (
    <div className="navbar">
      <a href="/"><img src={icon} alt="Logo" className="navbar-icon" /></a>
    </div>
  );
};

export default Navbar;