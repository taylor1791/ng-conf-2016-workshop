#!/usr/bin/env node
var express = require('express');
var simpleFsRest = require('simple-fs-rest');
var app = express();

var MAX_TIME = 100;

// Link the REST Service to anything under /api. ex: /api/users/
app.use('/api', function(req, res, next) {
  var server = simpleFsRest();

  setTimeout(function() {
    server(req, res, next);
  }, Math.random() * MAX_TIME);
});

app.listen(8081);

