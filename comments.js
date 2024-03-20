// Create web server

var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
console.log('request was made: ' + req.url);
if (req.url === '/home' || req.url === '/') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/index.html').pipe(res);
} else if (req.url === '/contact') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/contact.html').pipe(res);
} else if (req.url === '/api/comments') {
    var comments = [
        {name: 'John', comment: 'Hello'},
        {name: 'Bob', comment: 'Hi'}
    ];
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(comments));
}
