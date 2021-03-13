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

router.route('/')
    .post(function (req,res) {
        
        const email = req.body.email;
        const pass = req.body.password;

        
        //- Inject users into the database here


        //- Send Users to the dash board page on success 
        res.send("REGISTER POST");
    });

module.exports = router; 