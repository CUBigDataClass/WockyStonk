require('dotenv').config();
const K = require(__dirname + "/../K.js");
<<<<<<< Updated upstream
=======

var express = require('express'); //Ensure our express framework has been added
var app = express();

var bodyParser = require('body-parser'); //Ensure our body-parser tool has been added
app.use(bodyParser.json());              // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
>>>>>>> Stashed changes

// Create Database Connection
var mysql = require('mysql');
const { response } = require('express');

/*
Database Connection Info
host: Defines ip address of server hosting database
user: RDS username
password: RDS username
port: Port to communicate with database
*/ 
const connection = mysql.createConnection({
<<<<<<< Updated upstream
    host: process.env.RDS_HOSTNAME,
    user: process.env.RDS_USERNAME,
    password: process.env.RDS_PASSWORD,
    port: process.env.RDS_PORT
})

connection.connect(function(err){
            if(err){
                console.error('Database connection failed: ' + err.stack);
                return
            }
            console.log('Connected to database.');
        }
);
 

// kill connection 
function killConnection(){
    console.log("ending database session");
    connection.end((err) => {
        if (err){
            console.log(err);
        }
    }); 
}


/* Export the functions */
module.exports.connection = connection;
module.exports.killConnection = killConnection; 

=======
    // host: process.env.RDS_HOSTNAME,
    // user: process.env.RDS_USERNAME,
    // password: process.env.RDS_PASSWORD,
    // port: process.env.RDS_PORT,

    host: 'wockystonksdb.cnmtp6tov1dk.us-east-2.rds.amazonaws.com',
    user: 'wocky',
    password: 'stonksgoup',
    port: '3306',
    database: "wockyDB"
})

connection.connect();

<<<<<<< Updated upstream
    connection.query("SELECT * FROM userInfo", function (err, result, fields_) {
        if (err) throw err;
        console.log(result);
    });
});
=======
// const connection = {
//     // host: process.env.RDS_HOSTNAME,
//     // user: process.env.RDS_USERNAME,
//     // password: process.env.RDS_PASSWORD,
//     // port: process.env.RDS_PORT,
>>>>>>> Stashed changes

//     host: 'wockystonksdb.cnmtp6tov1dk.us-east-2.rds.amazonaws.com',
//     user: 'wocky',
//     password: 'stonksgoup',
//     port: '3306',
//     database: "wockyDB"
// };

// connection.connect(function(err){
//     if (err) {
//         return console.error('error: ' + err.message);
//     }
//     console.log("Connected to the db");

//     connection.query("SELECT * FROM userInfo", function (err, result, fields_) {
//         if (err) throw err;
//         console.log(result);
//     });
// });


// app.get('/data', function(req, res) {
//     var query = 'select * from tradeDates;';
//     connection.any('get-everything', task => {
//         return task.batch([
//             task.any(query)
//         ])
//     })
//     .then(data => {
//         console.log(data[1]);
//     })
// });

// app.get('/data', function(req, res) {
//     connection.query('select close from tradeDates', function(error, results){
//         if(error){
//             res.status(400).send("Error in database operation.");
//         } else {
//             console.log(results, "dfddfdds");
//             res.send(results[0]);
//         }
//     })
// });
/* Export the functions*/
// module.exports.createConnection = query;
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
