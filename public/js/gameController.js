var player;
var world;
var aeye;

var chests = [];
var npcs = [];

function InstantiateWorld()
{
	world = CreateWorld("Sarah's World", 5);
	console.log("This is my world ", world);
	$('#Label1').html("Things are happening");

	SetUpChests();
	SetUpNPCs();
	//Create all NPCs
	//Set locations of all NPCs


}

function PutObjectInBlockSpace(objectToPut, locationToPut)
{
	var blockSpaceToUse = FindBlockSpace(locationToPut);
	blockSpaceToUse.spaceItem = objectToPut;
	blockSpaceToUse.occupied = true;
	objectToPut.location = locationToPut;
	return objectToPut;
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

function FindBlockSpace(location)
{
	//Find the block space at that location
	//Find the Grid block at the letterIndexLocation
	//Find the block space within that grid block

	var gridBlockIndex = GetIndexFromCharacter(location.gridBlockLetterIndex);
	return world.gridBlocks[gridBlockIndex].blockSpaces[location.blockSpaceIndex];
}

function SetUpChests()
{
	//Create all Chests
	//Set locations of all chests

	var chest1 = PutObjectInBlockSpace(CreateChest("Chest1"), CreateLocation("A", 4));
	chests.push(chest1);

	var chest2 = PutObjectInBlockSpace(CreateChest("Chest2"), CreateLocation("D", 0));
	chests.push(chest2);
		
	var chest3 = PutObjectInBlockSpace(CreateChest("Chest3"), CreateLocation("G", 7));
	chests.push(chest3);
	
	var chest4 = PutObjectInBlockSpace(CreateChest("Chest4"), CreateLocation("M", 4));
	chests.push(chest4);

	var chest5 = PutObjectInBlockSpace(CreateChest("Chest5"), CreateLocation("Q", 2));
	chests.push(chest5);

	var chest6 = PutObjectInBlockSpace(CreateChest("Chest6"), CreateLocation("X", 5));
	chests.push(chest6);
}

function SetUpNPCs()
{
	//Create all Chests
	//Set locations of all chests

	var npc1 = PutObjectInBlockSpace(CreateNPC("NPC1"), CreateLocation("F", 4));
	npcs.push(npc1);

	var npc2 = PutObjectInBlockSpace(CreateNPC("NPC2"), CreateLocation("K", 4));
	npcs.push(npc2);
		
	var npc3 = PutObjectInBlockSpace(CreateNPC("NPC3"), CreateLocation("P", 4));
	npcs.push(npc3);
	
	var npc4 = PutObjectInBlockSpace(CreateNPC("NPC4"), CreateLocation("U", 4));
	npcs.push(npc4);

	var npc5 = PutObjectInBlockSpace(CreateNPC("NPC5"), CreateLocation("J", 4));
	npcs.push(npc5);

	var npc6 = PutObjectInBlockSpace(CreateNPC("NPC6"), CreateLocation("O", 4));
	npcs.push(npc6);

	var npc7 = PutObjectInBlockSpace(CreateNPC("NPC7"), CreateLocation("T", 4));
	npcs.push(npc7);

	var npc8 = PutObjectInBlockSpace(CreateNPC("NPC8"), CreateLocation("Y", 4));
	npcs.push(npc8);
}