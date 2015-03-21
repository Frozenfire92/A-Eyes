/*jshint node:true*/
//Dependencies
var express = require('express');
var watson = require('watson-developer-cloud');

// setup server middleware
var app = express();
app.use(app.router);
app.use(express.errorHandler());
app.use(express.static(__dirname + '/public')); //setup static public directory
app.use(express.static(__dirname + '/bower_components'));

// Bluemix app & service info
var appInfo = JSON.parse(process.env.VCAP_APPLICATION || "{}");
// TODO: Get application information and use it in your app.
var services = JSON.parse(process.env.VCAP_SERVICES || "{}");
// TODO: Get service credentials and communicate with bluemix services.

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

// Synthesize some speach into text from a GET request
app.get('/synthesize', function(req, res) {
	var synthReq = {
		accept: "audio/ogg; codecs=opus",
		voice: "VoiceEnUsMichael",
		text: req.query.text
	};
	var transcript = text_to_speech.synthesize(synthReq);
	transcript.on('response', function(response) {
    	console.log(response.headers);
    	if (req.query.download) {
      		response.headers['content-disposition'] = 'attachment; filename=transcript.ogg';
    	}
  	});
  	transcript.pipe(res);
});

//----- Example Speach->Text from https://www.npmjs.com/package/watson-developer-cloud
// var params = {
//   // From file 
//   audio: request('http://speech-to-text-demo.mybluemix.net/audio/sample1.wav'),
//   content_type: 'audio/l16; rate=44100'
// };
// speech_to_text.recognize(params, function(err, res) {
//   if (err)
//     console.log(err);
//   else
//     console.log(JSON.stringify(res, null, 2));
// });


//----- Example Text->Speach from https://www.npmjs.com/package/watson-developer-cloud
// var params = {
//     text: 'Hello from IBM Watson',
//     voice: 'VoiceEnUsMichael', // optional voice 
//     accept: 'audio/wav'
// };
// // pipe the synthesized text to a file 
// text_to_speech.synthesize(params).pipe(fs.createWriteStream('output.wav'));


// The IP address of the Cloud Foundry DEA (Droplet Execution Agent) that hosts this application:
var host = (process.env.VCAP_APP_HOST || 'localhost');
// The port on the DEA for communication with the application:
var port = (process.env.VCAP_APP_PORT || 3000);
// Start server
app.listen(port, host);
console.log('App started on port ' + port);

