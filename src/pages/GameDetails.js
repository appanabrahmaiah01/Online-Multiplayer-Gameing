import React from 'react';
import { useParams } from 'react-router-dom';

import battleImage from '../assets/Images/battle.jpg';
import puzzleImage from '../assets/Images/puzzle.jpg';

const sampleGames = [
  { id: 1, title: 'Battle Royale', genre: 'Action', description: 'Fight to be the last player alive!', thumbnail: battleImage },
  { id: 2, title: 'Puzzle World', genre: 'Puzzle', description: 'Solve puzzles and explore the world!', thumbnail: puzzleImage },
];

function GameDetails() {
  const { id } = useParams();
  const game = sampleGames.find(g => g.id === parseInt(id));

  if (!game) {
    return <div style={{ padding: '20px' }}>Game not found!</div>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>{game.title}</h2>
      <img src={game.thumbnail} alt={game.title} style={{ width: '300px', borderRadius: '10px' }} />
      <p><strong>Genre:</strong> {game.genre}</p>
      <p><strong>Description:</strong> {game.description}</p>
    </div>
  );
}

export default GameDetails;
