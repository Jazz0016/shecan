import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom';

const handleLogout = () => {
  // Clear local storage/session and redirect to login
  localStorage.clear();
  window.location.href = '/';
};


const Dashboard = () => {
  const [totalDonations, setTotalDonations] = useState(0);

  useEffect(() => {
    fetch('https://shecan-backend-jessica-jasmine.onrender.com/api/donations/total')
      .then((res) => res.json())
      .then((data) => setTotalDonations(data.total_donations))
      .catch((err) => console.error("Failed to fetch donations:", err));
  }, []);

  return (
    <div className="dashboard">
      <div className="top-bar">
        <h1 className="welcome">Welcome Jessica</h1>
        <button className="logout-button" onClick={handleLogout}>LOGOUT</button>

      </div>

      <div className="ref-leader-row">
        <p className="ref-code">
          Referral Code: <span>jessica2025</span>
        </p>
        <Link to="/leaderboard" className="leaderboard-link">
          <button className="leaderboard-button">
            🏆 <span>Leaderboard</span>
          </button>
        </Link>
      </div>

      <div className="box-row">
        <div className="donation-box">
          <h2>Total Donations</h2>
          <p>₹{totalDonations}</p>
        </div>

        <div className="rewards-box">
          <h2>Rewards</h2>
          <Link to="/rewards">
            <button className="view-rewards-button">View Rewards</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
