var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var log4js = require('log4js');

var webhook = require('./routes/webhook');
var log4jsConfig = require('./log4js-config');

var logger = log4js.getLogger();

app.use(bodyParser.json());
app.use('/utils', webhook);

app.listen(9008, function () {
    logger.debug('app start');
});

