var availableCommands = ["Help", "Move Up", "Move Down", "Move Right", "Move Left", "Describe the Area", "Find a chest",
						 "Play a game", "Talk to someone", "Go Home", "Where am I", "List inventory"];
var player;
var world;
var aeye;

var chests = [];
var npcs = [];
var items = [];

function InstantiateWorld()
{
	SpeakIntro();
	world = CreateWorld("Sarah's World", 5);
	world.gridBlocks[0].blockSpaces[4].playerIsInSpace = true;
	SetUpChests();
	SetUpNPCs();
	SetUpBackgrounds();
	SetUpDescriptions();
	SetGridBlockNames(world);

	console.log("This is my world ", world);

	player = CreatePlayer("Sarah");
	console.log	("This is me ", player);
}


function TakeAction(actionToTake)
{
	switch (actionToTake)
	{
		case "MoveUp": 		MovePlayer("Up"); break;
		case "MoveDown":  	MovePlayer("Down"); break;
		case "MoveRight": 	MovePlayer("Right"); break;
		case "MoveLeft": 	MovePlayer("Left"); break;
		case "Find": 		Find(); break;
		case "Talk": 		Talk(); break;
		case "Describe": 		Talk(); break;
	}
}

function Find()
{
	var blockSpaceToCheck = FindBlockSpace(player.currentLocation);
	if (FindItemOnBlockSpace(blockSpaceToCheck, "Chest"))
	{
		blockSpaceToCheck.occupied = false;
		console.log ("ITEMS: ", items);
	}
}

function Talk()
{
	console.log("Talking to NPC: ", FindItemOnBlockSpace(FindBlockSpace(player.currentLocation), "NPC"));
	var blockSpaceToCheck = FindBlockSpace(player.currentLocation);
}

function Describe()
{
	//Read the description of the players current grid block
	var desc = FindGridBlock(player.currentLocation).description;
	console.log("This is the description ", desc);
	textToSpeech(desc);
}

function GoHome()
{
	PlayerIsNotInSpace();
	player.currentLocation = CreateLocation("A", 4);
	console.log(player, world);
	textToSpeech("Teleporting home!");
	$('body').attr('class', "Home");
}

function Help()
{
	var availCommands = "Here are the available commands.";
	availableCommands.forEach(function(command){
		availCommands += ", ";
		availCommands += command;
	});
	textToSpeech(availCommands);
}

function Play()
{
	if (player.currentLocation.gridBlockLetterIndex == "E")
		textToSpeech("You can play mini games here in the game house");
	else
		textToSpeech("You can only play mini games in the game house! Go there and try again.");
}

function DescribeItems()
{
	if (items.length == 0)
	{
		textToSpeech ("Your inventory is empty.");
	}
	else
	{
		var words = "Your inventory contents are: ";
		items.forEach(function(speech){
			words += ", ";
			words += speech;
		});
		textToSpeech(words);
	}
}

function WhereAmI()
{
	var sayLocation = "";
	switch (GetCurrentBlockSpace().name)
	{
		case "Home": sayLocation += "You are "; break;
		case "Town House": sayLocation += "You are in a "; break;
		case "Game House": sayLocation += "You are in the "; break;
		case "Town Square": sayLocation += "You are in the "; break;
	}
	sayLocation += GetCurrentBlockSpace().name;
	textToSpeech(sayLocation);
}

function MovePlayer(direction)
{
	//Change the player.currentLocation to be the location of the space that it is moving to
	var temp = player.currentLocation;
	player.currentLocation = FindLocationToMoveTo(direction);
	if (player.currentLocation == null) 
	{
		player.currentLocation = temp;
		textToSpeech("Sorry you can't go that way!");
	}
	else
	{
		textToSpeech("Moving "+direction);
		var currentGridBlock = FindGridBlock(player.currentLocation);
		$('body').attr('class', currentGridBlock.backgroundClass);
	}
}

function GetCurrentBlockSpace()
{
	var gridBlockIndex = GetIndexFromCharacter(player.currentLocation.gridBlockLetterIndex);
	return world.gridBlocks[gridBlockIndex];
}

