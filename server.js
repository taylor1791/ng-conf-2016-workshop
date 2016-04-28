#!/usr/bin/env node
var express = require('express');
var simpleFsRest = require('simple-fs-rest');
var app = express();

var TIME_DELAY = 135;

// Link the REST Service to anything under /api. ex: /api/users/
app.use('/api', function(req, res, next) {
  var server = simpleFsRest();

  setTimeout(function() {
    server(req, res, next);
  }, TIME_DELAY);
});

app.listen(8081);

