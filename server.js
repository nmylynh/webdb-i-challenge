const express = require('express');
const server = express();
const configureMiddleware = require('./middleware');
const accountsDB = require('./data/accounts-model');

configureMiddleware(server);

server.get('/', (req, res) => {
    res.send(`<h2>Welcome to Accounts Database!</h2>`)
  });  

server.use("/api/accounts", accountsDB);

module.exports = server;