$(function() {
    var socket = io.connect();
	
	$("#rotator").change(function(){
        var rotator_pos = document.getElementById("rotator").value;
        socket.emit("rotator", {
        value: rotator_pos
      });
	});
    
	$("#shoulder").change(function(){
        var shoulder_pos = document.getElementById("shoulder").value;
        socket.emit("shoulder", {
        value: shoulder_pos
      });
	});
	
	$("#elbow").change(function(){
        var elbow_pos = document.getElementById("elbow").value;
        socket.emit("elbow", {
        value: elbow_pos
      });
	});
	
	$("#wrist").change(function(){
        var wrist_pos = document.getElementById("wrist").value;
        socket.emit("wrist", {
        value: wrist_pos
      });
	});
	
	$("#flex").change(function(){
        var flex_pos = document.getElementById("flex").value;
        socket.emit("flex", {
        value: flex_pos
      });
	});
	
	$("#gripper").change(function(){
        var gripper_pos = document.getElementById("gripper").value;
        socket.emit("gripper", {
        value: gripper_pos
      });
	});
      });