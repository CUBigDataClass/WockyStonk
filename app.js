const K = require(__dirname + "/K.js");
const express = require('express'); // Express framework
const bodyParser = require('body-parser');
const cors = require('cors');
<<<<<<< Updated upstream

=======
const { response } = require('express');
console.log(__dirname);
>>>>>>> Stashed changes
// Data Modules
const sql = require(__dirname + '/database/db-handler.js');
sql.connection;


// Router Modules
const login = require(__dirname + '/routes/loginRouter.js');
const register = require(__dirname + '/routes/registerRouter.js');
const dashboard = require(__dirname + '/routes/dashboardRouter.js');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());

app.use('/', login);
app.use('/register',register);
app.use('/dashboard', dashboard);

<<<<<<< Updated upstream
=======
let input = '';


//Example to get the data from the request
// app.get('/api/customers', (req, res) =>{
//     const test =[
//         {id: 1, firstName:'John', lastName:'Doe'},
//         {id: 2, firstName:'asdf', lastName:'qwer'},
//         {id: 3, firstName:'tyui', lastName:'ghjk'},
//     ];
//     res.json(test);
// })

app.get('/data', function(req, res) {
    // console.log('creating data set');
    // res.writeHead(200, {
    //   'Content-Type': 'application/json',
    // });
    // console.log('input:', input);
    // //res.end(JSON.stringify(input));

    // data = [1,2,3,4,5]
    // res.send(data)
    // var sqlConfig = { 
    //     host: 'wockystonksdb.cnmtp6tov1dk.us-east-2.rds.amazonaws.com',
    //     user: 'wocky',
    //     password: 'stonksgoup',
    //     port: '3306',
    //     database: "wockyDB"
    // }

    // sql.connect(sqlConfig, function(err){
    //     if(err) console.log(err);

    //     var request = new sql.Request();

    //     var graphData = 'select open from tradeDates';
    //     request.query(stringRequest, function(err, recordset){
    //         if(err) console.log(err);
    //         console.log(recordset);
    //         res.send(recordset);
            
    //     })
    // })

    connection.query('select close from tradeDates', function(error, results){
        if(error){
            res.status(400).send("Error in database operation.");
        } else {
            console.log(results, "dfddfdds");
            res.send(results[0]);
        }
    })
});


app.post("/data", (req,res) => {
    console.log("search was " + req.body.search)
    //console.log(req)
    // const userinput = {
    //     searchInput: req.body.search,
    // }
    input = req.body.search;
    //sql.connection;
})






>>>>>>> Stashed changes
app.get('/logout', (req,res) => {
    sql.killConnection();
})
app.listen(K.port, () => {
    console.log(`Server started on port: ${K.port}`);
});

//- Export after connection is established so other files can have reference to it
module.exports.sql = sql;


