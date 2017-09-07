const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const app = express();

mongoose.Promise = global.Promise;
if (process.env.NODE_EVN !== 'test') {
	mongoose.connect('mongodb://localhost/muber');
}

// MUST BE ABOVE ROUTES(APP)
app.use(bodyParser.json());
routes(app);

module.exports = app;
