import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const NavBar = ({ linkIsActive }) => {
  return (
    <div className="navbar-container">
      <div className="navbar-logo">
        <p>Supreme Treat ent.</p>
      </div>
      <div className="navbar-links-container">
        <div className="navbar-link">
          <Link to="/">
            <h4>Home</h4>
          </Link>
        </div>
        <div className="navbar-link">
          <Link to="/cardinal-bulletin">
            <h4>Cardinal Bulletin</h4>
          </Link>
        </div>
        <div className="navbar-link">
          <Link to="/stay-creative-records">
            <h4>Stay Creative Records</h4>
          </Link>
        </div>
        <div className="navbar-link">
          <Link to="/contact">
            <h4>Contact</h4>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
