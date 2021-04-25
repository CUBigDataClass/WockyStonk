require('dotenv').config();
//const K = require(__dirname + "/../K.js");

// Create Database Connection
var mysql = require('mysql');


/*
Database Connection Info
host: Defines ip address of server hosting database
user: RDS username
password: RDS username
port: Port to communicate with database
*/ 
var connection = mysql.createConnection({
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

// connection.connect(function(err){
//     if(err){
//         throw err;
//     }
//     console.log("Connected to DB")
// })




// function sqlQuery(sqlStr){
//     return new Promise((resolve,reject) => {
//         connection(function(err, connection){
//             if (err){
//                 return reject(err);
//             }
//             connection.query(sqlStr, function (err, rows){
//                 if(err){
//                     return reject(err);
//                 }
//                 resolve(rows);
//                 connection.release();
//             })
//         })
//     })
// }



// connection.connect(function(input, err){
//     if (err) {
//         return console.error('error: ' + err.message);
//     }
//     console.log("Connected to the db");
//     console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!" + input)
//     connection.query("SELECT Open FROM tradeDates WHERE symbol = " + input + " LIMIT 10", function (err, result, fields_) {
//         if (err) throw err;
//         console.log(result);
//     });
//     connection.kill();
// });

// connection.query(function(input, err){
//     console.log(input + " in db handler")
//     if(err){
//         return console.error('error: ' + err.message);
//     }
//     const query = "SELECT Open FROM tradeDates WHERE symbol = " + input + " LIMIT 10";
//     connection.query("SELECT Username, Password FROM userInfo", function (err, result, fields_) {
//         if (err) throw err;
//         console.log(result);
//     });
    
// })

// function query(str) {
//     connection.connect(function(err){
//         if(err){
//             console.error('Database connection failed: ' + err.stack);
//             return
//         } else {
//             console.log('Connected to database.');
//         }
        
//         console.log(str);
        
//         connection.query(str, function (err, result, fields) {
//             if (err) throw err;
//             console.log(result);
//         });

//         connection.end((err) => {
//             if (err){
//                 console.log(err);
//             }
//             console.log("connection ended.");
//         }); 
//     }
//     );
// }

/* Export the functions*/
module.exports = connection;
// module.export = {
//     getConnection: (callback) => {
//         return mysql.createPool.getConnection(callback);
//     }
// }