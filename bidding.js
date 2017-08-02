var httpd = require('http').createServer(handler);
var io = require('socket.io').listen(httpd);
httpd.listen(8000);

io.sockets.on('connection', function (socket) {

      // listen to incoming bids
      socket.on('bid', function(content) {

           // echo to the sender
           socket.emit('bid', content["amount"]);

        // broadcast the bid to all clients
           socket.broadcast.emit('bid', socket.id + '
             bid: ' + content["amount"]);

      });

 });
    
    var userCount = [];
var socket = io.connect('http://localhost:3000/');

 socket.on('bid', function(content) {
      $('#bids').append(content["amount"] + "");
 });

$('#submit').click(function(){
     socket.emit('bid', { "amount" : $('#input').val() });
});
    
io.sockets.on('connection', function (socket) {
    socket.emit('login');
 });
    
socket.on('login', function(){
    socket.emit('username', 'johndoe'); // hard-wired
         // here for simplicity
    socket.emit('password', 'password');
 });
    
socket.on('username', function(username){
    socket.set('username', password);
 });
socket.on('password', function(password){
    socket.set('password', password);
 });
    
socket.on('connection', function()) {
      userCount.push('hello');
      console.log("There are: " + userCount.length + " users in the bidding room! ");
      
}
socket.on('disconnect', function()) {
      userCount.pop();
    console.log("User disconnection! ");
    console.log("There are: " + userCount.length + " users in the bidding room! ");
      
}
