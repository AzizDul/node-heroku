var express = require('express');
var app = express();

app.use(express.static(__dirname));

app.get('/', function (req, res) {

  res.sendFile('index.html');

});


var port = Number(process.env.PORT || 8000)

app.listen(port);

console.log('Server running at port 8000');
