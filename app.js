const express = require('express');
const morgan = require('morgan');

const routes = require('./routes');

const app = express();

app.set('view engine', 'pug');

app.use(routes);
app.use(morgan('dev'));














module.exports = app;