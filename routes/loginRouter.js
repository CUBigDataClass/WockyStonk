// AUTHOR: Jonathan Phouminh
// Date: March 1st, 2021 

require('dotenv').config();
const K = require(__dirname + "/../K.js");
const express = require('express');
const router = express.Router(); 

// This gets called anytime a request is made to this route
router.use(function timeLog (req, res, next) {
    console.log(K.port)
    console.log('Time: ', Date.now());
    next();
})

router.route('/')
    .get(function (req, res){
        console.log("get")
        res.render('login.ejs');
    })
    .post(function (req,res) {
        console.log("POST RECEIVED FROM LOGIN");
        res.send('success');
    });

module.exports = router; 