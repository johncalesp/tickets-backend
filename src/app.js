const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const api = require('./routes/api');

const app = express();

app.use(
  cors({
    origin: [
      'http://localhost:3500',
      'http://192.168.2.15:3500',
      /\.netlify\.app$/,
    ],
  })
);

app.use(morgan('combined'));

app.use(express.json());

app.use('/api', api);

app.get('/api/test', (req, res) => {
  res.status(201).json({ result: 'success' });
});

module.exports = app;
