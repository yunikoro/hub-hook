var express = require('express');
var router = express.Router();

router.get('/hook', function (req, res) {
    res.json({ test: 'success' });
});

module.exports = router;