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
        let didRegister = false;
        const newEmail = req.body.email;
        const newPassword = req.body.password;

        console.log(newEmail);
        console.log(newPassword);

        //- Inject users into the database here

        //- let client know if registration was successful
        res.send({success: didRegister});
    });

module.exports = router; 