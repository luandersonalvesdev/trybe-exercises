const express = require('express');
const healthRoute = require('./routes/health');
const userRoute = require('./routes/user');

const app = express();

app.use(express.json());

app.use('/health', healthRoute);
app.use('/users', userRoute);

app.get('/', (req, res) => res.status(200).json({message: 'a'}));

module.exports = app;