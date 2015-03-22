var player;
var world;
var aeye;

var chests = [];
var npcs = [];
var items = [];

function InstantiateWorld()
{
	world = CreateWorld("Sarah's World", 5);

	SetUpChests();
	SetUpNPCs();
	SetUpBackgrounds();

	console.log("This is my world ", world);

	player = CreatePlayer("Sarah");
	console.log	("This is me ", player);
}

function MovePlayer(direction)
{
	//Change the player.currentLocation to be the location of the space that it is moving to
	console.log("Moving player ", direction);
	console.log("Player is currently at location: ", player.currentLocation);
	player.currentLocation = FindLocationToMoveTo(direction);
	console.log("Player (after move)  at location: ", player.currentLocation);
	
}

function FindLocationToMoveTo(direction)
{
	//Take the space from that direction of the current location and return that new space location
	var locationToMoveTo;

	for (var i = 0; i <  world.gridBlocks.length; i++) 
	{
		for (var j = 0; j < world.gridBlocks[i].blockSpaces.length; j++)
		{
			var letterIndex = GetCharacterFromIndex(i);
			if (player.currentLocation.gridBlockLetterIndex == letterIndex && player.currentLocation.blockSpaceIndex == j)
			{
				switch (direction)
				{
					case "Up":
					case "North":
					{ 
						var globalIndexOfNewSpace = world.gridBlocks[i].blockSpaces[j].northSpace
						locationToMoveTo = GetLocationFromGlobalIndex(globalIndexOfNewSpace);
						break;
					}
					case "Down":
					case "South":
					{
						var globalIndexOfNewSpace = world.gridBlocks[i].blockSpaces[j].southSpace
						locationToMoveTo = GetLocationFromGlobalIndex(globalIndexOfNewSpace);
						break;
					}
					case "Right":
					case "East":
					{
						var globalIndexOfNewSpace = world.gridBlocks[i].blockSpaces[j].eastSpace
						locationToMoveTo = GetLocationFromGlobalIndex(globalIndexOfNewSpace);
						break;
					}
					case "Left":
					case "West":
					{
						var globalIndexOfNewSpace = world.gridBlocks[i].blockSpaces[j].westSpace
						locationToMoveTo = GetLocationFromGlobalIndex(globalIndexOfNewSpace);
						break;
					}
					default:
					{
						console.log("Bad direction");
						break;
					}
				}
					console.log("Moving to location " , locationToMoveTo);
			}
		}
	}

	return locationToMoveTo;
}

function PutObjectInBlockSpace(objectToPut, locationToPut)
{
	var blockSpaceToUse = FindBlockSpace(locationToPut);
	blockSpaceToUse.spaceItem = objectToPut;
	blockSpaceToUse.occupied = true;
	objectToPut.location = locationToPut;
	return objectToPut;
}

function GetBlockSpaces(gridBlock)
{
	return gridBlock.blockSpaces;
}

function FindBlockSpace(location)
{
	var gridBlockIndex = GetIndexFromCharacter(location.gridBlockLetterIndex);
	return world.gridBlocks[gridBlockIndex].blockSpaces[location.blockSpaceIndex];
}

function SetUpChests()
{
	//Create all Chests
	//Set locations of all chests

	var item1 = CreateItem("Umbrella", "Maybe it will help keep you dry, maybe not!");
	var chest1 = PutObjectInBlockSpace(CreateChest("Chest1",item1), CreateLocation("A", 4));
	chests.push(chest1);

	var item2 = CreateItem("GolddenApple", "This apple will allow all the knowledge to grow inside you!");
	var chest2 = PutObjectInBlockSpace(CreateChest("Chest2", item2), CreateLocation("D", 0));
	chests.push(chest2);
		
	var item3 = CreateItem("RainbowLollipop", "Eating this will unlock your wildest dreams!");
	var chest3 = PutObjectInBlockSpace(CreateChest("Chest3", item3), CreateLocation("G", 7));
	chests.push(chest3);
	
	var item4 = CreateItem("TalkingGoldfish", "To grant unlimited wishes!");

	var chest4 = PutObjectInBlockSpace(CreateChest("Chest4", item4), CreateLocation("M", 4));
	chests.push(chest4);

	var item5 = CreateItem("YoYo", "Everybody just wants to have fun.");
	var chest5 = PutObjectInBlockSpace(CreateChest("Chest5", item5), CreateLocation("Q", 2));
	chests.push(chest5);

	var item6 = CreateItem("SuperMagnets", "These will help you take over the world!");
	var chest6 = PutObjectInBlockSpace(CreateChest("Chest6", item6), CreateLocation("X", 5));
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

function SetUpBackgrounds()
{
	world.gridBlocks[0].backgroundClass = "Home";
	world.gridBlocks[1].backgroundClass = "TownSquare";
	world.gridBlocks[2].backgroundClass = "TownSquare";
	world.gridBlocks[3].backgroundClass = "TownSquare";
	world.gridBlocks[4].backgroundClass = "Gamehouse";
	world.gridBlocks[5].backgroundClass = "HouseGroup1";
	world.gridBlocks[6].backgroundClass = "TownSquare";
	world.gridBlocks[7].backgroundClass = "TownSquare";
	world.gridBlocks[8].backgroundClass = "TownSquare";
	world.gridBlocks[9].backgroundClass = "HouseGroup2";
	world.gridBlocks[10].backgroundClass = "HouseGroup1";
	world.gridBlocks[11].backgroundClass = "TownSquare";
	world.gridBlocks[12].backgroundClass = "TownSquare";
	world.gridBlocks[13].backgroundClass = "TownSquare";
	world.gridBlocks[14].backgroundClass = "HouseGroup2";
	world.gridBlocks[15].backgroundClass = "HouseGroup1";
	world.gridBlocks[16].backgroundClass = "TownSquare";
	world.gridBlocks[17].backgroundClass = "TownSquare";
	world.gridBlocks[18].backgroundClass = "TownSquare";
	world.gridBlocks[19].backgroundClass = "HouseGroup2";
	world.gridBlocks[20].backgroundClass = "HouseGroup1";
	world.gridBlocks[21].backgroundClass = "TownSquare";
	world.gridBlocks[22].backgroundClass = "TownSquare";
	world.gridBlocks[23].backgroundClass = "TownSquare";
	world.gridBlocks[24].backgroundClass = "HouseGroup2";
}

function GetBlockSpaceFromGlobalIndex(globalIndex)
{
	for (var i = 0; i <  world.gridBlocks.length; i++) 
	{
		for (var j = 0; j < world.gridBlocks[i].blockSpaces.length; j++)
		{
			if (world.gridBlocks[i].blockSpaces[j].globalIndex == globalIndex) return world.gridBlocks[i].blockSpaces[j];
		}
	}
}

function GetLocationFromGlobalIndex(globalIndex)
{
	console.log("Looking for location at global index: ", globalIndex);
	for (var i = 0; i <  world.gridBlocks.length; i++) 
	{
		for (var j = 0; j < world.gridBlocks[i].blockSpaces.length; j++)
		{
			if (world.gridBlocks[i].blockSpaces[j].globalIndex == globalIndex) return CreateLocation(GetCharacterFromIndex(i), j);
		}
	}
}