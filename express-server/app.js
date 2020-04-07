const createError = require('http-errors');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const logger = require('morgan');

const app = express();

/* Routes */
const authRouter = require('./routes/auth');
const usersRouter = require('./routes/users');
const adminsRouter = require('./routes/admins');
const questionsRouter = require('./routes/questions');

/* Mongodb connections */
const db = require('./helper/db')();

/* Middleware */
const guards = require('./middleware/guards')

/* require config file with JWT */
const config = require('./config');

app.set('api_secret_key', config.api_secret_key);

app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api/admins', guards.admin);
app.use('/api/users', guards.admin);
app.use('/api/questions', guards.user);

app.use('/auth', authRouter);
app.use('/api', adminsRouter);
app.use('/api', usersRouter);
app.use('/api', questionsRouter);

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
