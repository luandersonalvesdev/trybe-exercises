// src/app.js

const express = require('express');
const apiCredentials = require('./middlewares/apiCredentials');
const teamsRouter = require('./routes/teamsRouter');
require('express-async-errors');

const app = express();
app.use(apiCredentials);
app.use(express.json());
app.use('/teams', teamsRouter);

app.use((req, res) => res.status(404).json({ message: 'errou a rota amigao, tem nada aqui' }));

module.exports = app;