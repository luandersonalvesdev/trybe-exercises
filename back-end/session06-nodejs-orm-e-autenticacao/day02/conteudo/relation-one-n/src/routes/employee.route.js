const express = require('express');
const {employeeController} = require('../controllers');

const route = express.Router();

route.get('/', employeeController.getAll);
route.get('/:id', employeeController.getById);

module.exports = route;