// 모듈 추출
var fs = require('fs');
var ejs = require('ejs');
var mysql = require('mysql');

//서버생성
var server = require('http').createServer();
var io = require('socket.io').listen(server);

//DB 연결
/*
var client = mysql.createConnection({
	host: 'http://creatorz15.cafe24.com',
	user: 'creatorz15',
	password : 'ckdwhwk7564' ,
	database : 'creatorz15'
});
*/

io.set('log level', 1);
server.listen(52273, function(){
	console.log('Server running at http://127.0.0.1:52273');
});

