const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

const routes = require('./routes/index');
const helpers = require('./helpers');

//create Express app
const app = express();

//view engin setup
app.set('views', path.join(__dirname, 'views')); //folder where pug files exist
app.set('view engine', 'pug'); //use the engine pug

//serves static files from public folder
app.use(express.static(path.join(__dirname, 'public')));

//takes the raw requests and make them usable properties on req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

//pass variables to the templates to all requests
app.use((req, res, next) => {
  res.locals.helpers = helpers;
  next();
});

//handle the routes
app.use('/', routes);

module.exports = app;
