// Dependencies //
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Classes and their Instantiation //
const Server = require('./config/server');
const server = new Server(app);

// Enviroment Variables Call //
const { PORT } = process.env;

// Middlewares //
app.use(bodyParser.json());

// Main Code //
server.start();  