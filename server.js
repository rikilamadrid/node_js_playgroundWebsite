
////////////////////using standar node module//////////////////////////////

// // import the http module
// var http = require('http');
//
// //handle sending requests and returning responses
// function handleRequest(req, res){
//     //return string
//     res.end("hello World");
// }
//
// //create the server
// var server = http.createServer(handleRequest);
// //start server and listen on port x
// server.listen(8080, function(){
//     console.log("listening...");
// });

/////////////////using express//////////////

//import the dependencies
var express = require('express');
var expressLayouts = require('express-ejs-layouts');
var bodyParser = require('body-parser');
var app = express();
var port = 8080;

//simple middleware.
/*
app.use(function(req, res, next) {
    console.log(req.query);
    if(req.query.name === 'riky') {
        //res.send(`Hi, ${req.query.name}`);
        res.status(500).json({ error: 'something blew up' });
        return;
    }

    if(req.query.name === "max") {
        res.set('Content-Type', 'text/javascript');
        res.send(new Buffer('<p><i>some</i> <br/> <b>html</b></p>'));
        //res.send(`Hello, ${req.query.name}`);
        return;
    }

    if (req.query.name === "error") {

    }

    next();
});
*/

//use express and ejs layouts
app.set('view engine', 'ejs');
app.use(expressLayouts);

//use body parser
app.use(bodyParser.urlencoded());

//route our app
var router = require('./app/routes');
app.use('/', router);

//set static files (css images etc)
app.use(express.static(__dirname + '/public'));

//start the server
app.listen(port, function() {
    console.log("app started");
});
