// AUTHOR: Jonathan Phouminh
// DATE: February 27th, 2021


require('dotenv').config();
const K = require(__dirname + "/K.js");
const express = require('express'); // Express framework
const bodyParser = require('body-parser');
const sql = require(__dirname + '/database/db-handler.js');

sql.connection; 

// Router Modules
const login = require(__dirname + '/routes/loginRouter.js');
const register = require(__dirname + '/routes/registerRouter.js');

const app = express(); 
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', login);
app.use('/register',register)
app.set('view engine', 'ejs');


app.get('/dashboard', (req, res) => {
    res.render('dashboard.ejs');
});

app.get('/logout', (req,res) => {
    sql.killConnection(); 
})

/* Use this get route to test the db for now, just type it in the url */
/* sql is the reference to the db handler */
app.get('/testDB', (req, res) => {

    res.send("/testDB");
});

app.post('/dashboard', (req, res) => {
    console.log('POST: /dashboard');
});

app.listen(K.port, () => {
    console.log(`Server started on port: ${K.port}`);
});

/* Export after connection is established so other files can have reference to it */
module.exports.sql = sql; 