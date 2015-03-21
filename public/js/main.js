var bg = ['Stairs', 'Chevre'];
var index = 1;

function cycleBackgrounds ()
{
	console.log("...");
	$('body').attr('class', bg[index]);
}