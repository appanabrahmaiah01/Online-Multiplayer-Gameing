// src/components/Leaderboard.js
import React, { useState } from "react";
import "../styles/Leaderboard.css";

const leaderboardData = [
  {
    rank: 1,
    username: "TenZ_Valorant",
    name: "Tyson Ngo",
    avatar: "/avatars/tenz.jpeg",
    points: 29600,
    wins: 342,
    earnings: 125000,
    level: 87,
  },
  {
    rank: 2,
    username: "s1mple_CS",
    name: "Oleksandr Kostyliev",
    avatar: "/avatars/s1mple.jpeg",
    points: 24750,
    wins: 298,
    earnings: 98500,
    level: 84,
  },
  {
    rank: 3,
    username: "Ninja_Apex",
    name: "Tyler Blevins",
    avatar: "/avatars/ninja.jpeg",
    points: 22525,
    wins: 276,
    earnings: 87250,
    level: 82,
  },
];


const Leaderboard = () => {
  const [page, setPage] = useState(1);

  return (
    <div className="leaderboard-container">
      <div className="leaderboard-header">
        <h2>Global Leaderboard</h2>
        <div className="filters">
          <button className="dropdown">Overall ▼</button>
          <button className="dropdown">Points ▼</button>
        </div>
      </div>

      <table className="leaderboard-table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Player</th>
            <th>Points</th>
            <th>Wins</th>
            <th>Earnings</th>
            <th>Level</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardData.map((player, index) => (
            <tr key={index} className={`rank-${player.rank}`}>
              <td>
                <span className={`rank-icon rank-${player.rank}`}>#{player.rank}</span>
              </td>
              <td className="player-info">
                <img src={player.avatar} alt={player.username} className="avatar" />
                <div>
                  <div className="username">{player.username}</div>
                  <div className="realname">{player.name}</div>
                </div>
              </td>
              <td className="points">{player.points}</td>
              <td>{player.wins}</td>
              <td className="earnings">₹{player.earnings.toLocaleString()}</td>
              <td className="level">{player.level}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <button disabled={page === 1}>Previous</button>
        {[1, 2, 3].map((num) => (
          <button key={num} className={page === num ? "active" : ""} onClick={() => setPage(num)}>
            {num}
          </button>
        ))}
        <button disabled={page === 3}>Next</button>
      </div>
    </div>
  );
};

export default Leaderboard;
