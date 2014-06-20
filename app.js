/*Working through setting up the server the long way*/

var express = require('express'), bodyParser = require('body-parser'), logger = require('morgan'), path = require('path'), mongoose = require('mongoose');
var app = express();

app.set('views', path.join(__dirname + '/app'));
app.set('view engine', 'ejs');

var port = process.env.PORT || 3000;


var environment = process.env.NODE_ENV || 'development';
var db = "mongodb:localhost:2707";//process.env-MONGOGHQ_URL ||
app.use(bodyParser());
//app.use(express.static(path.join(__dirname + 'public')));//tells express server to use this as a static folder
app.use(express.static(path.join(__dirname + '/app')));
app.use(logger('dev'));
mongoose.connect('mongodb://localhost/kcdc');

//new.html style to get route(s)
/*var router = express.Router();
require('./lib/config/routes')(router);
app.use('/', router);*/



var apiRouter = express.Router();
require('./lib/config/apiRoute')(apiRouter);
app.use('/api', apiRouter);

//old style to get route
app.get('*', function(req,res){
    res.render('index', {message: 'Kick Ass'});
});
/*app.get('/', function(req,res,next) {
    console.log('Hello World 2');
    next();
});
app.get('/', function(req,res){
    console.log(req.query);//query parameters
    res.send('Hello world');
});

app.post('/', function(req,res){
    console.log(req.body);
    res.send('gotcha');
});

app.get('/user/:id', function(req,res){
    console.log(req.params);
    res.send('getting user info for user id ' + req.params.id);
});
*/

app.listen(port, function() {
   console.log('The magic is happening on port 3000');
});

//end of working through it the long way