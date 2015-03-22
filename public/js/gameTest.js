$(document).ready(function(){
	$('#controls').hide();
	
	$('#menu').hover(function(){
		console.log('hoverIn');
		$('#controls').fadeIn();
		$('#menu').fadeOut();
	});

	$('#controls').hover(function(){},
		function(){
			console.log('hoverOut');
			$('#controls').fadeOut();
			$('#menu').fadeIn();
		}
	);
});
