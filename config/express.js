/**
 * Copyright 2014 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

// Module dependencies
var express    = require('express'),
  errorhandler = require('errorhandler'),
  bodyParser   = require('body-parser'),
  fs           = require('fs');

module.exports = function (app, speechToText, textToSpeech) {

	// Configure Express
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.json());

	// Setup static public directory
	app.use(express.static(__dirname + '/../public'));
	app.use(express.static(__dirname + '/../bower_components'));

	// Add error handling in dev
	if (!process.env.VCAP_SERVICES) app.use(errorhandler());

	// Route For text 2 speech
	app.get('/synthesizeMale', function(req, res) {
		var synthReq = {
			accept: "audio/ogg; codecs=opus",
			voice: "VoiceEnUsMichael",
			text: req.query.text
		};
		var transcript = textToSpeech.synthesize(synthReq);
		transcript.on('response', function(response) {
	    	console.log(response.headers);
	    	if (req.query.download) {
	      		response.headers['content-disposition'] = 'attachment; filename=transcript.ogg';
	    	}
	  	});
	  	transcript.pipe(res);
	});

	// Route For text 2 speech
	app.get('/synthesizeMale', function(req, res) {
		var synthReq = {
			accept: "audio/ogg; codecs=opus",
			voice: "VoiceEnUsMichael",
			text: req.query.text
		};
		var transcript = textToSpeech.synthesize(synthReq);
		transcript.on('response', function(response) {
	    	console.log(response.headers);
	    	if (req.query.download) {
	      		response.headers['content-disposition'] = 'attachment; filename=transcript.ogg';
	    	}
	  	});
	  	transcript.pipe(res);
	});

	app.get('/synthesizeFemale', function(req, res) {
		var synthReq = {
			accept: "audio/ogg; codecs=opus",
			voice: "VoiceEnUsLisa",
			text: req.query.text
		};
		var transcript = textToSpeech.synthesize(synthReq);
		transcript.on('response', function(response) {
	    	console.log(response.headers);
	    	if (req.query.download) {
	      		response.headers['content-disposition'] = 'attachment; filename=transcript.ogg';
	    	}
	  	});
	  	transcript.pipe(res);
	});

	// For speech 2 text
	app.post('/', function(req, res) {
		var audio;

		if(req.body.url && req.body.url.indexOf('audio/') === 0) {
			// sample audio
	    	audio = fs.createReadStream(__dirname + '/../public/' + req.body.url);
	  	} else { // malformed url
	    	return res.status(500).json({ error: 'Malformed URL' });
	  	}

		speechToText.recognize({audio: audio, content_type: 'audio/l16; rate=44100'}, function(err, transcript){
	    	if (err) return res.status(500).json({ error: err });
	    	else return res.json(transcript);
	  	});
	});
};
