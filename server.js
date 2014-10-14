var onRequest = function(req, res) {
	if(req.method === 'GET'){
		res.writeHead(200, {
			'Connection': 'close',
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*'
		});
		res.end(JSON.stringify({message: randomMessage(messages)}))
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
console.log('listening so hard');
var messages = ["Hey brother", "Her?", "I made a huge mistake", 'Chaw chee chaw chee chaw', 'There is always money in the banana stand', 'Quit essing around', 'Im a monster!'];