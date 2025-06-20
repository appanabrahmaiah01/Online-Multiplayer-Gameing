// src/components/Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaUserCircle, FaBell } from "react-icons/fa";
import "../styles/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true); // simulate auth state

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleLogin = () => setIsLoggedIn(!isLoggedIn);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="navbar-logo">GameZone</div>

        <ul className="nav-links">
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/tournaments">Tournaments</Link></li>
          <li><Link to="/leaderboard">Leaderboard</Link></li>
          <li><Link to="/wallet">Wallet</Link></li>
          <li><Link to="/admin">Admin</Link></li>
        </ul>
      </div>

      <div className="navbar-right">
        <FaBell className="navbar-icon" />
        {isLoggedIn ? (
          <div className="profile-icon">
            <FaUserCircle size={22} />
            <ul className="dropdown-menu">
              <li><Link to="/profile">Profile</Link></li>
              <li><button onClick={toggleLogin}>Logout</button></li>
            </ul>
          </div>
        ) : (
          <button className="login-btn" onClick={toggleLogin}>Login</button>
        )}
        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {menuOpen && (
        <ul className="nav-links-mobile">
          <li><Link to="/" onClick={toggleMenu}>Dashboard</Link></li>
          <li><Link to="/tournaments" onClick={toggleMenu}>Tournaments</Link></li>
          <li><Link to="/leaderboard" onClick={toggleMenu}>Leaderboard</Link></li>
          <li><Link to="/wallet" onClick={toggleMenu}>Wallet</Link></li>
          <li><Link to="/admin" onClick={toggleMenu}>Admin</Link></li>
          <li><Link to="/profile" onClick={toggleMenu}>Profile</Link></li>
          <li><button onClick={toggleLogin}>Logout</button></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
