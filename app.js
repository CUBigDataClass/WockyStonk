// AUTHOR: Jonathan Phouminh
// DATE: February 27th, 2021


require('dotenv').config();
const K = require(__dirname + "/K.js");
const express = require('express');
const bodyParser = require('body-parser');

// Router Modules
const login = require(__dirname + '/routes/loginRouter.js')

const app = express(); 
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');


app.use('/', login);


app.get('/register', (req, res) => {
    res.render('register.ejs');
});
app.get('/dashboard', (req, res) => {
    res.render('dashboard.ejs');
});
app.post('/register', (req, res) => {
    console.log('POST: /register');
});
app.post('/dashboard', (req, res) => {
    console.log('POST: /dashboard');
});


app.listen(K.port, () => {
    console.log(`Server started on port: ${K.port}`);
});