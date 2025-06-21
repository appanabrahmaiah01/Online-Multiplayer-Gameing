import React, { useState } from 'react';
import '../styles/Tournaments.css';
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
    game: 'Valorant',
    type: 'Solo',
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
    game: 'CS2',
    type: 'Duo',
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
    game: 'Apex',
    type: 'Squad',
  },
];

const Tournaments = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGame, setSelectedGame] = useState('All');
  const [selectedType, setSelectedType] = useState('All');

  const filteredTournaments = tournaments.filter((t) => {
    const matchSearch = t.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchGame = selectedGame === 'All' || t.game === selectedGame;
    const matchType = selectedType === 'All' || t.type === selectedType;
    return matchSearch && matchGame && matchType;
  });

  return (
    <div className="tournaments-container">
      <h2 className="tournaments-title">🎮 Ongoing Tournaments</h2>

      <div className="tournament-filters">
        <input
          type="text"
          placeholder="🔍 Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select value={selectedGame} onChange={(e) => setSelectedGame(e.target.value)}>
          <option value="All">All Games</option>
          <option value="Valorant">Valorant</option>
          <option value="CS2">CS2</option>
          <option value="Apex">Apex</option>
        </select>

        <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
          <option value="All">All Types</option>
          <option value="Solo">Solo</option>
          <option value="Duo">Duo</option>
          <option value="Squad">Squad</option>
        </select>
      </div>

      <div className="tournament-games">
        {filteredTournaments.map((t) => (
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
        {filteredTournaments.length === 0 && (
          <p className="no-results">No tournaments match your search.</p>
        )}
      </div>
    </div>
  );
};

export default Tournaments;
