const createError = require('http-errors');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const logger = require('morgan');

const app = express();

/* Routes */
const authRouter = require('./routes/auth');

/* Mongodb connections */
const db = require('./helper/db')();

/* Middleware */
const admin_guard = require('./middleware/admin_guard')

/* require config file with JWT */
const config = require('./config');

app.set('api_secret_key', config.api_secret_key);

app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use('/auth', authRouter);


// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  res.json({
    status: err.status || 500,
    message: err.message
  });
});

module.exports = app;
