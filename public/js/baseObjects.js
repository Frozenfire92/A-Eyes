var WorldLocation = 
{
	gridBlock: "",
	blockSpace: 0
};

var World = 
{
	name: "",
	size: 5,
	gridBlocks: [],
	timeOfDay: ""
};

var GridBlock = 
{
	name: "",
	letterIndex: "",
	blockSpaces: []
};

var BlockSpace =
{
	index: 0,
	spaceItem: {},
	occupied: false,

};

var AEye = 
{
	name: "",
	abilities: []
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
	speechContents: []
};

var BaseItem = 
{
	name: "",
	description: "",
	obtained: false
};

function CreateWorld (name, size) 
{
	var newWorld = jQuery.extend(true, {}, World);
	newWorld.name = name;
	newWorld.size = size;
	newWorld.timeOfDay = "Morning";

	var newGridBlocks = [];
	var letterIndex = "A";
	for (var i = 0; i < size*size; i++)
	{
		newGridBlocks.push(CreateGridBlock("GridBlock" + i, letterIndex));
		letterIndex = IncrementCharacter(letterIndex);
	}
	newWorld.gridBlocks = newGridBlocks;

	return newWorld;
}

function CreateGridBlock(name, letterIndex)
{
	var newGridBlock = jQuery.extend(true, {}, GridBlock);
	newGridBlock.name = name;
	newGridBlock.letterIndex = letterIndex;

	var blockSpaces = [];

	for (var i = 0; i < 9; i++)
	{
		blockSpaces.push(CreateBlockSpace("BlockSpace" + i));
	}

	newGridBlock.blockSpaces = blockSpaces;
	return newGridBlock;
}

function CreateBlockSpace(index)
{
	var newBlockSpace = jQuery.extend(true, {}, BlockSpace);
	newBlockSpace.index = index;
	return newBlockSpace;
}

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
	newPlayer.name = name;
	var startLocation = WorldLocation;
	startLocation.gridBlock = "A";
	startLocation.blockSpace = 0;
	newPlayer.currentLocation = startLocation;
	return newPlayer;
}

function CreateNPC(name, location, speechContents)
{
	var newNPC = BaseNPC;
	newNPC.name = name;
	newNPC.currentLocation = location;
	newNPC.speechContents = speechContents;
	return newNPC;
}

function CreateItem(name, description, obtained)
{
	var newItem = BaseItem;
	newItem.name = name;
	newItem.description = description;
	newItem.obtained = obtained;
	return newItem;
}

function CreateAbility(name, description, usable)
{
	var newAbility = Ability;
	newAbility.name = name;
	newAbility.description = description;
	newAbility.usable = usable;
	return newAbility;
}

function CreateAEye(name, abilities)
{
	var newAEye = AEye;
	newAEye.name = name;
	newAEye.abilities = abilities;
} 