var express = require('express'); // used for routing
var app = express();
var http = require('http').Server(app); // used to provide http functionality
var bodyParser = require('body-parser'); // used to parse the body of a request

app.use(express.json());                            //parse the body of the request
app.use(express.urlencoded({ extended: true }));    //parse the body of the request



app.use(express.static(__dirname + '/www'));        //serve static files from the www folder

var path = require('node:path');

let server = http.listen(3000, function () {            //server listens on port 3000
    let host = server.address().address;                
    let port = server.address().port;                   
    console.log("My First Nodejs Server!");
    console.log("Server listening on: " + host + " port: " + port);
});


app.get('/test', function (req, res) {                      //route to test.html  
    res.sendFile(__dirname + "/www/test.html");
});


require('./routes/homePageRoute.js').route(app, path);  //require the homePageRoute.js file
require('./routes/accountRoute.js').route(app, path);   //require the accountRoute.js file
