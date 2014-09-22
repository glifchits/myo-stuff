require("./myojs/myojs-0.8.6.js");


var hub = new Myo.Hub();

hub.on('ready', function() {
	console.log("ready");
});
hub.on('connect', function() {
	console.log("connected");
});
hub.on('frame', function(frame) {
	// Get the most recent frame and report some basic information
	console.log("Frame id: " + frame.id + ", timestamp: " + frame.timestamp);
});
hub.on('disconnect', function() {
	console.log("disconnect");
});

