var express = require('express');
var app = express.createServer(express.logger());
var fs = require("fs");
var file = "index.html";

fs.stat(file, function(error, stats) {
	fs.open(file, "r", function(error, fd) {
		var buffer = new Buffer(stats.size);
		fs.read(fd, buffer, 0, buffer.length, null, function(error, bytesRead, buffer) {
			var data = buffer.toString("utf8", 0, buffer.length);
			console.log(data);
			fs.close(fd);
		});
	});
});

var data = fs.readFileSync(file, "utf8");
app.get('/', function(request, response) {
    response.send(data);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
	console.log("Listening on " + port);
});

