var bg = ["Stairs", "Chevre", "Rainbow", "MicrobialMat", "GridFloor", "DiamondGrid", "Paper", "Stars"];
var index = 0;

function cycleBackgrounds ()
{
	index++;
	if (index >= bg.length) index = 0;


	$('body').attr('class', bg[index]);
	var chestItem = BaseItem;
	chestItem.name = "Map";
	var chest = CreateChest("Chest One", chestItem);
	console.log("Chest ", chest);

	$('#Label1').html("Chest "+ chest.name);
}