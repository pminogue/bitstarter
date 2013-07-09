var express = require('express');
var app = express.createServer(express.logger());
var fs = require("fs");
var fileName = "index.html";

fs.stat(fileName, function(error, stats) {
	fs.open(fileName, "r", function(error, fd) {
		var buffer = new Buffer(stats.size);
		fs.read(fd, buffer, 0, buffer.length, null, function(error, bytesRead, buffer) {
			var data = buffer.toString("utf8", 0, buffer.length);
			console.log(data);
			fs.close(fd);
		});
	});
});

var data = fs.readFileSync("index.html", "utf8");
app.get('/', function(request, response) {
    response.send(data);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
	console.log("Listening on " + port);
});

