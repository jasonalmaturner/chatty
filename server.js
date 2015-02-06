var onRequest = function(req, res) {
	if(req.method === 'OPTIONS'){
		console.log('am i her')
		res.writeHead(200, {
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
			'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
		})
		res.end();
	}

	if(req.method === 'GET'){
		res.writeHead(200, {
			'Connection': 'close',
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*'
		});
		res.end(JSON.stringify(messages))
	}
	if(req.method === 'POST') {
		var postData = '';
		req.on('data', function(chunk) {
			postData += chunk.toString();
		});
		req.on('end', function() {
			console.log("Got POST data:");
			console.log(JSON.parse(postData));
			postData = JSON.parse(postData);
			messages.push(postData.message);
		res.writeHead(200, {
			'Connection': 'close',
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*'
		});
		console.log(postData);
		res.end(postData.message);
		});
	}
}

var randomMessage = function(message){
	var num = Math.floor(Math.random()*(message.length));
	return message;
}

var http = require('http');
http.createServer(onRequest).listen(9001);
console.log('listening so hard on port ' + 9001);
var messages = ["Hey brother", "Her?", "I made a huge mistake", 'Chaw chee chaw chee chaw', 'There is always money in the banana stand', 'Quit essing around', 'Im a monster!'];