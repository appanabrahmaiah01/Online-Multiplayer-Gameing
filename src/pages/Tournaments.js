import React from 'react';
import '../styles/Tournaments.css'; // Assuming your CSS is saved here
import valorantImg from '../assets/Images/valorant.jpeg';
import cs2Img from '../assets/Images/cs2.jpeg';
import apexImg from '../assets/Images/apex.jpeg';

const tournaments = [
  {
    id: 1,
    title: 'Valorant Clash Cup',
    image: valorantImg,
    tag: 'FPS',
    status: 'live',
    entryFee: '₹150',
    prizePool: '₹12,000',
    players: '22/32',
    startTime: 'Today, 6:00 PM',
  },
  {
    id: 2,
    title: 'CS2 DustDown',
    image: cs2Img,
    tag: 'FPS',
    status: 'upcoming',
    entryFee: '₹100',
    prizePool: '₹8,000',
    players: '18/32',
    startTime: 'Tomorrow, 4:30 PM',
  },
  {
    id: 3,
    title: 'Apex Blitz Night',
    image: apexImg,
    tag: 'Battle Royale',
    status: 'full',
    entryFee: '₹200',
    prizePool: '₹15,000',
    players: '64/64',
    startTime: 'Tonight, 9:00 PM',
  },
];

const Tournaments = () => {
  return (
    <div className="tournaments-container">
      <h2 className="tournaments-title">🎮 Ongoing Tournaments</h2>

      <div className="tournament-filters">
        <input type="text" placeholder="🔍 Search" />
        <select>
          <option>All Games</option>
          <option>Valorant</option>
          <option>CS2</option>
          <option>Apex</option>
        </select>
        <select>
          <option>All Types</option>
          <option>Solo</option>
          <option>Duo</option>
          <option>Squad</option>
        </select>
      </div>

      <div className="tournament-games">
        {tournaments.map((t) => (
          <div key={t.id} className="tournament-card">
            <div className="tournament-image-wrapper">
              <img src={t.image} alt={t.title} className="tournament-image" />
              <span className="tournament-tag">{t.tag}</span>
              <span className={`tournament-status ${t.status}`}>{t.status}</span>
            </div>
            <div className="tournament-info">
              <h3>{t.title}</h3>
              <ul className="tournament-meta">
                <li>Entry Fee: <span>{t.entryFee}</span></li>
                <li>Prize Pool: <span>{t.prizePool}</span></li>
                <li>Players: <span>{t.players}</span></li>
                <li>Starts: <span>{t.startTime}</span></li>
              </ul>
              <div className="tournament-buttons">
                <button className="btn white">Details</button>
                <button className="btn green">Join</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tournaments;
