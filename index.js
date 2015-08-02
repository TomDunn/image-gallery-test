var express = require('express');
var swig    = require('swig');
var app     = express();
var _       = require('underscore');

swig.setDefaults({cache: false});

app.engine('html', swig.renderFile);
app.set('view engine', 'html');

app.use('/public', express.static('public'));

app.get('/', function(req,res) {
    var url = 'http://lorempixum.com/250/';
    var start = 250;
    res.locals.images = _.times(20, function() { start--; return url + start + '/'; });
    res.render('layout');
});

app.listen(8888, function() {
    console.log("Running");
});