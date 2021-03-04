// AUTHOR: Jonathan Phouminh
// DATE: February 27th, 2021


require('dotenv').config();
const K = require(__dirname + "/K.js");
const express = require('express'); // Express framework
const bodyParser = require('body-parser');
// app.use(bodyParser.json()); // Support json encoded bodies
// app.use(bodyParser.urlencoded({extended: true})); // Support encoded bodies



// Router Modules
const login = require(__dirname + '/routes/loginRouter.js')

// db delegate 
const db; 

const app = express(); 
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

app.use('/', login);

// LOG SUCCESS/ERROR FOR DB CONNECTION
// use the reference 
connection.connect(function(err){
    if(err){
        console.error('Database connection failed: ' + err.stack);
        return
    }
    console.log('Connected to database.');
})

// GET REQUESTS
app.get('/register', (req, res) => {
    res.render('register.ejs');
});
app.get('/dashboard', (req, res) => {
    res.render('dashboard.ejs');
});

// POST REQUESTS
app.post('/register', (req, res) => {
    console.log('POST: /register');
});
app.post('/dashboard', (req, res) => {
    console.log('POST: /dashboard');
});


app.listen(K.port, () => {
    console.log(`Server started on port: ${K.port}`);
});

connection.end();