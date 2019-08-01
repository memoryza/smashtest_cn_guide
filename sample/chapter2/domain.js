const express = require('express');
const app = express();
const server = require('http').createServer(app);

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});
server.listen(3000);
