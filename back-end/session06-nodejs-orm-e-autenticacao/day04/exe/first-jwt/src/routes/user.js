const express = require('express');
const { User } = require('../models');

const route = express.Router();

route.get('/', async (_req, res) => {
  const users = await User.findAll();
  res.status(200).json(users);
});

module.exports = route;