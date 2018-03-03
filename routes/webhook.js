var express = require('express');
var router = express.Router();
var log4js = require('log4js');

var logger = log4js.getLogger();

var child_process = require('child_process');
var path = require('path');

router.all('/hook', function (req, res) {
    logger.debug('hook in');
    logger.debug(req.body);

    logger.debug(path.resolve(__dirname, '../load.sh'));
    var dir = path.resolve(__dirname, '..');
    child_process.execFile(path.resolve(__dirname, '../load.sh'), [], { shell: true }, function (error, stdout, stderr) {
        if(error) {
            throw error;
        }
        logger.debug(stdout);
    })
    res.json({status: 0});
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