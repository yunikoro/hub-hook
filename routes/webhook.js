var express = require('express');
var router = express.Router();
var log4js = require('log4js');

var logger = log4js.getLogger();

router.all('/hook', function (req, res) {
    logger.debug('hook in');
    res.json({ test: 'success' });
});

module.exports = router;



var obj = {
    ruleobj: [
        {
            ruleCode: 2,
            ruleValue: "1,2,3"
        },
        {
            ruleCode: 3,
            ruleValue: "1,2,3"
        },
        {
            ruleCode: 4,
            ruleValue: "1,2,3"
        },
    ]
}