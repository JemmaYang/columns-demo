var express = require('express');
var app = express();
var http = require('http').Server(app);


http.listen(5000, function () {
	console.log('app listening on port 5000.')
});

app.get('/', function (req, res) {
	res.sendFile(__dirname + '/test02.html')
});

app.use('/pictures', express.static(__dirname + '/pictures'));
