﻿
var http = require('http');
var socketio = require("socket.io");
var server = http.createServer(function (request, response){
	response.end('helllow NodeJS123');
}).listen(8001, function(){
	console.log('test server');
});

// 모듈 추출
/*


var fs = require('fs');
var ejs = require('ejs');
var mysql = require('mysql');

var http = require('http');
var server = require('http').createServer(function (request, response){
	response.end('helllow NodeJS');
});
var io = require('socket.io').listen(server);
io.set('log level', 1);
server.listen(8001, function(){
	console.log('Server running');
});
*/
