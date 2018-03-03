var log4js = require('log4js');

log4js.configure({
    appenders: {
        utils: { type: 'file', filename: 'utils-logs.log'}
    },
    categories: {
        default: { appenders: ['utils'], level: 'debug'}
    }
});

module.exports = log4js;