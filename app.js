var app = require('express')();
var path = require('path');
var http = require('http').Server(app);
var io = require('socket.io')(http);
var react = require('react');


var connections = 0;
app.get('/', function(req, res){
  res.sendFile(__dirname + '/choice.html');
});
app.get('/*', function(req, res){
  res.sendFile(path.join(__dirname+'/trainer.html'));
});

io.sockets.on('connection', function (socket) {
    connections = connections + 1;
    console.log("User connection: There are: " + connections + " connections. ");

  socket.on('disconnect', function () {

      socket.emit('disconnected');
      connections = connections - 1;

      if(connections == 0) {
          console.log("All users have disconnected from the Web App!");
      }
      else {
      console.log("User Disconnected: There are: " + connections + " connections left. ");
      }

  });

    socket.on('send message', function(data) {
        console.log(data);
        io.sockets.emit('new message', {msg: data});
    });



});


http.listen(3000, function(){
  console.log('listening on *:3000');
});
