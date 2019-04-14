#!/usr/bin/nodejs



// -------------- load packages -------------- //

var express = require('express');

var app = express();

var path = require('path');

var hbs = require('hbs');

var request = require('request');
var fs = require('fs');


// -------------- express initialization -------------- //

app.set('port', process.env.PORT || 8080 );

app.set('view engine', 'hbs');

// -------------- express 'get' handlers -------------- //

app.get('/', function(req, res){

    res.sendFile(__dirname + '/index.html');

});

// -------------- listener -------------- //

// The listener is what keeps node 'alive.' 


var listener = app.listen(app.get('port'), function() {

  console.log( 'Express server started on port: '+listener.address().port );

});