import React from 'react';
import GameCard from './GameCard';
import '../styles/GameList.css';

function GameList({ games }) {
  return (
    <div className="game-list">
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
}

export default GameList;
