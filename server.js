#!/usr/bin/env node
var express = require('express');
var simpleFsRest = require('simple-fs-rest');
var app = express();

// Link the REST Service to anything under /api. ex: /api/users/
app.use('/api', simpleFsRest());

app.listen(8081);

