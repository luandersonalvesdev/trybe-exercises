// src/app.js

const express = require('express');
const peopleRoutes = require('./routes/peopleRoutes');

const app = express();

app.use(express.json());

app.use('/people', peopleRoutes);

app.get('/', (req, res) => res.status(200).json({message: "server saudável"}));

app.get((req, res) => res.status(404).json({message: "ta perdido amigão?"}));

module.exports = app;