var express = require('express');
var router = express.Router();

/*var mongodb = require("mongodb");
var mongoClient = mongodb.MongoClient;*/

var mongoClient = require("mongodb").MongoClient;
var dbUrl = 'mongodb://localhost:27017';

/* GET home page. */
router.post('/', function(req, res, next) {

    console.log(req.query); //get the data been passed by used through GET method
    console.log(req.body); //get the data been passed by used through POST method
    var data={};

    mongoClient.connect(dbUrl, (error, client)=>{
        if (error){
            //error while connecting to DB
        }else{
            var db = client.db("DMart");
            var collection = db.collection("userAccountDetails");
            collection.find({}).toArray((error, details) =>{
                console.log(details);
                if (req.body.userId=="Chandu_77" && req.body.userPsw=="Chandu@1"){
                    req.session.isUserLoggedin = true;
                    req.session.cookie.expires = new Date(Date.now() + 1)
                    req.session.cookie.maxAge = hour
                    data.msg= "Valid"
                }else{
                    req.session.isUserLoggedin = false;
                    data.msg= "Invalid"
                }
                client.close();
                res.send(JSON.stringify(data));
            })
        }
    });

});

router.get('/', function(req, res, next) {

    console.log(req.query); //get the data been passed by used through GET method
    console.log(req.body); //get the data been passed by used through POST method
    var data={};

    if (req.query.userId=="Chandu_77" && req.query.userPsw=="Chandu@1"){
        req.session.isUserLoggedin = true;
        data.msg= "Valid"
    }else{
        req.session.isUserLoggedin = false;
        data.msg= "Invalid"
    }
    console.log("req.session.isUserLoggedin");
    console.log(req.session.isUserLoggedin);
    res.send(JSON.stringify(data));   
});
module.exports = router;
