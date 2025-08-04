// src/Rewards/Rewards.js
import React from 'react';
import './Rewards.css';

const Rewards = () => {
  return (
    <div className="rewards-page">
      <h1>Rewards & Unlockables</h1>
      <div className="reward-card">
        <h3>🌟 Bronze Supporter</h3>
        <p>Unlock by donating ₹100</p>
      </div>
      <div className="reward-card">
        <h3>🏅 Silver Contributor</h3>
        <p>Unlock by donating ₹500</p>
      </div>
      <div className="reward-card">
        <h3>🎖️ Gold Champion</h3>
        <p>Unlock by donating ₹1000</p>
      </div>
    </div>
  );
};

export default Rewards;
