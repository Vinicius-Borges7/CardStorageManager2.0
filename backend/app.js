// Dependencies //
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Classes and their Instantiation //
const Server = require('./config/server');
const server = new Server(app);

// Middlewares //
app.use(bodyParser.json());

// Services //
const crud = require('./services/crud');

app.use('/crud', crud);

// Main Code //
server.start();  