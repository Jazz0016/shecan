const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({ origin: 'https://shecan-frontend-jessica.onrender.com' })); // allow React frontend
app.use(express.json());

// Dummy user
const dummyUser = {
  username: 'user',
  password: '12345',
  name: 'Jessica',
  referralCode: 'jessica2025',
  totalDonations: 13200,
};

// API login route
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  if (username === dummyUser.username && password === dummyUser.password) {
    res.json({
      success: true,
      user: {
        name: dummyUser.name,
        referralCode: dummyUser.referralCode,
        totalDonations: dummyUser.totalDonations,
      },
    });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

// API route to get total donations (used by Dashboard)
app.get('/api/donations/total', (req, res) => {
  res.json({ total_donations: dummyUser.totalDonations });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
