/*jshint node:true*/
//Dependencies
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var watson = require('watson-developer-cloud');

// Setup watson speech->text
var speech_to_text = watson.speech_to_text({
	username: '3356150d-abe8-4612-95e2-16afa492a24f',
	password: 'gVNaGjswkXeV',
	version: 'v1'
});

// Setup watson text->speech
var text_to_speech = watson.text_to_speech({
	username: '8e3ad5ac-49f2-4524-8aec-52ee475eedb6',
	password: 'v3DXJzQRfSEX', //LOL!
	version: 'v1'
});

//Configure server & sockets
require('./config/express')(app, speech_to_text, text_to_speech);
require('./config/socket')(io, speech_to_text);

// Start server
var port = (process.env.VCAP_APP_PORT || 3000);
server.listen(port);
console.log('Listening at port: ' + port);
