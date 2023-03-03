var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
app.use('/essets', express.static(__dirname + '/public'));

app.use('/', function(req, res, nex) {
    console.log('Request Url:' + req.url);
    nex();
});

app.get('/', function(req, res) {
    res.send('<html><head><link href=assets/style.css type=tex/css rel=stylesheet /></head><body><h1>Hello world!</h1></body></html>');
});
app.get('/person/:id', function(req, res) {
    res.send('<html><head></head><body><h1>person: ' + req.params.id + '</h1></body></html>');
});

app.get('/api', function(req, res) {
    res.json({ firstname: 'John', lastname: 'Doe' });
});

app.listen(port);