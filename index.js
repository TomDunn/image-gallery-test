var express = require('express');
var swig    = require('swig');
var app     = express();

swig.setDefaults({cache: false});

app.engine('html', swig.renderFile);
app.set('view engine', 'html');

app.use('/public', express.static('public'));

app.get('/', function(req,res,next) {
    res.render('layout');
});

app.listen(8888, function() {
    console.log("Running");
});