// Pass a string of input and it will automatically play
// the returned audio
function textToSpeech(input){
	textToSpeechMale(input);
}
function textToSpeechMale(input)
{
	var audio = $('audio').get(0);
	var text = {text: input};
	console.log('raw input', input);
	audio.setAttribute('src','/synthesizeMale?' + $.param(text));
}
function textToSpeechFemale(input)
{
	var audio = $('audio').get(0);
	var text = {text: input};
	console.log('raw input', input);
	audio.setAttribute('src','/synthesizeFemale?' + $.param(text));
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
				instructions.html("Listening, press space again to stop");
			} else {
				speech.stop();
				microphone.removeClass('green');
				microphone.addClass('orange');
				instructions.html("Processing Speech");
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
					microphone.removeClass('orange');
					microphone.removeClass('green');
					instructions.html("Press space to talk");
					parseSpeech(text);
				}
				recentCommand.html(text);
			}
		}
		recentCommand.show();
	};
});

function parseSpeech(input)
{
	input = input.toLowerCase();
	//--- Movement
	//Up
	if (input.indexOf("up") != -1 ||
		input.indexOf("forward") != -1 ||
		input.indexOf("north") != -1)
	{
		MovePlayer('Up');
	}
	//Down
	else if (input.indexOf("down") != -1 ||
			 input.indexOf("backwards") != -1 ||
			 input.indexOf("south") != -1)
	{
		MovePlayer('Down');
	}
	//Right
	else if (input.indexOf("right") != -1 ||
			 input.indexOf("east") != -1)
	{
		MovePlayer('Right');
	}
	//Left
	else if (input.indexOf("left") != -1 ||
			 input.indexOf("west") != -1)
	{
		MovePlayer('Left');
	}

	//--- Describe
	else if (input.indexOf("describe") != -1 ||
			 input.indexOf("description") != -1)
	{
		Describe();
	}

	//--- Help
	else if (input.indexOf("help") != -1 ||
			 input.indexOf("instruction") != -1 ||
			 input.indexOf("teach") != -1)
	{
		Help();
	}
	
	//--- Home
	else if (input.indexOf("home") != -1)
	{
		GoHome();
	}

	//--- Find
	else if (input.indexOf("find") != -1 ||
			 input.indexOf("search") != -1 ||
			 input.indexOf("explore") != -1)
	{
		Find();
	}

	//--- Talk
	else if (input.indexOf("talk") != -1 ||
			 input.indexOf("speak") != -1 ||
			 input.indexOf("conversation") != -1 ||
			 input.indexOf("converse") != -1)
	{
		Talk();
	}

	//--- Items
	else if (input.indexOf("item") != -1 ||
			 input.indexOf("list") != -1 ||
			 input.indexOf("inventory") != -1)
	{
		DescribeItems();
	}

	//--- Play Minigame
	else if (input.indexOf("play") != -1 ||
			 input.indexOf("game") != -1 ||
			 input.indexOf("mini") != -1)
	{
		Play();
	}

	//--- Where am i
	else if (input.indexOf("where") != -1 ||
			 input.indexOf("locate") != -1 ||
			 input.indexOf("location") != -1)
	{
		WhereAmI();
	}

	//Else alert the user of unknown command
	else textToSpeech("Sorry, unknown command. Please try again.");

}
