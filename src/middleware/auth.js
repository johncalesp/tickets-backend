const jwt = require('jsonwebtoken');
require('dotenv').config();

const verifyToken = (req, res, next) => {
  const token = req.headers['x-access-token'];
  if (!token) {
    return res
      .status(403)
      .json({ message: 'A token is required for authentication' });
  }
  try {
    jwt.verify(token, process.env.TOKEN_KEY);
  } catch (err) {
    return res.status(401).json({ message: 'Invalid Token' });
  }
  return next();
};

module.exports = verifyToken;
