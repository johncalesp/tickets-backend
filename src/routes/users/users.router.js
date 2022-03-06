const express = require('express');
const {
  httpLogin,
  httpUpdateUser,
  httpGetAllUsers,
} = require('./users.controller');
const auth = require('../../middleware/auth');

const usersRouter = express.Router();

usersRouter.post('/login', httpLogin);
usersRouter.post('/update_user', auth, httpUpdateUser);
usersRouter.get('/all_users', auth, httpGetAllUsers);

module.exports = usersRouter;
