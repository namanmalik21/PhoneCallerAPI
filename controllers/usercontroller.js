const jwt = require('jsonwebtoken');
const User = require('../models/user');
require('dotenv').config();

const jwtSecret = process.env.JWT_SECRET;


async function getUserProfile(req, res) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const decodedToken = jwt.verify(token, jwtSecret);
    const userId = decodedToken.userId;

    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(user);
  } catch (error) {
    if (error.name === 'JsonWebTokenError') {
      
      return res.status(401).json({ message: 'Invalid token' });
      
    }
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getUserProfile,
};
