// Pass a string of input and it will automatically play
// the returned audio
function textToSpeech(input)
{
	var audio = $('audio').get(0);
	var text = {text: input};
	console.log('raw input', input);
	audio.setAttribute('src','/synthesize?' + $.param(text));
}

// Speech to Text logic
// This is heavily modified from https://github.com/watson-developer-cloud/speech-to-text-nodejs
$(document).ready(function(){
	// UI References
	var instructions = $('#talkIndicator')
	var microphone = $('#microphone');
	var recentCommand = $('#recentCommand');

	// Speech - Text Service
	var recording = false;
	var speech = new SpeechRecognizer({
		ws: '',
		model: 'WatsonModel'
	});

	// On spacebar, start recording, update microphone color
	$(document).keydown(function(e){
		if (e.keyCode == 32){
			if (!recording)
			{
				speech.start();
				microphone.addClass('green');
				talkIndicator.html("Listening, press space again to stop");
			} else {
				speech.stop();
				microphone.removeClass('green');
				microphone.addClass('orange');
				talkIndicator.html("Processing Speech");
			}
		}
	});

	speech.onstart = function(){
		console.log('recording');
		recording = true;
		recentCommand.empty();
	};

	speech.onerror = function(error){
		console.log('speech error', error);
		recording = false;
		recentCommand.empty();
		recentCommand.html("Sorry I didn't get that");
		microphone.removeClass('orange');
		microphone.addClass('green');
	};

	speech.onend = function(){
		console.log('speech ended');
		recording = false;
	};

	speech.onresult = function(data){
		console.log('result', data);
		if (data.results && data.results.length > 0){
			if (data.results.length === 1 && data.results[0].final)
			{
				var text = data.results[0].alternatives[0].transcript || "Sorry I didn't get that";
				if (data.results[0].final){
					text += '.';
					microphone.removeClass('orange');
					microphone.removeClass('green');
					talkIndicator.html("Press space to talk");
				}
				recentCommand.html(text);
			}
		}
		recentCommand.show();
	};
});
