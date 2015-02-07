'use strict'

var messages = ["Hey brother", "Her?", "I made a huge mistake", 'Chaw chee chaw chee chaw', 'There is always money in the banana stand', 'Quit essing around', 'Im a monster!'];
var express = require('express');
var app = express();
var port = 9001;
var bodyParser = require('body-parser')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
})

app.get('/', function(req, res) {
	res.type('application/json')
	res.send(JSON.stringify(messages))
})

app.post('/', function(req, res) {
	// console.log(req.body);
	messages.push(req.body.message);
	res.send();
})

app.listen(port);
console.log('listening on port ' + port)