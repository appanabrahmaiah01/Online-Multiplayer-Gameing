import React, { useState } from 'react';
import '../styles/Profile.css';

function Profile() {
  const [editing, setEditing] = useState(false);
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    gamesPlayed: 42,
    totalWins: 15,
  });

  const toggleEdit = () => setEditing(!editing);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="profile-container">
      <h2 className="profile-title">👤 User Profile</h2>

      <div className="profile-card">
        <div className="profile-section">
          <label>Name:</label>
          {editing ? (
            <input name="name" value={user.name} onChange={handleChange} />
          ) : (
            <span>{user.name}</span>
          )}
        </div>

        <div className="profile-section">
          <label>Email:</label>
          {editing ? (
            <input name="email" value={user.email} onChange={handleChange} />
          ) : (
            <span>{user.email}</span>
          )}
        </div>

        <div className="profile-section">
          <label>Games Played:</label>
          <span>{user.gamesPlayed}</span>
        </div>

        <div className="profile-section">
          <label>Total Wins:</label>
          <span>{user.totalWins}</span>
        </div>

        <button className="profile-btn" onClick={toggleEdit}>
          {editing ? 'Save Changes' : 'Edit Profile'}
        </button>
      </div>
    </div>
  );
}

export default Profile;
