app.get('/', function(request, response) {
var fs = require('fs');
var fileName = fs.readFileSync("index.html").toString();
var buf = new Buffer(fileName);
for (var i = 0; i < fileName.length; i++) {
	buf[i] = str.charCodeA(i);
	}
  response.send(buf);
});

