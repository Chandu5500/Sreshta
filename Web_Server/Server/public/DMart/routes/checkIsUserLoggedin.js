var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var data={
        status: req.session.isUserLoggedin
        
    };
    data = JSON.stringify(data);
    res.send(data);
});

module.exports = router;
