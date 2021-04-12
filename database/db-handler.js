require('dotenv').config();
const K = require(__dirname + "/../K.js");

// Create Database Connection
var mysql = require('mysql');


/*
Database Connection Info
host: Defines ip address of server hosting database
user: RDS username
password: RDS username
port: Port to communicate with database
*/ 
const connection = mysql.createConnection({
    host: process.env.RDS_HOSTNAME,
    user: process.env.RDS_USERNAME,
    password: process.env.RDS_PASSWORD,
    port: process.env.RDS_PORT,
    database: "wockyStonksDB"
})

function query(str) {
    connection.connect(function(err){
        if(err){
            console.error('Database connection failed: ' + err.stack);
            return
        }
        console.log('Connected to database.');
        console.log(str);
        
        connection.query(str, function (err, result, fields) {
            if (err) throw err;
            console.log(result);
        });




        connection.end((err) => {
            if (err){
                console.log(err);
            }
            console.log("connection ended.");
        }); 
    }
    );
}

/* Export the functions */
module.exports.createConnection = query;