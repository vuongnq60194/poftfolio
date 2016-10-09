'use strict'

//var http = require('http');
var express = require('express');
var app = express();
var path = require('path');
var cfenv = require('cfenv');

app.use(express.static(__dirname));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + 'index.html'));
});

var appEnv = cfenv.getAppEnv() || 3000;

app.listen(appEnv.port, '0.0.0.0', function() {
  console.log("server starting on " + appEnv.url);
});