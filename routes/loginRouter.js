//- AUTHOR: Jonathan Phouminh
//- Date: March 1st, 2021 

require('dotenv').config();
const K = require(__dirname + "/../K.js");
const express = require('express');
const router = express.Router(); 

// Data Modules
const sql = require(__dirname + '../../database/db-handler.js');

// This gets called anytime a request is made to this route
router.use(function timeLog (req, res, next) {
    next();
})


//- Make sure you are recieving the data here 
router.route('/')
    .post(function (req,res) {
        let found = true;
        const sentEmail = req.body.credentials.email; 
        const sentPassword = req.body.credentials.password;

        console.log(sentEmail);
        console.log(sentPassword);
        
        //- Implement Database Authentication here 
        sql.createConnection("SELECT * FROM userInfo;"); 

        //- Let client know if user was found or not
        res.send({isUser: found});
    });

module.exports = router; 