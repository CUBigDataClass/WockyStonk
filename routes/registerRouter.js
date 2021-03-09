// AUTHOR: Jonathan Phouminh 
// Date: March 5th, 2021

require('dotenv').config();
const K = require(__dirname + "/../K.js");
const express = require('express');
const router = express.Router();

// This gets called anytime a request is made to this route
router.use(function timeLog (req, res, next) {
    console.log("here"); 
    next();
})

router.route('/')
    .get(function (req, res){
        res.render('dashboard.ejs');
    })
    .post(function (req,res) {
        
        const email = req.body.email;
        const pass = req.body.password;

        
        // need to add a authentication part, where we decide if we send them here 
        // probably gonna involve database


        // figure out how to pass arguments here to the dashboard
        res.redirect('/dashboard');
    });

module.exports = router; 