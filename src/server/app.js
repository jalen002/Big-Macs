const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const config = require('./config/init');

//routes 
const bigMacRoutes = require('./api/routes/bigmacs');
const clientInfoRoutes = require('./api/routes/clientinfo');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(config.cors);

app.use('/bigmacs', bigMacRoutes);
app.use('/clientinfo', clientInfoRoutes);

module.exports = app;