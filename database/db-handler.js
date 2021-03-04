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

