var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var user_db = require("./seed.js");

app.use("/",bodyParser.urlencoded({extended:false}));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use("/",function (req, res, next) {
    console.log("Request");
    console.log(req.url);
    console.log(req.method);
    next();
});

//API part of the server

// 1. Get all Contacts
app.get("/users",function (req, res) {
    var user_ACTIVE = {};
    for ( var i=1; i < user_db.next_user_id; i++ ) {
        if ( user_db.userList[i].status === user_db.StatusENUMS.ACTIVE ) {
            user_ACTIVE[i]=user_db.userList[i];
        }
    }
    res.json(user_ACTIVE);
});

//2. Add new user
app.post("/user/add",function (req, res) {
    var user = req.body.user_title;
    var officeMobNo = req.body.officeNumber;
    var personalMobNo = req.body.personalNumber;
    var address = req.body.address;
    if(!user || user ==="" || user.trim() ==="") {
        res.status(400).json({err: "user title can't be empty"});
    }else if(!officeMobNo || officeMobNo === "" || officeMobNo.trim()===""){
            res.status(400).json({err: "Mob No can't be empty"});
        }else if(!personalMobNo || personalMobNo === "" || personalMobNo.trim()===""){
        res.status(400).json({err: "Mob No can't be empty"});
    }else if(!address || address === "" || address.trim()===""){
        res.status(400).json({err: "Mob No can't be empty"});
    }else {
        user_db.userList[user_db.next_user_id] = {
            title: req.body.user_title,
            officeMobNo: req.body.officeNumber,
            personalMobNo: req.body.personalNumber,
            address: req.body.address,
            status: user_db.StatusENUMS.ACTIVE
        };
        user_db.next_user_id = user_db.next_user_id + 1;
    }
    res.json(user_db.userList);
});