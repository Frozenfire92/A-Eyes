var player;
var world;
var aeye;

function InstantiateWorld()
{
	world = CreateWorld("Sarah's World", 5);
	console.log("This is my world ", world);
	$('#Label1').html("Things are happening");

	//Create all Chests
	//Set locations of all chests
	//Create all NPCs
	//Set locations of all NPCs
}

function PutObjectInBlockSpace(objectToPut, locationToPut)
{

}

function GetGridBlock(letterIndex)
{

}

function GetBlockSpaces(gridBlock)
{
	return gridBlock.blockSpaces;
}

function GetTimeOfDay()
{
	return world.timeOfDay;
}