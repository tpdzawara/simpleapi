const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');


const app = express();

//import routes
const adminRoute = require('./api/routes/admin');

//Database config
const database = require('./api/utils/database');

//Connecting to mongoose
mongoose.connect(database.mongoURI,
    {useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true })
    .then(() => console.log('Database Connected'))
    .catch(err => console.log(err));
//Preventing mongoose from global errors
mongoose.Promise = global.Promise;

app.use(cors());

app.use(express.json());

app.use(morgan('dev'));

app.use('/admin', adminRoute);


module.exports = app;