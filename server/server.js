var express = require('express');
var morgan = require('morgan');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

function compile(str, path) {
  return stylus(str).set('filename', path);
}
app.use(express.static(__dirname + '/../'));
app.use(morgan('dev'));


var port = 3030;
app.listen(port);
console.log('Listening on port ' + port + '...');
