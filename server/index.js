const express = require('express');
const path = require('path');
var app = require('express')();

app.use(express.static(path.join(__dirname, './../build')));
var http = require('http').createServer(app);

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

http.listen(3000, () => {
    console.log('listening on *:3000');
});