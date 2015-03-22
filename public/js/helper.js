
function IncrementCharacter(character)
{
	return String.fromCharCode(character.charCodeAt(0) + 1);
}

function GetIndexFromCharacter(character)
{
	switch (character)
	{
		case "A": return 0;
		case "B": return 1;
		case "C": return 2;
		case "D": return 3;
		case "E": return 4;
		case "F": return 5;
		case "G": return 6;
		case "H": return 7;
		case "I": return 8;
		case "J": return 9;
		case "K": return 10;
		case "L": return 11;
		case "M": return 12;
		case "N": return 13;
		case "O": return 14;
		case "P": return 15;
		case "Q": return 16;
		case "R": return 17;
		case "S": return 18;
		case "T": return 19;
		case "U": return 20;
		case "V": return 21;
		case "W": return 22;
		case "X": return 23;
		case "Y": return 24;
	}
}

function GetCharacterFromIndex(index)
{
	switch (index)
	{
		case 0: return  "A";
		case 1: return  "B";
		case 2: return  "C";
		case 3: return  "D";
		case 4: return  "E";
		case 5: return  "F";
		case 6: return  "G";
		case 7: return  "H";
		case 8: return  "I";
		case 9: return  "J";
		case 10: return "K";
		case 11: return "L";
		case 12: return "M";
		case 13: return "N";
		case 14: return "O";
		case 15: return "P";
		case 16: return "Q";
		case 17: return "R";
		case 18: return "S";
		case 19: return "T";
		case 20: return "U";
		case 22: return "V";
		case 23: return "W";
		case 24: return "X";
		case 25: return "Y";
	}
}

function PlayerIsNotInSpace()
{

	for (var i = 0; i <  world.gridBlocks.length; i++) 
	{
		for (var j = 0; j < world.gridBlocks[i].blockSpaces.length; j++)
		{
			world.gridBlocks[i].blockSpaces[j].playerIsInSpace = false;
		}
	}
}

function TurnItemUIOn(itemName)
{
	console.log(itemName);
	switch (itemName)
	{

		case "Umbrella": $('#Umbrella').removeClass("hidden"); break;
		case "GoldenApple": $('#GoldenApple').removeClass("hidden"); break;
		case "RainbowLollipop": $('#RainbowLollipop').removeClass("hidden"); break;
		case "TalkingGoldfish": $('#TalkingGoldfish').removeClass("hidden"); break;
		case "YoYo": $('#YoYo').removeClass("hidden"); break;
		case "SuperMagnets": $('#SuperMagnets').removeClass("hidden"); break;
	}
	
}

function GetSpeechContents(index)
{
	var speechContents = [];

	switch (index)
	{
		default:
		{
			speechContents.push("Hello there, how are you doing today?");
			speechContents.push("Welcome to A eyes.");
			speechContents.push("You're awesome!");
			break;
		}
		case 1:
		{
			speechContents.push("If you go right from here you might find a chest!");
			speechContents.push("What is the square root of 2?");
			speechContents.push("I'm sorry, I'm too tired for this.");
			break;
		}
		case 2:
		{
			speechContents.push("There's a chest close by...");
			speechContents.push("The center of the world is the best part of the world!");
			speechContents.push("What's black and white and red all over?");
			break;
		}
		case 3:
		{
			speechContents.push("If you want the chest, go right.");
			speechContents.push("I've been hacking all weekend!");
			speechContents.push("What do you call a bear with no ears?");
			break;
		}
		case 4:
		{
			speechContents.push("There's a chest, but it's not close by.");
			speechContents.push("I think it might rain today, do you have your umbrella?");
			speechContents.push("Why was six afraid of seven?");
			break;
		}
		case 5:
		{
			speechContents.push("The chest is far away to the left.");
			speechContents.push("Someone in town keeps saying it might rain, curse them!");
			speechContents.push("What do you call a hungry pirate's parrot?");
			break;
		}
		case 6:
		{
			speechContents.push("Check the center of the world for a chest!");
			speechContents.push("If you find my unicorn, can you please bring it back?");
			speechContents.push("Which weighs more, a pound of feathers or a pound of gold?");
			break;
		}
		case 7:
		{
			speechContents.push("The chest isn't even close.");
			speechContents.push("I'm searching for my magents, they're super awesome.");
			speechContents.push("Stop being so irrational!");
			break;
		}
		case 8:
		{
			speechContents.push("Go left and you'll find something amazing!");
			speechContents.push("I live on the edge... of this world.");
			speechContents.push("What is your favourite shape?");
			break;
		}
	}
}