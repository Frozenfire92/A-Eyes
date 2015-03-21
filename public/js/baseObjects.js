var WorldLocation = 
{
	gridBlock: "",
	blockSpace: 0
};

var World = 
{
	name: "",
	size: 5,
	GridBlocks: [],
	timeOfDay: ""
};

var GridBlock = 
{
	name: "",
	BlockSpaces: []
};

var BlockSpace =
{
	index: 0
};

var AEye = 
{
	nickname: "",
	Abilities: []
};

var Ability =
{
	name: "",
	description: "",
	usable: false
};

var Chest = 
{
	contents: BaseItem
};

var Player = 
{
	name: "",
	currentLocation: WorldLocation
};

var BaseNPC =
{
	name: "",
	currentLocation: WorldLocation,
	SpeechContents: []
};

var BaseItem = 
{
	name: "",
	description: "",
	obtained: false
};


function CreateChest(name, item)
{
	var newChest = Chest;
	newChest.contents = item;
	if (name == null) newChest.name = "No name";
	else newChest.name = name;

	return newChest;
}

function CreatePlayer(name)
{
	var newPlayer = Player;
	if (name != null) newPlayer.name = name;
	else newPlayer.name = "Name";

	var newLocation = WorldLocation;
	newLocation.gridBlock = "A";
	newLocation.blockSpace = 0;
	newPlayer.currentLocation = newLocation;

	return newPlayer;
}