function FindLocationToMoveTo(direction)
{
	FindBlockSpace(player.currentLocation).playerIsInSpace = false;
	//Take the space from that direction of the current location and return that new space location
	var locationToMoveTo = null;

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
			}
		}
	}

	if (locationToMoveTo == null)
	{
		console.log("Can't go that way!");
	}
	else
	{
		PlayerIsNotInSpace();
		FindBlockSpace(locationToMoveTo).playerIsInSpace = true;
		console.log("Player is moving into space ", locationToMoveTo);
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

function FindGridBlock(location)
{
	var gridBlockIndex = GetIndexFromCharacter(location.gridBlockLetterIndex);
	return world.gridBlocks[gridBlockIndex];
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

	var item2 = CreateItem("GoldenApple", "This apple will allow all the knowledge to grow inside you!");
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

	var npc1 = PutObjectInBlockSpace(CreateNPC("NPC1", GetSpeechContents(1)), CreateLocation("F", 4));
	npcs.push(npc1);

	var npc2 = PutObjectInBlockSpace(CreateNPC("NPC2", GetSpeechContents(2)), CreateLocation("K", 4));
	npcs.push(npc2);
		
	var npc3 = PutObjectInBlockSpace(CreateNPC("NPC3", GetSpeechContents(3)), CreateLocation("P", 4));
	npcs.push(npc3);
	
	var npc4 = PutObjectInBlockSpace(CreateNPC("NPC4", GetSpeechContents(4)), CreateLocation("U", 4));
	npcs.push(npc4);

	var npc5 = PutObjectInBlockSpace(CreateNPC("NPC5", GetSpeechContents(5)), CreateLocation("J", 4));
	npcs.push(npc5);

	var npc6 = PutObjectInBlockSpace(CreateNPC("NPC6", GetSpeechContents(6)), CreateLocation("O", 4));
	npcs.push(npc6);

	var npc7 = PutObjectInBlockSpace(CreateNPC("NPC7", GetSpeechContents(7)), CreateLocation("T", 4));
	npcs.push(npc7);

	var npc8 = PutObjectInBlockSpace(CreateNPC("NPC8", GetSpeechContents(8)), CreateLocation("Y", 4));
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
	world.gridBlocks[10].backgroundClass = "HouseGroup11";
	world.gridBlocks[11].backgroundClass = "TownSquare";
	world.gridBlocks[12].backgroundClass = "TownSquare";
	world.gridBlocks[13].backgroundClass = "TownSquare";
	world.gridBlocks[14].backgroundClass = "HouseGroup21";
	world.gridBlocks[15].backgroundClass = "HouseGroup12";
	world.gridBlocks[16].backgroundClass = "TownSquare";
	world.gridBlocks[17].backgroundClass = "TownSquare";
	world.gridBlocks[18].backgroundClass = "TownSquare";
	world.gridBlocks[19].backgroundClass = "HouseGroup22";
	world.gridBlocks[20].backgroundClass = "HouseGroup13";
	world.gridBlocks[21].backgroundClass = "TownSquare";
	world.gridBlocks[22].backgroundClass = "TownSquare";
	world.gridBlocks[23].backgroundClass = "TownSquare";
	world.gridBlocks[24].backgroundClass = "HouseGroup23";
}

function SetUpDescriptions()
{
	world.gridBlocks[0].description = "This is your home. You can come back here anytime.";
	world.gridBlocks[1].description = "This is the town square.";
	world.gridBlocks[2].description = "This is the town square.";
	world.gridBlocks[3].description = "This is the town square.";
	world.gridBlocks[4].description = "This is the gamehouse. You can play mini games in here.";
	world.gridBlocks[5].description = "This is an NPC house.";
	world.gridBlocks[6].description = "This is the town square.";
	world.gridBlocks[7].description = "This is the town square.";
	world.gridBlocks[8].description = "This is the town square.";
	world.gridBlocks[9].description = "This is an NPC house.";
	world.gridBlocks[10].description = "This is an NPC house.";
	world.gridBlocks[11].description = "This is the town square.";
	world.gridBlocks[12].description = "This is the town square.";
	world.gridBlocks[13].description = "This is the town square.";
	world.gridBlocks[14].description = "This is an NPC house.";
	world.gridBlocks[15].description = "This is an NPC house.";
	world.gridBlocks[16].description = "This is the town square.";
	world.gridBlocks[17].description = "This is the town square.";
	world.gridBlocks[18].description = "This is the town square.";
	world.gridBlocks[19].description = "This is an NPC house.";
	world.gridBlocks[20].description = "This is an NPC house.";
	world.gridBlocks[21].description = "This is the town square.";
	world.gridBlocks[22].description = "This is the town square.";
	world.gridBlocks[23].description = "This is the town square.";
	world.gridBlocks[24].description = "This is an NPC house.";
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
	for (var i = 0; i <  world.gridBlocks.length; i++) 
	{
		for (var j = 0; j < world.gridBlocks[i].blockSpaces.length; j++)
		{
			if (world.gridBlocks[i].blockSpaces[j].globalIndex == globalIndex) return CreateLocation(GetCharacterFromIndex(i), j);
		}
	}
}

function FindItemOnBlockSpace(currentBlockSpace, itemToFind)
{
	//Find either a chest or an NPC in the current block space
	console.log("Finding item ", itemToFind);
	if (currentBlockSpace.spaceItem.occupied = false)
	{
		textToSpeech("This space is unoccupied.");
	}
	else
	{
		textToSpeech("This space is occupied.");

		switch (itemToFind)
		{
			case "Chest":  
			{
				if (currentBlockSpace.spaceItem.item != null)
				{
					if (currentBlockSpace.spaceItem.item.name == "Umbrella" ||
						currentBlockSpace.spaceItem.item.name == "GoldenApple" ||
						currentBlockSpace.spaceItem.item.name == "RainbowLollipop" ||
						currentBlockSpace.spaceItem.item.name == "TalkingGoldfish" ||
						currentBlockSpace.spaceItem.item.name == "YoYo" ||
						currentBlockSpace.spaceItem.item.name == "SuperMagnets" )
					{
						//Give player that spaceItem
						items.push(currentBlockSpace.spaceItem.item.name);
						TurnItemUIOn(currentBlockSpace.spaceItem.item.name);
						textToSpeech ("You found the "+ currentBlockSpace.spaceItem.item.name);
						return true;
					}
					else
					{
					textToSpeech ("There isn't an item here. But there might be a person, try talking.");
					return false;
					}
				}
				else
				{
					textToSpeech ("There isn't anything here.");
					return false;
				} 
			}
			case "NPC": 
			{
				if (currentBlockSpace.spaceItem.name != null)
				{
					if (currentBlockSpace.spaceItem.name == "NPC1" ||
						currentBlockSpace.spaceItem.name == "NPC2" ||
						currentBlockSpace.spaceItem.name == "NPC3" ||
						currentBlockSpace.spaceItem.name == "NPC4" ||
						currentBlockSpace.spaceItem.name == "NPC5" ||
						currentBlockSpace.spaceItem.name == "NPC6" ||
						currentBlockSpace.spaceItem.name == "NPC7" ||
						currentBlockSpace.spaceItem.name == "NPC8" ) 
					{
						console.log("You found an NPC.");

						var contentsToRandomize;
						switch (currentBlockSpace.spaceItem.name)
						{
							case "NPC1": contentsToRandomize = currentBlockSpace.spaceItem.speechContents; break; 
							case "NPC2": contentsToRandomize = currentBlockSpace.spaceItem.speechContents; break; 
							case "NPC3": contentsToRandomize = currentBlockSpace.spaceItem.speechContents; break; 
							case "NPC4": contentsToRandomize = currentBlockSpace.spaceItem.speechContents; break; 
							case "NPC5": contentsToRandomize = currentBlockSpace.spaceItem.speechContents; break; 
							case "NPC6": contentsToRandomize = currentBlockSpace.spaceItem.speechContents; break; 
							case "NPC7": contentsToRandomize = currentBlockSpace.spaceItem.speechContents; break; 
							case "NPC8": contentsToRandomize = currentBlockSpace.spaceItem.speechContents; break; 
						}

						switch (Math.ceil(Math.random()*3))
						{
							default: 
							case 0: textToSpeech(contentsToRandomize[0]); break;
							case 1: textToSpeech(contentsToRandomize[1]); break;
							case 2: textToSpeech(contentsToRandomize[2]); break;
						}
						return true;
					}
					else
					{
					textToSpeech ("There is nobody to talk to here.");
					return false;
					}
				}
				else
				{
					textToSpeech ("There is nobody to talk to here.");
					return false;
				}
			}
		}
	}
}

