var bg = ["Stairs", "Chevre", "Rainbow", "MicrobialMat", "GridFloor", "DiamondGrid", "Paper", "Stars"];
var index = 0;

function cycleBackgrounds ()
{
	index++;
	if (index >= bg.length) index = 0;
	$('body').attr('class', bg[index]);

}

