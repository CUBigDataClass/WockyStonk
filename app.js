
const K = require(__dirname + "/K.js");
const express = require('express'); // Express framework
const bodyParser = require('body-parser');
const cors = require('cors');
console.log(__dirname);
// Data Modules
const sql = require(__dirname + '/database/db-handler.js');

// Router Modules
const login = require(__dirname + '/routes/loginRouter.js');
const register = require(__dirname + '/routes/registerRouter.js');
const dashboard = require(__dirname + '/routes/dashboardRouter.js');
const router = express.Router();

const app = express();
app.use(cors());
//app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());

app.use('/', login);
app.use('/register',register);
app.use('/dashboard', dashboard);

let input = '';
let daily = false;
let weekly = false;



//Example to get the data from the request
// app.get('/api/customers', (req, res) =>{
//     const test =[
//         {id: 1, firstName:'John', lastName:'Doe'},
//         {id: 2, firstName:'asdf', lastName:'qwer'},
//         {id: 3, firstName:'tyui', lastName:'ghjk'},
//     ];
//     res.json(test);
// })

function getDays(){
    var d = new Date();
    const num = d.getDay();
    let days;
    switch(num){
        case 0||1||6:
            days = ["Friday", "Thursday", "Wednesday", "Tuesday", "Monday"];
            break;
        case 2:
            days = ["Monday", "Friday", "Thursday", "Wednesday", "Tuesday"];
            break;
        case 3:
            days = ["Tuesday","Monday", "Friday", "Thursday", "Wednesday"];
            break;
        case 4:
            days = ["Wednesday", "Tuesday","Monday", "Friday", "Thursday"];
            break;
        case 4:
            days = ["Thursday", "Wednesday", "Tuesday","Monday", "Friday"];
            break;
        default:
            days = ["Friday", "Thursday", "Wednesday", "Tuesday", "Monday"];
    }
    return days;
}

function getHours(){
    var d = new Date();
    console.log(d)
    const hours = d.getHours();
    const minutes = d.getMinutes();
    console.log(hours +"aaaaaaaaaaaaaa"+ minutes)
    let labels = [];
    let string="";
    if (hours <= 16 ){ //between open and close
        if(hours > 9 || (hours === 9 && minutes > 30)){
            for (var i = 9; i <= hours; i++){
                if (i === 9){
                    labels.push("9:30");
                }
                else if(i == hours){
                    string = i.toString()+":"+"00";
                    labels.push(string);
                    if(minutes > 30){
                        string = i.toString()+":"+"30"; 
                        labels.push(string)
                    }
                }
                else{
                    string = i.toString()+":"+"00";
                    labels.push(string);
                    string = i.toString()+":"+"30";
                    labels.push(string);
                }
            }
        }
        
    }
    else{
        labels.push("9:30");
        for(var i = 10; i <=16; i++){
            if(i==16){
                labels.push("16:00");
            }
            else{
                
                string = i.toString()+":"+"00";
                labels.push(string);
                string = i.toString()+":"+"30";
                labels.push(string);
            }
        }
    }

    return labels
}

app.get('/data', function(req, res) {
    let data = {};
    let newSeries = [];
    let newLables = getDays();
    //console.log(newLables)
    const lab = getHours();
    console.log(lab);
    if(input){
        let searchQ = input.toUpperCase();
        searchQ = "'"+ searchQ + "'";
        let limit = 5;
        if(daily){
            newLables = getHours()
            limit = newLables.length;
        }
        
        const queryScript  = "SELECT * FROM tradeDates WHERE symbol = " + searchQ + " LIMIT " + limit;
        //console.log(queryScript);
        sql.query(queryScript, function(err, result, fields){
            if(err){
                throw err;
            }
            console.log(result);
            if(result.length>0){
                for(var i = 0; i < result.length; i++){
                    newSeries.push(result[i].open);
                }
                const max = Math.max(...newSeries);
                const min = Math.min(...newSeries);
                //console.log(newSeries);
                let dataSeries = [];
                dataSeries.push(newSeries);
                data={
                    labels: newLables,
                    series: dataSeries,
                    options:{
                        high: max,
                        low: min,
                        width:800,
                    },
                    type:"Line",
                }
                daily = false;
                weekly = false;
                console.log(data)
                res.send(data);
            }
            else{ //can't find the stock
                //newLables = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday' ]
                newSeries = [[5,4,3,2,1]]
                data={
                    labels: newLables,
                    series: newSeries,
                    options:{
                        high: 10,
                        low: 0,
                        width:800,
                    },
                    type:"Line",
                }
                daily = false;
                weekly = false;
                console.log(data)
                res.send(data);
            }
            
        })
    }
    else{ //default case
        //newLables = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday' ]
        newSeries = [[1, 2, 3, 4, 5]]
        data={
            labels: newLables,
            series: newSeries,
            options:{
                high: 10,
                low: 0,
                width:800,
            },
            type:"Line",
        }
        daily = false;
        weekly = false;
        console.log(data)
        res.send(data);
    }

    

});


app.post("/data", (req,res) => {
   //console.log("search was " + req.body.search)
    input = req.body.search;
})
app.post("/refreshDaily", (req,res) => {
    daily = req.body.daily;
 })

 app.post("/refreshWeekly", (req,res) => {
    weekly = req.body.weekly;
 })





app.get('/logout', (req,res) => {
    sql.killConnection();
})




app.listen(K.port, () => {
    console.log(`Server started on port: ${K.port}`);
});

//- Export after connection is established so other files can have reference to it
// module.exports = router;


