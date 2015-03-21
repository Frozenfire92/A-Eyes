function getSomeAudio()
{
	var audio = $('audio').get(0);
	var input = $('#input').val();
	var text = {text: input};
	console.log('raw input', input);
	audio.setAttribute('src','/synthesize?' + $.param(text));
}