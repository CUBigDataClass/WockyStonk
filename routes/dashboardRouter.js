// AUTHOR: Jonathan Phouminh
// Date: March 1st, 2021 

require('dotenv').config();
const K = require(__dirname + "/../K.js");
const express = require('express');
const router = express.Router(); 

// This gets called anytime a request is made to this route
router.use(function timeLog (req, res, next) {
    next();
})

//- Make sure you are recieving the data here 
router.route('/')
    .post(function (req,res) {
        res.send({success: true});
    });

// add specific dashboard post requests routes here for each component

module.exports = router; 