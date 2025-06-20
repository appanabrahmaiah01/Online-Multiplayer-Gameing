import React, { useState } from 'react';
import '../styles/Admin.css';

import {
  FaTachometerAlt,
  FaUsers,
  FaTrophy,
  FaGamepad,
  FaWallet,
  FaCogs,
  FaSignOutAlt
} from 'react-icons/fa';

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="admin-dashboard">
            <h3>Admin Dashboard</h3>
            <div className="admin-stats">
              <p><strong>Total Users:</strong> 1280</p>
              <p><strong>Active Tournaments:</strong> 5</p>
              <p><strong>Completed Matches:</strong> 82</p>
              <p><strong>Total Payouts:</strong> ₹92,000</p>
            </div>
          </div>
        );

      case 'users':
        return (
          <div className="admin-content">
            <h2>User Management</h2>
            <ul className="admin-list">
              <li>User123 - user@example.com <button>Ban</button></li>
            </ul>
          </div>
        );

      case 'tournaments':
        return (
          <div className="admin-content">
            <h2>Tournaments</h2>
            <ul className="admin-list">
              <li>Fortnite Finals - 64/64 Players <button>View</button></li>
            </ul>
          </div>
        );

      case 'matches':
        return (
          <div className="admin-content">
            <h2>Match Control</h2>
            <ul className="admin-list">
              <li>Match 01 - Status: Live <button>End</button></li>
            </ul>
          </div>
        );

      case 'wallet':
        return (
          <div className="admin-content">
            <h2>Wallet & Payments</h2>
            <ul className="admin-list">
              <li>User123 requested ₹500 withdrawal <button>Approve</button> <button>Reject</button></li>
            </ul>
          </div>
        );

      case 'settings':
        return (
          <div className="admin-content">
            <h2>Settings</h2>
            <p>Future admin settings like roles, logs etc.</p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="admin-panel">
      <aside className="admin-sidebar">
        <h3>Admin</h3>
        <ul>
          <li onClick={() => setActiveTab('dashboard')}><FaTachometerAlt /> Dashboard</li>
          <li onClick={() => setActiveTab('users')}><FaUsers /> Users</li>
          <li onClick={() => setActiveTab('tournaments')}><FaTrophy /> Tournaments</li>
          <li onClick={() => setActiveTab('matches')}><FaGamepad /> Matches</li>
          <li onClick={() => setActiveTab('wallet')}><FaWallet /> Wallet</li>
          <li onClick={() => setActiveTab('settings')}><FaCogs /> Settings</li>
          <li><FaSignOutAlt /> Logout</li>
        </ul>
      </aside>

      <main className="admin-main">
        {renderContent()}
      </main>
    </div>
  );
};

export default AdminPanel;
