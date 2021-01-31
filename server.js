const path = require('path');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

const port = 8080;
app.listen(port, err => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Listening at: http://localhost:' + port);
});


// var http = require('http');
// var ip = '0.0.0.0';
// var port = 8080;
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('Hello World\n');
// }).listen(port, ip);
// console.log('Server running at http://'+ip + ':' + port);