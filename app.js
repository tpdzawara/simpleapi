const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

//Database config
const database = require('./api/utils/database');

//Preventing mongoose from global errors
mongoose.Promise = global.Promise;

//Connecting to mongoose
mongoose.connect(database.mongoURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('Database Connected'))
    .catch(err => console.log(err));

//BodyParse Middleware
app.use(bodyParser.urlencoded({extends: false}));
app.use(bodyParser.json());

app.use(morgan('dev'));




module.exports = app;