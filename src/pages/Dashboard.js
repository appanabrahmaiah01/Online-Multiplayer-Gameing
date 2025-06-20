import React from 'react';
import WalletActions from '../components/WalletActions';
import '../styles/WalletActions.css';
import '../styles/Dashboard.css';

import valorantImg from '../assets/Images/valorant.jpeg';
import cs2Img from '../assets/Images/cs2.jpeg';
import apexImg from '../assets/Images/apex.jpeg';

const liveMatches = [
  {
    title: 'VALORANT Championship',
    stage: 'Round of 16 • Live',
    status: 'LIVE',
    image: valorantImg,
    buttonLabel: 'View',
  },
  {
    title: 'CS2 Pro League',
    stage: 'Semifinals • Starting in 15 min',
    status: 'UPCOMING',
    image: cs2Img,
    buttonLabel: 'View',
  },
  {
    title: 'Apex Legends Tournament',
    stage: 'Final • Completed',
    status: 'COMPLETED',
    image: apexImg,
    buttonLabel: 'Results',
  },
];

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* 👋 Welcome Header + Stat Cards */}
      <div className="dashboard-header">
        <h2 className="welcome-title">
          Welcome back, <span className="username">Io</span>
        </h2>
        <p className="welcome-subtext">Ready to dominate the competition?</p>

        <div className="stats-grid">
          <div className="stat-card green">
            <p>Wallet Balance</p>
            <h3>₹0 <span className="icon">$</span></h3>
          </div>
          <div className="stat-card blue">
            <p>Active Tournaments</p>
            <h3>3 <span className="icon">🏆</span></h3>
          </div>
          <div className="stat-card purple">
            <p>Total Wins</p>
            <h3>127 <span className="icon">🎯</span></h3>
          </div>
          <div className="stat-card orange">
            <p>Global Rank</p>
            <h3>#847 <span className="icon">⚡</span></h3>
          </div>
        </div>
      </div>

      {/* Two-column layout */}
      <div className="dashboard-main-grid">
        {/* 🔴 Live Matches (Left) */}
        <section className="live-matches-section">
          <h2>Live Matches</h2>
          <div className="live-matches-list">
            {liveMatches.map((match, index) => (
              <div className="match-item" key={index}>
                <img src={match.image} alt={match.title} className="match-image" />
                <div className="match-details">
                  <h3>{match.title}</h3>
                  <p>{match.stage}</p>
                  <div className="match-meta">
                    <span className={`status-badge ${match.status.toLowerCase()}`}>
                      {match.status}
                    </span>
                    <button className="view-button">{match.buttonLabel}</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 🎮 Quick Join + Wallet (Right) */}
        <div className="right-panel">
          <section className="quick-join-section">
            <h2>Quick Join</h2>
            <div className="quick-join-card">
              <img
                src="/images/quickjoin.jpg"
                alt="Tournament"
                className="quick-join-image"
              />
              <div className="quick-join-details">
                <h3>Fortnite Friday Finals</h3>
                <p><strong>Entry Fee:</strong> <span className="fee">₹100</span></p>
                <p><strong>Prize Pool:</strong> <span className="pool">₹10,000</span></p>
                <p><strong>Slots Left:</strong> <span className="slots">3/64</span></p>
                <button className="join-btn">Join Tournament</button>
              </div>
            </div>
          </section>

          <div className="wallet-actions-wrapper">
            <WalletActions />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
