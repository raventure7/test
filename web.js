// 모듈 추출
var fs = require('fs');
var ejs = require('ejs');
var mysql = require('mysql');
var http = require('http');
var server = require('http').createServer();
var io = require('socket.io').listen(server);
io.set('log level', 1);
server.listen(8001, function(){
	console.log('Server running at http://127.0.0.1:8001');
});