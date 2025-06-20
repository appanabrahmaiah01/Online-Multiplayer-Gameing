import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/GameCard.css';

function GameCard({ game }) {
  return (
    <Link to={`/game/${game.id}`} className="game-card-link">
      <div className="game-card">
        <img src={game.thumbnail} alt={game.title} />
        <h3>{game.title}</h3>
        <p>{game.genre}</p>
      </div>
    </Link>
  );
}

export default GameCard;
