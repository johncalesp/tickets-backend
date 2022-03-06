const express = require('express');
const { httpGetTicketsByUser } = require('./tickets.controller');
const auth = require('../../middleware/auth');

const ticketsRouter = express.Router();

ticketsRouter.get(
  '/all_tickets/:id/:page?/:limit?',
  auth,
  httpGetTicketsByUser
);

module.exports = ticketsRouter;
