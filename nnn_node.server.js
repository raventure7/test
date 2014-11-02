var http = require('http');
var socketio = require("socket.io");
var server = http.createServer(function (request, response){
	response.end('helllow NodeJS');
}).listen(8001, function(){
	console.log('test_server');
});