//- AUTHOR: Jonathan Phouminh
//- Date: March 1st, 2021 

require('dotenv').config();
const K = require(__dirname + "/../K.js");
const express = require('express');
const router = express.Router(); 

// This gets called anytime a request is made to this route
router.use(function timeLog (req, res, next) {
    next();
})

router.route('/')
    .get(function (req, res){ 
        res.send("Forward Login Data here");
    })
    .post(function (req,res) {
        
        const email = req.body.email;
        const pass = req.body.password;
                
        //- Implement Database Authentication here 

        //- Pass data back to react server 
        res.send("LOGIN POST");
    });

module.exports = router; 