const express = require('express');
const server = express();
const configureMiddleware = require('./middleware');
const accounts = require('./routes/accounts');

configureMiddleware(server);

server.get('/', (req, res) => {
    res.send(`<h2>Welcome to Accounts Database!</h2>`)
  });  

server.use("/api/accounts", accounts);

module.exports = server;