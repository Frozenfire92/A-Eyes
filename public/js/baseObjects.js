var WorldLocation = 
{
	gridBlockLetterIndex: "A",
	blockSpaceIndex: 0
};

var World = 
{
	name: "",
	size: 5,
	gridBlocks: []
};

var GridBlock = 
{
	name: "",
	description: "",
	letterIndex: "",
	backgroundClass: "",
	blockSpaces: []
};

var BlockSpace =
{
	globalIndex:0,
	index: 0,
	spaceItem: {},
	occupied: false,
	playerIsInSpace: false,
	northSpace: 0,
	southSpace: 0,
	eastSpace: 0,
	westSpace: 0
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
	name: "",
	contents: BaseItem,
	currentLocation: WorldLocation
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
	description: ""
};

function CreateLocation(gridBlockLetterIndex, blockSpaceIndex)
{
	var newLocation = jQuery.extend(true, {}, WorldLocation);
	newLocation.gridBlockLetterIndex = gridBlockLetterIndex;
	newLocation.blockSpaceIndex = blockSpaceIndex;
	return newLocation;
}

function CreateWorld (name, size) 
{
	var newWorld = jQuery.extend(true, {}, World);
	newWorld.name = name;
	newWorld.size = size;

	var newGridBlocks = [];
	var letterIndex = "A";
	for (var i = 0; i < size*size; i++)
	{
		newGridBlocks.push(CreateGridBlock("GridBlock" + i, letterIndex));
		letterIndex = IncrementCharacter(letterIndex);
	}
	newWorld.gridBlocks = newGridBlocks;
	PopulateBlockSpaceReferences(newWorld)
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
	var newChest = jQuery.extend(true, {}, Chest);
	newChest.name = name;
	newChest.item = item;
	return newChest;
}

function CreatePlayer(name)
{
	var newPlayer = jQuery.extend(true, {}, Player);
	newPlayer.name = name;
	newPlayer.currentLocation = CreateLocation("A", 4);
	return newPlayer;
}

function CreateNPC(name, speechContents)
{
	var newNPC = jQuery.extend(true, {}, BaseNPC);
	newNPC.name = name;
	if (speechContents != null) newNPC.speechContents = speechContents;
	return newNPC;
}

function CreateItem(name, description)
{
	var newItem = jQuery.extend(true, {}, BaseItem);
	newItem.name = name;
	newItem.description = description;
	return newItem;
}

function CreateAbility(name, description, usable)
{
	var newAbility = jQuery.extend(true, {}, Ability);
	newAbility.name = name;
	newAbility.description = description;
	newAbility.usable = usable;
	return newAbility;
}

function CreateAEye(name, abilities)
{
	var newAEye = jQuery.extend(true, {}, AEye);
	newAEye.name = name;
	newAEye.abilities = abilities;
} 
