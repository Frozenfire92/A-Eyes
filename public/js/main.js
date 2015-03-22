var bg = ["Home", "HouseGroup1", "HouseGroup11","HouseGroup12","HouseGroup13", "HouseGroup2", "HouseGroup21","HouseGroup22","HouseGroup23","GameRoom", "TownSquare"];
var index = 0;

function cycleBackgrounds ()
{
	index++;
	if (index >= bg.length) index = 0;
	$('body').attr('class', bg[index]);

}

