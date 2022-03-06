const express = require('express');

const usersRouter = require('./users/users.router');
const ticketsRouter = require('./tickets/tickets.router');

const api = express.Router();

api.use('/users', usersRouter);
api.use('/tickets', ticketsRouter);

module.exports = api;
