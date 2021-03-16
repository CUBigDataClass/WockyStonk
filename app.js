const K = require(__dirname + "/K.js");
const express = require('express'); // Express framework
const bodyParser = require('body-parser');
const cors = require('cors');

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

app.get('/logout', (req,res) => {
    sql.killConnection();
})
app.listen(K.port, () => {
    console.log(`Server started on port: ${K.port}`);
});

//- Export after connection is established so other files can have reference to it
module.exports.sql = sql;


