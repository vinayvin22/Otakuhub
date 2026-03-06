const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Register
router.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log('SIGNUP username:', username);
    console.log('SIGNUP password:', password);

    // Check if user already exists
    const existing = await User.findOne({ username });
    if (existing) {
      return res.status(400).json({ msg: 'Username already exists' });
    }

    const hashed = await bcrypt.hash(password, 10);
    const user = new User({ username, password: hashed });
    await user.save();
    res.json({ msg: 'Registered successfully' });
  } catch (err) {
    console.error('SIGNUP ERROR:', err);
    res.status(500).json({ msg: 'Server error', error: err.message });
  }
});

// Login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) return res.status(400).json({ msg: 'User not found' });
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

  const token = jwt.sign({ id: user._id }, 'secret123');
  res.json({ token, user: { id: user._id, username: user.username } });
});

module.exports = router;
