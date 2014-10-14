'use strict';
var messages = ["Hey brother", "Her?", "I made a huge mistake", 'Chaw chee chaw chee chaw', 'There is always money in the banana stand', 'Quit essing around', 'Im a monster!'];
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser());

var server = app.listen(9001, function() {
	var host = server.address().address;
	var port = server.address().port;

	console.log('Chatty app listening at http://%s:%s', host, port);
})

app.get('/', function(req, res){
	res.type('application/json');
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.status(200).send(JSON.stringify(messages));
});

app.post('/', function(req, res){
	res.type('application/json')
	res.setHeader('Access-Control-Allow-Origin', '*')
	messages.push(req.body.message)
	res.send(JSON.stringify(req.body.messages + ' posted'))
})

app.options('/', function(req, res) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
	res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	res.send();
})