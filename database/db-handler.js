require('dotenv').config();
const K = require(__dirname + "/K.js");

// Create Database Connection
var mysql = require('mysql');



const dbHandler = {
    dbReference : null,
    
    establishConnection: () => {

        /*
        Database Connection Info
        host: Defines ip address of server hosting database
        user: RDS username
        password: RDS username
        port: Port to communicate with database
        */
        dbReference = mysql.createConnection({
            host: process.env.RDS_HOSTNAME,
            user: process.env.RDS_USERNAME,
            password: process.env.RDS_PASSWORD,
            port: process.env.RDS_PORT
        });    
    }
}


module.exports(dbHandler); 