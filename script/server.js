var path = require('path');
var express = require('express');

var host = 'http://localhost';
var port = 3000;
var app = express();

app.use(express.static(path.resolve(__dirname, '../src/')));

app.get('*', function (req, res) {
  res.sendFile(path.resolve(__dirname, '../src/', 'index.html'))
});

app.listen(port, function (err) {
  if (err) {
    return console.error(err);
  }

  console.log('Web server listening at ' + host + ':' + port + '.');
});
