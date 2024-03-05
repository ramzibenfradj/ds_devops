const express = require('express');
const app = express();

app.post('/tasks', (req, res) => {
  res.send('Hello World!');
});

module.exports = app; // export the app for testing

