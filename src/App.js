import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Dashboard';
import Rewards from './Rewards';
import Leaderboard from './Leaderboard';

function App() {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    const res = await fetch('http://localhost:5000/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (data.success) {
      setIsLoggedIn(true);
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <Router>
      <Routes>
        {!isLoggedIn ? (
          <Route
            path="/"
            element={
              <div className="login-container">
                <div className="login-card">
                  <h2>Intern Login</h2>
                  <input
                    type="text"
                    name="username"
                    placeholder="user"
                    className="input-field"
                    onChange={handleChange}
                  />
                  <input
                    type="password"
                    name="password"
                    placeholder="12345"
                    className="input-field"
                    onChange={handleChange}
                  />
                  <button className="login-btn" onClick={handleLogin}>
                    Login
                  </button>
                  {error && (
                    <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>
                  )}
                  <p className="signup-text">
                    Don't have an account? <a href="#">Sign up</a>
                  </p>
                </div>
              </div>
            }
          />
        ) : (
          <>
            <Route path="/" element={<Dashboard />} />
            <Route path="/rewards" element={<Rewards />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
