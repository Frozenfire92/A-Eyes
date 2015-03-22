var bg = ["Home", "HouseGroup1", "HouseGroup2", "GameRoom", "TownSquare"];
var index = 0;

function cycleBackgrounds ()
{
	index++;
	if (index >= bg.length) index = 0;
	$('body').attr('class', bg[index]);

}

