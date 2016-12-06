const express = require('express');
const config = require('dos-config');

const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use('/', require('./routes/index'));
app.use('/authenticate', require('./routes/authentication/index'));

module.exports = app;
