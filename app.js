// AUTHOR: Jonathan Phouminh
// DATE: February 27th, 2021

require('dotenv').config();
const K = require(__dirname + "/K.js");
const express = require('express');
const bodyParser = require('body-parser');
// require db files 

const app = express(); 
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

// call dbSetup methods 

/* GET REQUESTS */
app.get('/', (req, res) => {
    res.render('login.ejs');
});

app.get('/register', (req, res) => {
    res.render('register.ejs');
});

app.get('/dashboard', (req, res) => {
    res.render('dashboard.ejs');
});



/* POST REQUESTS */
app.post('/', (req, res) => {
    console.log('POST: /');
});

// /register POST
app.post('/register', (req, res) => {
    console.log('POST: /register');
});

// /dashboard POST, input would be the search bar, 
// will have to send all data to render new page such as twitter, reddit, stock
app.post('/dashboard', (req, res) => {
    console.log('POST: /dashboard');
});



// change this to constant version
app.listen(K.port, () => {
    console.log(`Server started on port: ${K.port}`);
});