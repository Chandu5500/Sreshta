var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var data={};
    data.msg="Hello!"
    res.send(JSON.stringify(data));
});

module.exports = router;
