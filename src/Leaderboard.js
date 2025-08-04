import React from 'react';
import './Leaderboard.css';
import { Link } from 'react-router-dom';

const Leaderboard = () => {
  const leaders = [
    { name: 'Anika Sharma', amount: 18500 },
    { name: 'Ravi Kumar', amount: 16000 },
    { name: 'Priya Das', amount: 14200 },
    { name: 'Jessica U', amount: 13200 },
    { name: 'Kunal Mehta', amount: 12500 },
  ];

  return (
    <div className="leaderboard-page">
      <div className="header-row">
        <h1 className="welcome">🏆 Leaderboard</h1>
        <Link to="/">
          <button className="logout-button">Back</button>
        </Link>
      </div>

      <div className="leaderboard-table-container">
        <table className="leaderboard-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {leaders.map((leader, index) => (
              <tr key={index} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
                <td>{leader.name}</td>
                <td>₹{leader.amount.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;