var express = require('express'); // used for routing
var app = express();
var http = require('http').Server(app); // used to provide http functionality
var bodyParser = require('body-parser'); // used to parse the body of a request

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use(express.static(__dirname + '/www'));

var path = require('node:path');

let server = http.listen(3000, function () {
    let host = server.address().address;
    let port = server.address().port;
    console.log("My First Nodejs Server!");
    console.log("Server listening on: " + host + " port: " + port);
});


app.get('/test', function (req, res) {                 
    res.sendFile(__dirname + "/www/test.html");
});


require('./routes/homePageRoute.js').route(app, path);
require('./routes/accountRoute.js').route(app, path);
