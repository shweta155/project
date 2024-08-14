import React from 'react';
import './Navbar.css';

const Navbar = ({ onAddWidget }) => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1 className="navbar-heading">CNAPP Dashboard</h1>
      </div>
      <div className="navbar-right">
        <input type="text" className="navbar-search" placeholder="Search..." />
        <button className="navbar-icon" onClick={() => window.location.reload()}>
          🔄
        </button>
        <div className="dropdown">
          <button className="navbar-button">+ Add Widget</button>
          <div className="dropdown-content">
            <button onClick={() => onAddWidget('CSPM Executive Dashboard')}>CSPM Executive Dashboard</button>
            <button onClick={() => onAddWidget('CWPP Dashboard')}>CWPP Dashboard</button>
            <button onClick={() => onAddWidget('Registry Scan')}>Registry Scan</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
