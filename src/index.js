var express = require('express');
var app = express();

var http = require('http');
var server = http.Server(app);

app.use(express.static('client'));

server.listen(8080, function(){
   console.log('Server is listening');
});

var io = require('socket.io')(server);

io.on('connection', function(socket){
    console.log('Client made connection');
   socket.on('message',function(msg){
       io.emit('message',msg);
   });
});