var initMyo = function() {
	'use strict';
	var hub = new Myo.Hub();

	hub.on("frame", function(frame) {
		var data = frame.data;

		if (data.rotation === undefined) {
			// got an RSSI event
			handleRSSI(data);
		} else {
			handleData(data);
		}

	});
};

var handleRSSI = function(data) {
	$("#rssi").text(data.rssi);
};

var jsonToString = function(json) {
	return JSON.stringify(json, null, '\t');
};

var handleData = function(data) {
	$("#myodata #rotation pre").text(jsonToString(data.rotation));
	$("#myodata #euler pre").text(jsonToString(data.euler));
	$("#myodata #accel pre").text(jsonToString(data.accel));
	$("#myodata #gyro pre").text(jsonToString(data.gyro));

	if (data.pose) {
		console.info(data.pose);
		var type = data.pose.type;
		var text = "n/a";
		if (type === 0) {
			text = "rest"; 
		} else if (type === 1) {
			text = "fist";
		} else if (type === 2) {
			text = "wave in";
		} else if (type === 3) {
			text = "wave out";
		} else if (type === 4) {
			text = "spread out";
		} else if (type === 5) {
			text = "thumb to pinky (5)";
		} else if (type === 6) {
			text = "thumb to pinky (6)";
		} else {
			text = "unknown, got type = "+type;
		}
		$("#pose").text(text);
	}
};

initMyo();
