const express = require('express');

const employeeRoute = require('./routes/employee.route');

const app = express();

app.use(express.json());

app.use('/employees', employeeRoute);

module.exports = app;