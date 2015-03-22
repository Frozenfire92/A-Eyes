// This is heavily modified from https://github.com/watson-developer-cloud/speech-to-text-nodejs

$(document).ready(function(){
	var micButton = $('#micButton');
	var transcript = $('#transcript');

	var recording = false;
	var speech = new SpeechRecognizer({
		ws: '',
		model: 'WatsonModel'
	});

	$(document).keydown(function(e){
		if (e.keyCode == 32){
			if (!recording)
			{
				speech.start();
				micButton.css('background-color', 'red');
			} else {
				speech.stop();
				micButton.css('background-color', 'green');
			}
			speech.start();
		}
	});

	micButton.click(function() {
		if (!recording) {
	    	speech.start();
	  	} else {
	    	speech.stop();
	    	micButton.css('background-color', 'green');
	  	}
	});

	speech.onstart = function(){
		console.log('recording');
		recording = true;
		micButton.css('background-color', 'red');
		transcript.empty();
		transcript.show();
		transcript.append('<p></p>');
	};

	speech.onerror = function(error){
		console.log('speech error', error);
		recording = false;
		micButton.css('background-color', 'green');
	};

	speech.onend = function(){
		console.log('speech ended');
		recording = false;
		micButton.css('background-color', 'green');
	};

	speech.onresult = function(data){
		console.log('result', data);
		if (data.results && data.results.length > 0){
			if (data.results.length === 1){
				var paragraph = transcript.children().last();
				var text = data.results[0].alternatives[0].transcript || "Sorry I didn't get that";
				//If final add a new paragraph
				if (data.results[0].final){
					transcript.append('<p></p>');
				}
				paragraph.text(text);
			}
		}
		transcript.show();
	};
});
