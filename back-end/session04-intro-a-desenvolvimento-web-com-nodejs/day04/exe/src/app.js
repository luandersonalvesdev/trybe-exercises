const express = require('express');
const defaultRouter = require('./routes/defaultRouter');

const app = express();
app.use(express.json());
app.use('/', defaultRouter);

app.use((req, res) => res.status(404).json({message: "nothing to see here"}))

module.exports = app;