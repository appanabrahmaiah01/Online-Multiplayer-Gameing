// src/components/Navbar.js
import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes, FaUserCircle, FaBell } from "react-icons/fa";
import "../styles/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const navigate = useNavigate();
  const profileRef = useRef();
  const notifRef = useRef();

  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleProfileMenu = () => setShowProfileMenu(!showProfileMenu);
  const toggleNotifications = () => setShowNotifications(!showNotifications);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setShowProfileMenu(false);
      }
      if (notifRef.current && !notifRef.current.contains(e.target)) {
        setShowNotifications(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
        {isLoggedIn ? (
          <>
            <div className="notification-wrapper" ref={notifRef}>
              <FaBell className="navbar-icon" onClick={toggleNotifications} />
              {showNotifications && (
                <div className="notification-dropdown">
                  <div className="notification-item">🎉 New tournament added!</div>
                  <div className="notification-item">💰 Wallet credited ₹100</div>
                  <div className="notification-item">🏆 You ranked #3 in Valorant!</div>
                </div>
              )}
            </div>

            <div className="profile-icon" onClick={toggleProfileMenu} ref={profileRef}>
              <FaUserCircle size={22} />
              {showProfileMenu && (
                <ul className="dropdown-menu">
                  <li><Link to="/profile">Profile</Link></li>
                  <li><button onClick={handleLogout}>Logout</button></li>
                </ul>
              )}
            </div>
          </>
        ) : (
          <div className="auth-buttons">
            <button className="login-btn" onClick={() => navigate("/login")}>Login</button>
            <button className="register-btn" onClick={() => navigate("/signup")}>Register</button>
          </div>
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
          {isLoggedIn ? (
            <>
              <li><Link to="/profile" onClick={toggleMenu}>Profile</Link></li>
              <li><button onClick={handleLogout}>Logout</button></li>
            </>
          ) : (
            <>
              <li><button onClick={() => { toggleMenu(); navigate("/login"); }}>Login</button></li>
              <li><button onClick={() => { toggleMenu(); navigate("/signup"); }}>Register</button></li>
            </>
          )}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
