import React from 'react';
import './Navbar.css';
import icon from '../assets/js.png'; 

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={icon} alt="Logo" className="navbar-icon" />
    </div>
  );
};

export default Navbar;