const express = require("express");
const app = express();

// Routes
const authRoutes = require('./routes/auth');

app.use('/auth', authRoutes);

app.get('/', (req, res) => {
    res.send('Hello NODE API');
});

module.exports = app;