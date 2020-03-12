const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
//This was missing
const bodyParser = require('body-parser');
const app = express();

const authenticate = require('./api/middleware/authenticate');

//import routes
const registrationRoute = require('./api/routes/registration');
const adminROute = require('./api/routes/admin');
//Database config
const { mongoURI } = require('./api/utils/database');

//Connecting to mongoose
mongoose.connect(mongoURI,
    {useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true })
    .then(() => console.log('Database Connected'))
    .catch(err => console.log(err));
//Preventing mongoose from global errors
mongoose.Promise = global.Promise;


app.use(cors());

//app.use(bodyParser.urlencoded({ extended: false }));
//app.use(express.json());
app.use(bodyParser.json()); // express.json and bodyparser works the same thing new express comes with innbuilt jsonparser

app.use(morgan('dev'));

app.use('/admin', registrationRoute);
app.use('/admin', adminROute)


module.exports = app;