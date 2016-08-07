var express = require('express');
var app = express();
var io = require('socket.io')(app.listen(3000));
var five = require('johnny-five');

//Setting the path to static assets
app.use(express.static(__dirname + '/app'));

//Serving the static HTML file
app.get('/', function (res) {
    res.sendFile('/index.html')
});

//Setting broad
var board = new five.Board({
    repl: true
});

//When the broad is on
board.on('ready', function() {
	//Pivot aka Rotator
    var rotator = new five.Servo({
	  pin: 6,
      range: [10, 170],
      startAt: 90
	});
	//Shoulder
	var shoulder = new five.Servo({
      pin: 9,
      range: [20, 150],
      startAt: 90
	});
	//Elbow
	var elbow = new five.Servo({
	  pin: 10,
      range: [10, 120],
      startAt: 90
	});
	//Wrist
	var wrist = new five.Servo({
	  pin: 11,
      range: [10, 170],
      startAt: 40
	});
	//Flex
	var flex = new five.Servo({
	  pin: 5,
	  ranger: [0,180],
	  startAt:90
	})
	//Gripper
	var gripper = new five.Servo({
	  pin: 3,
      range: [10, 170],
      startAt: 90
	});
//When socket.io is on connection
  io.on('connection', function(socket) {
    //When client emit rotator value
	socket.on("rotator", function(data) {
      rotator.to(data.value);
    });
	//When client emit shoulder
	socket.on("shoulder", function(data) {
      shoulder.to(data.value);
    });
	//When client emit elbow
	socket.on("elbow", function(data) {
      elbow.to(data.value);
    });
	//When client emit wrist
	socket.on("wrist", function(data) {
      wrist.to(data.value);
    });
	//When client emit flex
	socket.on("flex", function(data) {
      flex.to(data.value);
	});
	//When client emit gripper
	socket.on("gripper", function(data) {
      gripper.to(data.value);
    });
	
	
    });
  });
