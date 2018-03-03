var express = require('express');
var app = express();
var webhook = require('./routes/webhook');

var log4jsConfig = require('./log4js-config');

var log4js = require('log4js');
var logger = log4js.getLogger();

app.use('/utils', webhook);

app.listen(9008, function () {
    logger.debug('app start');
});

