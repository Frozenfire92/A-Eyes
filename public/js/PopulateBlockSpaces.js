
function PopulateBlockSpaceReferences(world)
{

console.log("Global index set: ", world);
	var gIndex = 0;

	for (var i = 0; i <  world.gridBlocks.length; i++) 
	{
		for (var j = 0; j < world.gridBlocks[i].blockSpaces.length; j++)
		{
			console.log (world.gridBlocks[i].blockSpaces[j]);
			world.gridBlocks[i].blockSpaces[j].globalIndex = gIndex;
			gIndex++;
		}
	}

//Block A
	//Block Space 0
	world.gridBlocks[0].blockSpaces[0].northSpace = 0;
	world.gridBlocks[0].blockSpaces[0].southSpace = 0;
	world.gridBlocks[0].blockSpaces[0].eastSpace  = 0;
	world.gridBlocks[0].blockSpaces[0].westSpace  = 0;

	//Block Space 1
	world.gridBlocks[0].blockSpaces[1].northSpace = 0;
	world.gridBlocks[0].blockSpaces[1].southSpace = 0;
	world.gridBlocks[0].blockSpaces[1].eastSpace  = 0;
	world.gridBlocks[0].blockSpaces[1].westSpace  = 0;

	//Block Space 2
	world.gridBlocks[0].blockSpaces[2].northSpace = 0;
	world.gridBlocks[0].blockSpaces[2].southSpace = 0;
	world.gridBlocks[0].blockSpaces[2].eastSpace  = 0;
	world.gridBlocks[0].blockSpaces[2].westSpace  = 0;

	//Block Space 3
	world.gridBlocks[0].blockSpaces[3].northSpace = 0;
	world.gridBlocks[0].blockSpaces[3].southSpace = 0;
	world.gridBlocks[0].blockSpaces[3].eastSpace  = 0;
	world.gridBlocks[0].blockSpaces[3].westSpace  = 0;

	//Block Space 4
	world.gridBlocks[0].blockSpaces[4].northSpace = 0;
	world.gridBlocks[0].blockSpaces[4].southSpace = 0;
	world.gridBlocks[0].blockSpaces[4].eastSpace  = 0;
	world.gridBlocks[0].blockSpaces[4].westSpace  = 0;

	//Block Space 5
	world.gridBlocks[0].blockSpaces[5].northSpace = 0;
	world.gridBlocks[0].blockSpaces[5].southSpace = 0;
	world.gridBlocks[0].blockSpaces[5].eastSpace  = 0;
	world.gridBlocks[0].blockSpaces[5].westSpace  = 0;

	//Block Space 6
	world.gridBlocks[0].blockSpaces[6].northSpace = 0;
	world.gridBlocks[0].blockSpaces[6].southSpace = 0;
	world.gridBlocks[0].blockSpaces[6].eastSpace  = 0;
	world.gridBlocks[0].blockSpaces[6].westSpace  = 0;

	//Block Space 7
	world.gridBlocks[0].blockSpaces[7].northSpace = 0;
	world.gridBlocks[0].blockSpaces[7].southSpace = 0;
	world.gridBlocks[0].blockSpaces[7].eastSpace  = 0;
	world.gridBlocks[0].blockSpaces[7].westSpace  = 0;

//Block B
	//Block Space 0
	world.gridBlocks[1].blockSpaces[0].northSpace = 0;
	world.gridBlocks[1].blockSpaces[0].southSpace = 0;
	world.gridBlocks[1].blockSpaces[0].eastSpace  = 0;
	world.gridBlocks[1].blockSpaces[0].westSpace  = 0;

	//Block Space 1
	world.gridBlocks[1].blockSpaces[1].northSpace = 0;
	world.gridBlocks[1].blockSpaces[1].southSpace = 0;
	world.gridBlocks[1].blockSpaces[1].eastSpace  = 0;
	world.gridBlocks[1].blockSpaces[1].westSpace  = 0;

	//Block Space 2
	world.gridBlocks[1].blockSpaces[2].northSpace = 0;
	world.gridBlocks[1].blockSpaces[2].southSpace = 0;
	world.gridBlocks[1].blockSpaces[2].eastSpace  = 0;
	world.gridBlocks[1].blockSpaces[2].westSpace  = 0;

	//Block Space 3
	world.gridBlocks[1].blockSpaces[3].northSpace = 0;
	world.gridBlocks[1].blockSpaces[3].southSpace = 0;
	world.gridBlocks[1].blockSpaces[3].eastSpace  = 0;
	world.gridBlocks[1].blockSpaces[3].westSpace  = 0;

	//Block Space 4
	world.gridBlocks[1].blockSpaces[4].northSpace = 0;
	world.gridBlocks[1].blockSpaces[4].southSpace = 0;
	world.gridBlocks[1].blockSpaces[4].eastSpace  = 0;
	world.gridBlocks[1].blockSpaces[4].westSpace  = 0;

	//Block Space 5
	world.gridBlocks[1].blockSpaces[5].northSpace = 0;
	world.gridBlocks[1].blockSpaces[5].southSpace = 0;
	world.gridBlocks[1].blockSpaces[5].eastSpace  = 0;
	world.gridBlocks[1].blockSpaces[5].westSpace  = 0;

	//Block Space 6
	world.gridBlocks[1].blockSpaces[6].northSpace = 0;
	world.gridBlocks[1].blockSpaces[6].southSpace = 0;
	world.gridBlocks[1].blockSpaces[6].eastSpace  = 0;
	world.gridBlocks[1].blockSpaces[6].westSpace  = 0;

	//Block Space 7
	world.gridBlocks[1].blockSpaces[7].northSpace = 0;
	world.gridBlocks[1].blockSpaces[7].southSpace = 0;
	world.gridBlocks[1].blockSpaces[7].eastSpace  = 0;
	world.gridBlocks[1].blockSpaces[7].westSpace  = 0;

//Block C
	//Block Space 0
	world.gridBlocks[2].blockSpaces[0].northSpace = 0;
	world.gridBlocks[2].blockSpaces[0].southSpace = 0;
	world.gridBlocks[2].blockSpaces[0].eastSpace  = 0;
	world.gridBlocks[2].blockSpaces[0].westSpace  = 0;

	//Block Space 1
	world.gridBlocks[2].blockSpaces[1].northSpace = 0;
	world.gridBlocks[2].blockSpaces[1].southSpace = 0;
	world.gridBlocks[2].blockSpaces[1].eastSpace  = 0;
	world.gridBlocks[2].blockSpaces[1].westSpace  = 0;

	//Block Space 2
	world.gridBlocks[2].blockSpaces[2].northSpace = 0;
	world.gridBlocks[2].blockSpaces[2].southSpace = 0;
	world.gridBlocks[2].blockSpaces[2].eastSpace  = 0;
	world.gridBlocks[2].blockSpaces[2].westSpace  = 0;

	//Block Space 3
	world.gridBlocks[2].blockSpaces[3].northSpace = 0;
	world.gridBlocks[2].blockSpaces[3].southSpace = 0;
	world.gridBlocks[2].blockSpaces[3].eastSpace  = 0;
	world.gridBlocks[2].blockSpaces[3].westSpace  = 0;

	//Block Space 4
	world.gridBlocks[2].blockSpaces[4].northSpace = 0;
	world.gridBlocks[2].blockSpaces[4].southSpace = 0;
	world.gridBlocks[2].blockSpaces[4].eastSpace  = 0;
	world.gridBlocks[2].blockSpaces[4].westSpace  = 0;

	//Block Space 5
	world.gridBlocks[2].blockSpaces[5].northSpace = 0;
	world.gridBlocks[2].blockSpaces[5].southSpace = 0;
	world.gridBlocks[2].blockSpaces[5].eastSpace  = 0;
	world.gridBlocks[2].blockSpaces[5].westSpace  = 0;

	//Block Space 6
	world.gridBlocks[2].blockSpaces[6].northSpace = 0;
	world.gridBlocks[2].blockSpaces[6].southSpace = 0;
	world.gridBlocks[2].blockSpaces[6].eastSpace  = 0;
	world.gridBlocks[2].blockSpaces[6].westSpace  = 0;

	//Block Space 7
	world.gridBlocks[2].blockSpaces[7].northSpace = 0;
	world.gridBlocks[2].blockSpaces[7].southSpace = 0;
	world.gridBlocks[2].blockSpaces[7].eastSpace  = 0;
	world.gridBlocks[2].blockSpaces[7].westSpace  = 0;

//Block D
	//Block Space 0
	world.gridBlocks[3].blockSpaces[0].northSpace = 0;
	world.gridBlocks[3].blockSpaces[0].southSpace = 0;
	world.gridBlocks[3].blockSpaces[0].eastSpace  = 0;
	world.gridBlocks[3].blockSpaces[0].westSpace  = 0;

	//Block Space 1
	world.gridBlocks[3].blockSpaces[1].northSpace = 0;
	world.gridBlocks[3].blockSpaces[1].southSpace = 0;
	world.gridBlocks[3].blockSpaces[1].eastSpace  = 0;
	world.gridBlocks[3].blockSpaces[1].westSpace  = 0;

	//Block Space 2
	world.gridBlocks[3].blockSpaces[2].northSpace = 0;
	world.gridBlocks[3].blockSpaces[2].southSpace = 0;
	world.gridBlocks[3].blockSpaces[2].eastSpace  = 0;
	world.gridBlocks[3].blockSpaces[2].westSpace  = 0;

	//Block Space 3
	world.gridBlocks[3].blockSpaces[3].northSpace = 0;
	world.gridBlocks[3].blockSpaces[3].southSpace = 0;
	world.gridBlocks[3].blockSpaces[3].eastSpace  = 0;
	world.gridBlocks[3].blockSpaces[3].westSpace  = 0;

	//Block Space 4
	world.gridBlocks[3].blockSpaces[4].northSpace = 0;
	world.gridBlocks[3].blockSpaces[4].southSpace = 0;
	world.gridBlocks[3].blockSpaces[4].eastSpace  = 0;
	world.gridBlocks[3].blockSpaces[4].westSpace  = 0;

	//Block Space 5
	world.gridBlocks[3].blockSpaces[5].northSpace = 0;
	world.gridBlocks[3].blockSpaces[5].southSpace = 0;
	world.gridBlocks[3].blockSpaces[5].eastSpace  = 0;
	world.gridBlocks[3].blockSpaces[5].westSpace  = 0;

	//Block Space 6
	world.gridBlocks[3].blockSpaces[6].northSpace = 0;
	world.gridBlocks[3].blockSpaces[6].southSpace = 0;
	world.gridBlocks[3].blockSpaces[6].eastSpace  = 0;
	world.gridBlocks[3].blockSpaces[6].westSpace  = 0;

	//Block Space 7
	world.gridBlocks[3].blockSpaces[7].northSpace = 0;
	world.gridBlocks[3].blockSpaces[7].southSpace = 0;
	world.gridBlocks[3].blockSpaces[7].eastSpace  = 0;
	world.gridBlocks[3].blockSpaces[7].westSpace  = 0;

//Block E
	//Block Space 0
	world.gridBlocks[4].blockSpaces[0].northSpace = 0;
	world.gridBlocks[4].blockSpaces[0].southSpace = 0;
	world.gridBlocks[4].blockSpaces[0].eastSpace  = 0;
	world.gridBlocks[4].blockSpaces[0].westSpace  = 0;

	//Block Space 1
	world.gridBlocks[4].blockSpaces[1].northSpace = 0;
	world.gridBlocks[4].blockSpaces[1].southSpace = 0;
	world.gridBlocks[4].blockSpaces[1].eastSpace  = 0;
	world.gridBlocks[4].blockSpaces[1].westSpace  = 0;

	//Block Space 2
	world.gridBlocks[4].blockSpaces[2].northSpace = 0;
	world.gridBlocks[4].blockSpaces[2].southSpace = 0;
	world.gridBlocks[4].blockSpaces[2].eastSpace  = 0;
	world.gridBlocks[4].blockSpaces[2].westSpace  = 0;

	//Block Space 3
	world.gridBlocks[4].blockSpaces[3].northSpace = 0;
	world.gridBlocks[4].blockSpaces[3].southSpace = 0;
	world.gridBlocks[4].blockSpaces[3].eastSpace  = 0;
	world.gridBlocks[4].blockSpaces[3].westSpace  = 0;

	//Block Space 4
	world.gridBlocks[4].blockSpaces[4].northSpace = 0;
	world.gridBlocks[4].blockSpaces[4].southSpace = 0;
	world.gridBlocks[4].blockSpaces[4].eastSpace  = 0;
	world.gridBlocks[4].blockSpaces[4].westSpace  = 0;

	//Block Space 5
	world.gridBlocks[4].blockSpaces[5].northSpace = 0;
	world.gridBlocks[4].blockSpaces[5].southSpace = 0;
	world.gridBlocks[4].blockSpaces[5].eastSpace  = 0;
	world.gridBlocks[4].blockSpaces[5].westSpace  = 0;

	//Block Space 6
	world.gridBlocks[4].blockSpaces[6].northSpace = 0;
	world.gridBlocks[4].blockSpaces[6].southSpace = 0;
	world.gridBlocks[4].blockSpaces[6].eastSpace  = 0;
	world.gridBlocks[4].blockSpaces[6].westSpace  = 0;

	//Block Space 7
	world.gridBlocks[4].blockSpaces[7].northSpace = 0;
	world.gridBlocks[4].blockSpaces[7].southSpace = 0;
	world.gridBlocks[4].blockSpaces[7].eastSpace  = 0;
	world.gridBlocks[4].blockSpaces[7].westSpace  = 0;
	//Block F

	//Block Space 0
	world.gridBlocks[5].blockSpaces[0].northSpace = 0;
	world.gridBlocks[5].blockSpaces[0].southSpace = 0;
	world.gridBlocks[5].blockSpaces[0].eastSpace  = 0;
	world.gridBlocks[5].blockSpaces[0].westSpace  = 0;

	//Block Space 1
	world.gridBlocks[5].blockSpaces[1].northSpace = 0;
	world.gridBlocks[5].blockSpaces[1].southSpace = 0;
	world.gridBlocks[5].blockSpaces[1].eastSpace  = 0;
	world.gridBlocks[5].blockSpaces[1].westSpace  = 0;

	//Block Space 2
	world.gridBlocks[5].blockSpaces[2].northSpace = 0;
	world.gridBlocks[5].blockSpaces[2].southSpace = 0;
	world.gridBlocks[5].blockSpaces[2].eastSpace  = 0;
	world.gridBlocks[5].blockSpaces[2].westSpace  = 0;

	//Block Space 3
	world.gridBlocks[5].blockSpaces[3].northSpace = 0;
	world.gridBlocks[5].blockSpaces[3].southSpace = 0;
	world.gridBlocks[5].blockSpaces[3].eastSpace  = 0;
	world.gridBlocks[5].blockSpaces[3].westSpace  = 0;

	//Block Space 4
	world.gridBlocks[5].blockSpaces[4].northSpace = 0;
	world.gridBlocks[5].blockSpaces[4].southSpace = 0;
	world.gridBlocks[5].blockSpaces[4].eastSpace  = 0;
	world.gridBlocks[5].blockSpaces[4].westSpace  = 0;

	//Block Space 5
	world.gridBlocks[5].blockSpaces[5].northSpace = 0;
	world.gridBlocks[5].blockSpaces[5].southSpace = 0;
	world.gridBlocks[5].blockSpaces[5].eastSpace  = 0;
	world.gridBlocks[5].blockSpaces[5].westSpace  = 0;

	//Block Space 6
	world.gridBlocks[5].blockSpaces[6].northSpace = 0;
	world.gridBlocks[5].blockSpaces[6].southSpace = 0;
	world.gridBlocks[5].blockSpaces[6].eastSpace  = 0;
	world.gridBlocks[5].blockSpaces[6].westSpace  = 0;

	//Block Space 7
	world.gridBlocks[5].blockSpaces[7].northSpace = 0;
	world.gridBlocks[5].blockSpaces[7].southSpace = 0;
	world.gridBlocks[5].blockSpaces[7].eastSpace  = 0;
	world.gridBlocks[5].blockSpaces[7].westSpace  = 0;
	
//Block G
	//Block Space 0
	world.gridBlocks[6].blockSpaces[0].northSpace = 0;
	world.gridBlocks[6].blockSpaces[0].southSpace = 0;
	world.gridBlocks[6].blockSpaces[0].eastSpace  = 0;
	world.gridBlocks[6].blockSpaces[0].westSpace  = 0;

	//Block Space 1
	world.gridBlocks[6].blockSpaces[1].northSpace = 0;
	world.gridBlocks[6].blockSpaces[1].southSpace = 0;
	world.gridBlocks[6].blockSpaces[1].eastSpace  = 0;
	world.gridBlocks[6].blockSpaces[1].westSpace  = 0;

	//Block Space 2
	world.gridBlocks[6].blockSpaces[2].northSpace = 0;
	world.gridBlocks[6].blockSpaces[2].southSpace = 0;
	world.gridBlocks[6].blockSpaces[2].eastSpace  = 0;
	world.gridBlocks[6].blockSpaces[2].westSpace  = 0;

	//Block Space 3
	world.gridBlocks[6].blockSpaces[3].northSpace = 0;
	world.gridBlocks[6].blockSpaces[3].southSpace = 0;
	world.gridBlocks[6].blockSpaces[3].eastSpace  = 0;
	world.gridBlocks[6].blockSpaces[3].westSpace  = 0;

	//Block Space 4
	world.gridBlocks[6].blockSpaces[4].northSpace = 0;
	world.gridBlocks[6].blockSpaces[4].southSpace = 0;
	world.gridBlocks[6].blockSpaces[4].eastSpace  = 0;
	world.gridBlocks[6].blockSpaces[4].westSpace  = 0;

	//Block Space 5
	world.gridBlocks[6].blockSpaces[5].northSpace = 0;
	world.gridBlocks[6].blockSpaces[5].southSpace = 0;
	world.gridBlocks[6].blockSpaces[5].eastSpace  = 0;
	world.gridBlocks[6].blockSpaces[5].westSpace  = 0;

	//Block Space 6
	world.gridBlocks[6].blockSpaces[6].northSpace = 0;
	world.gridBlocks[6].blockSpaces[6].southSpace = 0;
	world.gridBlocks[6].blockSpaces[6].eastSpace  = 0;
	world.gridBlocks[6].blockSpaces[6].westSpace  = 0;

	//Block Space 7
	world.gridBlocks[6].blockSpaces[7].northSpace = 0;
	world.gridBlocks[6].blockSpaces[7].southSpace = 0;
	world.gridBlocks[6].blockSpaces[7].eastSpace  = 0;
	world.gridBlocks[6].blockSpaces[7].westSpace  = 0;
	
//Block H
	//Block Space 0
	world.gridBlocks[7].blockSpaces[0].northSpace = 0;
	world.gridBlocks[7].blockSpaces[0].southSpace = 0;
	world.gridBlocks[7].blockSpaces[0].eastSpace  = 0;
	world.gridBlocks[7].blockSpaces[0].westSpace  = 0;

	//Block Space 1
	world.gridBlocks[7].blockSpaces[1].northSpace = 0;
	world.gridBlocks[7].blockSpaces[1].southSpace = 0;
	world.gridBlocks[7].blockSpaces[1].eastSpace  = 0;
	world.gridBlocks[7].blockSpaces[1].westSpace  = 0;

	//Block Space 2
	world.gridBlocks[7].blockSpaces[2].northSpace = 0;
	world.gridBlocks[7].blockSpaces[2].southSpace = 0;
	world.gridBlocks[7].blockSpaces[2].eastSpace  = 0;
	world.gridBlocks[7].blockSpaces[2].westSpace  = 0;

	//Block Space 3
	world.gridBlocks[7].blockSpaces[3].northSpace = 0;
	world.gridBlocks[7].blockSpaces[3].southSpace = 0;
	world.gridBlocks[7].blockSpaces[3].eastSpace  = 0;
	world.gridBlocks[7].blockSpaces[3].westSpace  = 0;

	//Block Space 4
	world.gridBlocks[7].blockSpaces[4].northSpace = 0;
	world.gridBlocks[7].blockSpaces[4].southSpace = 0;
	world.gridBlocks[7].blockSpaces[4].eastSpace  = 0;
	world.gridBlocks[7].blockSpaces[4].westSpace  = 0;

	//Block Space 5
	world.gridBlocks[7].blockSpaces[5].northSpace = 0;
	world.gridBlocks[7].blockSpaces[5].southSpace = 0;
	world.gridBlocks[7].blockSpaces[5].eastSpace  = 0;
	world.gridBlocks[7].blockSpaces[5].westSpace  = 0;

	//Block Space 6
	world.gridBlocks[7].blockSpaces[6].northSpace = 0;
	world.gridBlocks[7].blockSpaces[6].southSpace = 0;
	world.gridBlocks[7].blockSpaces[6].eastSpace  = 0;
	world.gridBlocks[7].blockSpaces[6].westSpace  = 0;

	//Block Space 7
	world.gridBlocks[7].blockSpaces[7].northSpace = 0;
	world.gridBlocks[7].blockSpaces[7].southSpace = 0;
	world.gridBlocks[7].blockSpaces[7].eastSpace  = 0;
	world.gridBlocks[7].blockSpaces[7].westSpace  = 0;

//Block I
	//Block Space 0
	world.gridBlocks[8].blockSpaces[0].northSpace = 0;
	world.gridBlocks[8].blockSpaces[0].southSpace = 0;
	world.gridBlocks[8].blockSpaces[0].eastSpace  = 0;
	world.gridBlocks[8].blockSpaces[0].westSpace  = 0;

	//Block Space 1
	world.gridBlocks[8].blockSpaces[1].northSpace = 0;
	world.gridBlocks[8].blockSpaces[1].southSpace = 0;
	world.gridBlocks[8].blockSpaces[1].eastSpace  = 0;
	world.gridBlocks[8].blockSpaces[1].westSpace  = 0;

	//Block Space 2
	world.gridBlocks[8].blockSpaces[2].northSpace = 0;
	world.gridBlocks[8].blockSpaces[2].southSpace = 0;
	world.gridBlocks[8].blockSpaces[2].eastSpace  = 0;
	world.gridBlocks[8].blockSpaces[2].westSpace  = 0;

	//Block Space 3
	world.gridBlocks[8].blockSpaces[3].northSpace = 0;
	world.gridBlocks[8].blockSpaces[3].southSpace = 0;
	world.gridBlocks[8].blockSpaces[3].eastSpace  = 0;
	world.gridBlocks[8].blockSpaces[3].westSpace  = 0;

	//Block Space 4
	world.gridBlocks[8].blockSpaces[4].northSpace = 0;
	world.gridBlocks[8].blockSpaces[4].southSpace = 0;
	world.gridBlocks[8].blockSpaces[4].eastSpace  = 0;
	world.gridBlocks[8].blockSpaces[4].westSpace  = 0;

	//Block Space 5
	world.gridBlocks[8].blockSpaces[5].northSpace = 0;
	world.gridBlocks[8].blockSpaces[5].southSpace = 0;
	world.gridBlocks[8].blockSpaces[5].eastSpace  = 0;
	world.gridBlocks[8].blockSpaces[5].westSpace  = 0;

	//Block Space 6
	world.gridBlocks[8].blockSpaces[6].northSpace = 0;
	world.gridBlocks[8].blockSpaces[6].southSpace = 0;
	world.gridBlocks[8].blockSpaces[6].eastSpace  = 0;
	world.gridBlocks[8].blockSpaces[6].westSpace  = 0;

	//Block Space 7
	world.gridBlocks[8].blockSpaces[7].northSpace = 0;
	world.gridBlocks[8].blockSpaces[7].southSpace = 0;
	world.gridBlocks[8].blockSpaces[7].eastSpace  = 0;
	world.gridBlocks[8].blockSpaces[7].westSpace  = 0;
	
//Block J
	//Block Space 0
	world.gridBlocks[9].blockSpaces[0].northSpace = 0;
	world.gridBlocks[9].blockSpaces[0].southSpace = 0;
	world.gridBlocks[9].blockSpaces[0].eastSpace  = 0;
	world.gridBlocks[9].blockSpaces[0].westSpace  = 0;

	//Block Space 1
	world.gridBlocks[9].blockSpaces[1].northSpace = 0;
	world.gridBlocks[9].blockSpaces[1].southSpace = 0;
	world.gridBlocks[9].blockSpaces[1].eastSpace  = 0;
	world.gridBlocks[9].blockSpaces[1].westSpace  = 0;

	//Block Space 2
	world.gridBlocks[9].blockSpaces[2].northSpace = 0;
	world.gridBlocks[9].blockSpaces[2].southSpace = 0;
	world.gridBlocks[9].blockSpaces[2].eastSpace  = 0;
	world.gridBlocks[9].blockSpaces[2].westSpace  = 0;

	//Block Space 3
	world.gridBlocks[9].blockSpaces[3].northSpace = 0;
	world.gridBlocks[9].blockSpaces[3].southSpace = 0;
	world.gridBlocks[9].blockSpaces[3].eastSpace  = 0;
	world.gridBlocks[9].blockSpaces[3].westSpace  = 0;

	//Block Space 4
	world.gridBlocks[9].blockSpaces[4].northSpace = 0;
	world.gridBlocks[9].blockSpaces[4].southSpace = 0;
	world.gridBlocks[9].blockSpaces[4].eastSpace  = 0;
	world.gridBlocks[9].blockSpaces[4].westSpace  = 0;

	//Block Space 5
	world.gridBlocks[9].blockSpaces[5].northSpace = 0;
	world.gridBlocks[9].blockSpaces[5].southSpace = 0;
	world.gridBlocks[9].blockSpaces[5].eastSpace  = 0;
	world.gridBlocks[9].blockSpaces[5].westSpace  = 0;

	//Block Space 6
	world.gridBlocks[9].blockSpaces[6].northSpace = 0;
	world.gridBlocks[9].blockSpaces[6].southSpace = 0;
	world.gridBlocks[9].blockSpaces[6].eastSpace  = 0;
	world.gridBlocks[9].blockSpaces[6].westSpace  = 0;

	//Block Space 7
	world.gridBlocks[9].blockSpaces[7].northSpace = 0;
	world.gridBlocks[9].blockSpaces[7].southSpace = 0;
	world.gridBlocks[9].blockSpaces[7].eastSpace  = 0;
	world.gridBlocks[9].blockSpaces[7].westSpace  = 0;
	
//Block K
	//Block Space 0
	world.gridBlocks[10].blockSpaces[0].northSpace = 0;
	world.gridBlocks[10].blockSpaces[0].southSpace = 0;
	world.gridBlocks[10].blockSpaces[0].eastSpace  = 0;
	world.gridBlocks[10].blockSpaces[0].westSpace  = 0;

	//Block Space 1
	world.gridBlocks[10].blockSpaces[1].northSpace = 0;
	world.gridBlocks[10].blockSpaces[1].southSpace = 0;
	world.gridBlocks[10].blockSpaces[1].eastSpace  = 0;
	world.gridBlocks[10].blockSpaces[1].westSpace  = 0;

	//Block Space 2
	world.gridBlocks[10].blockSpaces[2].northSpace = 0;
	world.gridBlocks[10].blockSpaces[2].southSpace = 0;
	world.gridBlocks[10].blockSpaces[2].eastSpace  = 0;
	world.gridBlocks[10].blockSpaces[2].westSpace  = 0;

	//Block Space 3
	world.gridBlocks[10].blockSpaces[3].northSpace = 0;
	world.gridBlocks[10].blockSpaces[3].southSpace = 0;
	world.gridBlocks[10].blockSpaces[3].eastSpace  = 0;
	world.gridBlocks[10].blockSpaces[3].westSpace  = 0;

	//Block Space 4
	world.gridBlocks[10].blockSpaces[4].northSpace = 0;
	world.gridBlocks[10].blockSpaces[4].southSpace = 0;
	world.gridBlocks[10].blockSpaces[4].eastSpace  = 0;
	world.gridBlocks[10].blockSpaces[4].westSpace  = 0;

	//Block Space 5
	world.gridBlocks[10].blockSpaces[5].northSpace = 0;
	world.gridBlocks[10].blockSpaces[5].southSpace = 0;
	world.gridBlocks[10].blockSpaces[5].eastSpace  = 0;
	world.gridBlocks[10].blockSpaces[5].westSpace  = 0;

	//Block Space 6
	world.gridBlocks[10].blockSpaces[6].northSpace = 0;
	world.gridBlocks[10].blockSpaces[6].southSpace = 0;
	world.gridBlocks[10].blockSpaces[6].eastSpace  = 0;
	world.gridBlocks[10].blockSpaces[6].westSpace  = 0;

	//Block Space 7
	world.gridBlocks[10].blockSpaces[7].northSpace = 0;
	world.gridBlocks[10].blockSpaces[7].southSpace = 0;
	world.gridBlocks[10].blockSpaces[7].eastSpace  = 0;
	world.gridBlocks[10].blockSpaces[7].westSpace  = 0;

//Block L
	//Block Space 0
	world.gridBlocks[11].blockSpaces[0].northSpace = 0;
	world.gridBlocks[11].blockSpaces[0].southSpace = 0;
	world.gridBlocks[11].blockSpaces[0].eastSpace  = 0;
	world.gridBlocks[11].blockSpaces[0].westSpace  = 0;

	//Block Space 1
	world.gridBlocks[11].blockSpaces[1].northSpace = 0;
	world.gridBlocks[11].blockSpaces[1].southSpace = 0;
	world.gridBlocks[11].blockSpaces[1].eastSpace  = 0;
	world.gridBlocks[11].blockSpaces[1].westSpace  = 0;

	//Block Space 2
	world.gridBlocks[11].blockSpaces[2].northSpace = 0;
	world.gridBlocks[11].blockSpaces[2].southSpace = 0;
	world.gridBlocks[11].blockSpaces[2].eastSpace  = 0;
	world.gridBlocks[11].blockSpaces[2].westSpace  = 0;

	//Block Space 3
	world.gridBlocks[11].blockSpaces[3].northSpace = 0;
	world.gridBlocks[11].blockSpaces[3].southSpace = 0;
	world.gridBlocks[11].blockSpaces[3].eastSpace  = 0;
	world.gridBlocks[11].blockSpaces[3].westSpace  = 0;

	//Block Space 4
	world.gridBlocks[11].blockSpaces[4].northSpace = 0;
	world.gridBlocks[11].blockSpaces[4].southSpace = 0;
	world.gridBlocks[11].blockSpaces[4].eastSpace  = 0;
	world.gridBlocks[11].blockSpaces[4].westSpace  = 0;

	//Block Space 5
	world.gridBlocks[11].blockSpaces[5].northSpace = 0;
	world.gridBlocks[11].blockSpaces[5].southSpace = 0;
	world.gridBlocks[11].blockSpaces[5].eastSpace  = 0;
	world.gridBlocks[11].blockSpaces[5].westSpace  = 0;

	//Block Space 6
	world.gridBlocks[11].blockSpaces[6].northSpace = 0;
	world.gridBlocks[11].blockSpaces[6].southSpace = 0;
	world.gridBlocks[11].blockSpaces[6].eastSpace  = 0;
	world.gridBlocks[11].blockSpaces[6].westSpace  = 0;

	//Block Space 7
	world.gridBlocks[11].blockSpaces[7].northSpace = 0;
	world.gridBlocks[11].blockSpaces[7].southSpace = 0;
	world.gridBlocks[11].blockSpaces[7].eastSpace  = 0;
	world.gridBlocks[11].blockSpaces[7].westSpace  = 0;
	
//Block M
	//Block Space 0
	world.gridBlocks[12].blockSpaces[0].northSpace = 0;
	world.gridBlocks[12].blockSpaces[0].southSpace = 0;
	world.gridBlocks[12].blockSpaces[0].eastSpace  = 0;
	world.gridBlocks[12].blockSpaces[0].westSpace  = 0;

	//Block Space 1
	world.gridBlocks[12].blockSpaces[1].northSpace = 0;
	world.gridBlocks[12].blockSpaces[1].southSpace = 0;
	world.gridBlocks[12].blockSpaces[1].eastSpace  = 0;
	world.gridBlocks[12].blockSpaces[1].westSpace  = 0;

	//Block Space 2
	world.gridBlocks[12].blockSpaces[2].northSpace = 0;
	world.gridBlocks[12].blockSpaces[2].southSpace = 0;
	world.gridBlocks[12].blockSpaces[2].eastSpace  = 0;
	world.gridBlocks[12].blockSpaces[2].westSpace  = 0;

	//Block Space 3
	world.gridBlocks[12].blockSpaces[3].northSpace = 0;
	world.gridBlocks[12].blockSpaces[3].southSpace = 0;
	world.gridBlocks[12].blockSpaces[3].eastSpace  = 0;
	world.gridBlocks[12].blockSpaces[3].westSpace  = 0;

	//Block Space 4
	world.gridBlocks[12].blockSpaces[4].northSpace = 0;
	world.gridBlocks[12].blockSpaces[4].southSpace = 0;
	world.gridBlocks[12].blockSpaces[4].eastSpace  = 0;
	world.gridBlocks[12].blockSpaces[4].westSpace  = 0;

	//Block Space 5
	world.gridBlocks[12].blockSpaces[5].northSpace = 0;
	world.gridBlocks[12].blockSpaces[5].southSpace = 0;
	world.gridBlocks[12].blockSpaces[5].eastSpace  = 0;
	world.gridBlocks[12].blockSpaces[5].westSpace  = 0;

	//Block Space 6
	world.gridBlocks[12].blockSpaces[6].northSpace = 0;
	world.gridBlocks[12].blockSpaces[6].southSpace = 0;
	world.gridBlocks[12].blockSpaces[6].eastSpace  = 0;
	world.gridBlocks[12].blockSpaces[6].westSpace  = 0;

	//Block Space 7
	world.gridBlocks[12].blockSpaces[7].northSpace = 0;
	world.gridBlocks[12].blockSpaces[7].southSpace = 0;
	world.gridBlocks[12].blockSpaces[7].eastSpace  = 0;
	world.gridBlocks[12].blockSpaces[7].westSpace  = 0;

//Block N
	//Block Space 0
	world.gridBlocks[13].blockSpaces[0].northSpace = 0;
	world.gridBlocks[13].blockSpaces[0].southSpace = 0;
	world.gridBlocks[13].blockSpaces[0].eastSpace  = 0;
	world.gridBlocks[13].blockSpaces[0].westSpace  = 0;

	//Block Space 1
	world.gridBlocks[13].blockSpaces[1].northSpace = 0;
	world.gridBlocks[13].blockSpaces[1].southSpace = 0;
	world.gridBlocks[13].blockSpaces[1].eastSpace  = 0;
	world.gridBlocks[13].blockSpaces[1].westSpace  = 0;

	//Block Space 2
	world.gridBlocks[13].blockSpaces[2].northSpace = 0;
	world.gridBlocks[13].blockSpaces[2].southSpace = 0;
	world.gridBlocks[13].blockSpaces[2].eastSpace  = 0;
	world.gridBlocks[13].blockSpaces[2].westSpace  = 0;

	//Block Space 3
	world.gridBlocks[13].blockSpaces[3].northSpace = 0;
	world.gridBlocks[13].blockSpaces[3].southSpace = 0;
	world.gridBlocks[13].blockSpaces[3].eastSpace  = 0;
	world.gridBlocks[13].blockSpaces[3].westSpace  = 0;

	//Block Space 4
	world.gridBlocks[13].blockSpaces[4].northSpace = 0;
	world.gridBlocks[13].blockSpaces[4].southSpace = 0;
	world.gridBlocks[13].blockSpaces[4].eastSpace  = 0;
	world.gridBlocks[13].blockSpaces[4].westSpace  = 0;

	//Block Space 5
	world.gridBlocks[13].blockSpaces[5].northSpace = 0;
	world.gridBlocks[13].blockSpaces[5].southSpace = 0;
	world.gridBlocks[13].blockSpaces[5].eastSpace  = 0;
	world.gridBlocks[13].blockSpaces[5].westSpace  = 0;

	//Block Space 6
	world.gridBlocks[13].blockSpaces[6].northSpace = 0;
	world.gridBlocks[13].blockSpaces[6].southSpace = 0;
	world.gridBlocks[13].blockSpaces[6].eastSpace  = 0;
	world.gridBlocks[13].blockSpaces[6].westSpace  = 0;

	//Block Space 7
	world.gridBlocks[13].blockSpaces[7].northSpace = 0;
	world.gridBlocks[13].blockSpaces[7].southSpace = 0;
	world.gridBlocks[13].blockSpaces[7].eastSpace  = 0;
	world.gridBlocks[13].blockSpaces[7].westSpace  = 0;

//Block O
	//Block Space 0
	world.gridBlocks[14].blockSpaces[0].northSpace = 0;
	world.gridBlocks[14].blockSpaces[0].southSpace = 0;
	world.gridBlocks[14].blockSpaces[0].eastSpace  = 0;
	world.gridBlocks[14].blockSpaces[0].westSpace  = 0;

	//Block Space 1
	world.gridBlocks[14].blockSpaces[1].northSpace = 0;
	world.gridBlocks[14].blockSpaces[1].southSpace = 0;
	world.gridBlocks[14].blockSpaces[1].eastSpace  = 0;
	world.gridBlocks[14].blockSpaces[1].westSpace  = 0;

	//Block Space 2
	world.gridBlocks[14].blockSpaces[2].northSpace = 0;
	world.gridBlocks[14].blockSpaces[2].southSpace = 0;
	world.gridBlocks[14].blockSpaces[2].eastSpace  = 0;
	world.gridBlocks[14].blockSpaces[2].westSpace  = 0;

	//Block Space 3
	world.gridBlocks[14].blockSpaces[3].northSpace = 0;
	world.gridBlocks[14].blockSpaces[3].southSpace = 0;
	world.gridBlocks[14].blockSpaces[3].eastSpace  = 0;
	world.gridBlocks[14].blockSpaces[3].westSpace  = 0;

	//Block Space 4
	world.gridBlocks[14].blockSpaces[4].northSpace = 0;
	world.gridBlocks[14].blockSpaces[4].southSpace = 0;
	world.gridBlocks[14].blockSpaces[4].eastSpace  = 0;
	world.gridBlocks[14].blockSpaces[4].westSpace  = 0;

	//Block Space 5
	world.gridBlocks[14].blockSpaces[5].northSpace = 0;
	world.gridBlocks[14].blockSpaces[5].southSpace = 0;
	world.gridBlocks[14].blockSpaces[5].eastSpace  = 0;
	world.gridBlocks[14].blockSpaces[5].westSpace  = 0;

	//Block Space 6
	world.gridBlocks[14].blockSpaces[6].northSpace = 0;
	world.gridBlocks[14].blockSpaces[6].southSpace = 0;
	world.gridBlocks[14].blockSpaces[6].eastSpace  = 0;
	world.gridBlocks[14].blockSpaces[6].westSpace  = 0;

	//Block Space 7
	world.gridBlocks[14].blockSpaces[7].northSpace = 0;
	world.gridBlocks[14].blockSpaces[7].southSpace = 0;
	world.gridBlocks[14].blockSpaces[7].eastSpace  = 0;
	world.gridBlocks[14].blockSpaces[7].westSpace  = 0;

//Block P
	//Block Space 0
	world.gridBlocks[15].blockSpaces[0].northSpace = 0;
	world.gridBlocks[15].blockSpaces[0].southSpace = 0;
	world.gridBlocks[15].blockSpaces[0].eastSpace  = 0;
	world.gridBlocks[15].blockSpaces[0].westSpace  = 0;

	//Block Space 1
	world.gridBlocks[15].blockSpaces[1].northSpace = 0;
	world.gridBlocks[15].blockSpaces[1].southSpace = 0;
	world.gridBlocks[15].blockSpaces[1].eastSpace  = 0;
	world.gridBlocks[15].blockSpaces[1].westSpace  = 0;

	//Block Space 2
	world.gridBlocks[15].blockSpaces[2].northSpace = 0;
	world.gridBlocks[15].blockSpaces[2].southSpace = 0;
	world.gridBlocks[15].blockSpaces[2].eastSpace  = 0;
	world.gridBlocks[15].blockSpaces[2].westSpace  = 0;

	//Block Space 3
	world.gridBlocks[15].blockSpaces[3].northSpace = 0;
	world.gridBlocks[15].blockSpaces[3].southSpace = 0;
	world.gridBlocks[15].blockSpaces[3].eastSpace  = 0;
	world.gridBlocks[15].blockSpaces[3].westSpace  = 0;

	//Block Space 4
	world.gridBlocks[15].blockSpaces[4].northSpace = 0;
	world.gridBlocks[15].blockSpaces[4].southSpace = 0;
	world.gridBlocks[15].blockSpaces[4].eastSpace  = 0;
	world.gridBlocks[15].blockSpaces[4].westSpace  = 0;

	//Block Space 5
	world.gridBlocks[15].blockSpaces[5].northSpace = 0;
	world.gridBlocks[15].blockSpaces[5].southSpace = 0;
	world.gridBlocks[15].blockSpaces[5].eastSpace  = 0;
	world.gridBlocks[15].blockSpaces[5].westSpace  = 0;

	//Block Space 6
	world.gridBlocks[15].blockSpaces[6].northSpace = 0;
	world.gridBlocks[15].blockSpaces[6].southSpace = 0;
	world.gridBlocks[15].blockSpaces[6].eastSpace  = 0;
	world.gridBlocks[15].blockSpaces[6].westSpace  = 0;

	//Block Space 7
	world.gridBlocks[15].blockSpaces[7].northSpace = 0;
	world.gridBlocks[15].blockSpaces[7].southSpace = 0;
	world.gridBlocks[15].blockSpaces[7].eastSpace  = 0;
	world.gridBlocks[15].blockSpaces[7].westSpace  = 0;

//Block Q
	//Block Space 0
	world.gridBlocks[16].blockSpaces[0].northSpace = 0;
	world.gridBlocks[16].blockSpaces[0].southSpace = 0;
	world.gridBlocks[16].blockSpaces[0].eastSpace  = 0;
	world.gridBlocks[16].blockSpaces[0].westSpace  = 0;

	//Block Space 1
	world.gridBlocks[16].blockSpaces[1].northSpace = 0;
	world.gridBlocks[16].blockSpaces[1].southSpace = 0;
	world.gridBlocks[16].blockSpaces[1].eastSpace  = 0;
	world.gridBlocks[16].blockSpaces[1].westSpace  = 0;

	//Block Space 2
	world.gridBlocks[16].blockSpaces[2].northSpace = 0;
	world.gridBlocks[16].blockSpaces[2].southSpace = 0;
	world.gridBlocks[16].blockSpaces[2].eastSpace  = 0;
	world.gridBlocks[16].blockSpaces[2].westSpace  = 0;

	//Block Space 3
	world.gridBlocks[16].blockSpaces[3].northSpace = 0;
	world.gridBlocks[16].blockSpaces[3].southSpace = 0;
	world.gridBlocks[16].blockSpaces[3].eastSpace  = 0;
	world.gridBlocks[16].blockSpaces[3].westSpace  = 0;

	//Block Space 4
	world.gridBlocks[16].blockSpaces[4].northSpace = 0;
	world.gridBlocks[16].blockSpaces[4].southSpace = 0;
	world.gridBlocks[16].blockSpaces[4].eastSpace  = 0;
	world.gridBlocks[16].blockSpaces[4].westSpace  = 0;

	//Block Space 5
	world.gridBlocks[16].blockSpaces[5].northSpace = 0;
	world.gridBlocks[16].blockSpaces[5].southSpace = 0;
	world.gridBlocks[16].blockSpaces[5].eastSpace  = 0;
	world.gridBlocks[16].blockSpaces[5].westSpace  = 0;

	//Block Space 6
	world.gridBlocks[16].blockSpaces[6].northSpace = 0;
	world.gridBlocks[16].blockSpaces[6].southSpace = 0;
	world.gridBlocks[16].blockSpaces[6].eastSpace  = 0;
	world.gridBlocks[16].blockSpaces[6].westSpace  = 0;

	//Block Space 7
	world.gridBlocks[16].blockSpaces[7].northSpace = 0;
	world.gridBlocks[16].blockSpaces[7].southSpace = 0;
	world.gridBlocks[16].blockSpaces[7].eastSpace  = 0;
	world.gridBlocks[16].blockSpaces[7].westSpace  = 0;

//Block R
	//Block Space 0
	world.gridBlocks[17].blockSpaces[0].northSpace = 0;
	world.gridBlocks[17].blockSpaces[0].southSpace = 0;
	world.gridBlocks[17].blockSpaces[0].eastSpace  = 0;
	world.gridBlocks[17].blockSpaces[0].westSpace  = 0;

	//Block Space 1
	world.gridBlocks[17].blockSpaces[1].northSpace = 0;
	world.gridBlocks[17].blockSpaces[1].southSpace = 0;
	world.gridBlocks[17].blockSpaces[1].eastSpace  = 0;
	world.gridBlocks[17].blockSpaces[1].westSpace  = 0;

	//Block Space 2
	world.gridBlocks[17].blockSpaces[2].northSpace = 0;
	world.gridBlocks[17].blockSpaces[2].southSpace = 0;
	world.gridBlocks[17].blockSpaces[2].eastSpace  = 0;
	world.gridBlocks[17].blockSpaces[2].westSpace  = 0;

	//Block Space 3
	world.gridBlocks[17].blockSpaces[3].northSpace = 0;
	world.gridBlocks[17].blockSpaces[3].southSpace = 0;
	world.gridBlocks[17].blockSpaces[3].eastSpace  = 0;
	world.gridBlocks[17].blockSpaces[3].westSpace  = 0;

	//Block Space 4
	world.gridBlocks[17].blockSpaces[4].northSpace = 0;
	world.gridBlocks[17].blockSpaces[4].southSpace = 0;
	world.gridBlocks[17].blockSpaces[4].eastSpace  = 0;
	world.gridBlocks[17].blockSpaces[4].westSpace  = 0;

	//Block Space 5
	world.gridBlocks[17].blockSpaces[5].northSpace = 0;
	world.gridBlocks[17].blockSpaces[5].southSpace = 0;
	world.gridBlocks[17].blockSpaces[5].eastSpace  = 0;
	world.gridBlocks[17].blockSpaces[5].westSpace  = 0;

	//Block Space 6
	world.gridBlocks[17].blockSpaces[6].northSpace = 0;
	world.gridBlocks[17].blockSpaces[6].southSpace = 0;
	world.gridBlocks[17].blockSpaces[6].eastSpace  = 0;
	world.gridBlocks[17].blockSpaces[6].westSpace  = 0;

	//Block Space 7
	world.gridBlocks[17].blockSpaces[7].northSpace = 0;
	world.gridBlocks[17].blockSpaces[7].southSpace = 0;
	world.gridBlocks[17].blockSpaces[7].eastSpace  = 0;
	world.gridBlocks[17].blockSpaces[7].westSpace  = 0;

//Block S
	//Block Space 0
	world.gridBlocks[18].blockSpaces[0].northSpace = 0;
	world.gridBlocks[18].blockSpaces[0].southSpace = 0;
	world.gridBlocks[18].blockSpaces[0].eastSpace  = 0;
	world.gridBlocks[18].blockSpaces[0].westSpace  = 0;

	//Block Space 1
	world.gridBlocks[18].blockSpaces[1].northSpace = 0;
	world.gridBlocks[18].blockSpaces[1].southSpace = 0;
	world.gridBlocks[18].blockSpaces[1].eastSpace  = 0;
	world.gridBlocks[18].blockSpaces[1].westSpace  = 0;

	//Block Space 2
	world.gridBlocks[18].blockSpaces[2].northSpace = 0;
	world.gridBlocks[18].blockSpaces[2].southSpace = 0;
	world.gridBlocks[18].blockSpaces[2].eastSpace  = 0;
	world.gridBlocks[18].blockSpaces[2].westSpace  = 0;

	//Block Space 3
	world.gridBlocks[18].blockSpaces[3].northSpace = 0;
	world.gridBlocks[18].blockSpaces[3].southSpace = 0;
	world.gridBlocks[18].blockSpaces[3].eastSpace  = 0;
	world.gridBlocks[18].blockSpaces[3].westSpace  = 0;

	//Block Space 4
	world.gridBlocks[18].blockSpaces[4].northSpace = 0;
	world.gridBlocks[18].blockSpaces[4].southSpace = 0;
	world.gridBlocks[18].blockSpaces[4].eastSpace  = 0;
	world.gridBlocks[18].blockSpaces[4].westSpace  = 0;

	//Block Space 5
	world.gridBlocks[18].blockSpaces[5].northSpace = 0;
	world.gridBlocks[18].blockSpaces[5].southSpace = 0;
	world.gridBlocks[18].blockSpaces[5].eastSpace  = 0;
	world.gridBlocks[18].blockSpaces[5].westSpace  = 0;

	//Block Space 6
	world.gridBlocks[18].blockSpaces[6].northSpace = 0;
	world.gridBlocks[18].blockSpaces[6].southSpace = 0;
	world.gridBlocks[18].blockSpaces[6].eastSpace  = 0;
	world.gridBlocks[18].blockSpaces[6].westSpace  = 0;

	//Block Space 7
	world.gridBlocks[18].blockSpaces[7].northSpace = 0;
	world.gridBlocks[18].blockSpaces[7].southSpace = 0;
	world.gridBlocks[18].blockSpaces[7].eastSpace  = 0;
	world.gridBlocks[18].blockSpaces[7].westSpace  = 0;

//Block T
	//Block Space 0
	world.gridBlocks[19].blockSpaces[0].northSpace = 0;
	world.gridBlocks[19].blockSpaces[0].southSpace = 0;
	world.gridBlocks[19].blockSpaces[0].eastSpace  = 0;
	world.gridBlocks[19].blockSpaces[0].westSpace  = 0;

	//Block Space 1
	world.gridBlocks[19].blockSpaces[1].northSpace = 0;
	world.gridBlocks[19].blockSpaces[1].southSpace = 0;
	world.gridBlocks[19].blockSpaces[1].eastSpace  = 0;
	world.gridBlocks[19].blockSpaces[1].westSpace  = 0;

	//Block Space 2
	world.gridBlocks[19].blockSpaces[2].northSpace = 0;
	world.gridBlocks[19].blockSpaces[2].southSpace = 0;
	world.gridBlocks[19].blockSpaces[2].eastSpace  = 0;
	world.gridBlocks[19].blockSpaces[2].westSpace  = 0;

	//Block Space 3
	world.gridBlocks[19].blockSpaces[3].northSpace = 0;
	world.gridBlocks[19].blockSpaces[3].southSpace = 0;
	world.gridBlocks[19].blockSpaces[3].eastSpace  = 0;
	world.gridBlocks[19].blockSpaces[3].westSpace  = 0;

	//Block Space 4
	world.gridBlocks[19].blockSpaces[4].northSpace = 0;
	world.gridBlocks[19].blockSpaces[4].southSpace = 0;
	world.gridBlocks[19].blockSpaces[4].eastSpace  = 0;
	world.gridBlocks[19].blockSpaces[4].westSpace  = 0;

	//Block Space 5
	world.gridBlocks[19].blockSpaces[5].northSpace = 0;
	world.gridBlocks[19].blockSpaces[5].southSpace = 0;
	world.gridBlocks[19].blockSpaces[5].eastSpace  = 0;
	world.gridBlocks[19].blockSpaces[5].westSpace  = 0;

	//Block Space 6
	world.gridBlocks[19].blockSpaces[6].northSpace = 0;
	world.gridBlocks[19].blockSpaces[6].southSpace = 0;
	world.gridBlocks[19].blockSpaces[6].eastSpace  = 0;
	world.gridBlocks[19].blockSpaces[6].westSpace  = 0;

	//Block Space 7
	world.gridBlocks[19].blockSpaces[7].northSpace = 0;
	world.gridBlocks[19].blockSpaces[7].southSpace = 0;
	world.gridBlocks[19].blockSpaces[7].eastSpace  = 0;
	world.gridBlocks[19].blockSpaces[7].westSpace  = 0;

//Block U
	//Block Space 0
	world.gridBlocks[20].blockSpaces[0].northSpace = 0;
	world.gridBlocks[20].blockSpaces[0].southSpace = 0;
	world.gridBlocks[20].blockSpaces[0].eastSpace  = 0;
	world.gridBlocks[20].blockSpaces[0].westSpace  = 0;

	//Block Space 1
	world.gridBlocks[20].blockSpaces[1].northSpace = 0;
	world.gridBlocks[20].blockSpaces[1].southSpace = 0;
	world.gridBlocks[20].blockSpaces[1].eastSpace  = 0;
	world.gridBlocks[20].blockSpaces[1].westSpace  = 0;

	//Block Space 2
	world.gridBlocks[20].blockSpaces[2].northSpace = 0;
	world.gridBlocks[20].blockSpaces[2].southSpace = 0;
	world.gridBlocks[20].blockSpaces[2].eastSpace  = 0;
	world.gridBlocks[20].blockSpaces[2].westSpace  = 0;

	//Block Space 3
	world.gridBlocks[20].blockSpaces[3].northSpace = 0;
	world.gridBlocks[20].blockSpaces[3].southSpace = 0;
	world.gridBlocks[20].blockSpaces[3].eastSpace  = 0;
	world.gridBlocks[20].blockSpaces[3].westSpace  = 0;

	//Block Space 4
	world.gridBlocks[20].blockSpaces[4].northSpace = 0;
	world.gridBlocks[20].blockSpaces[4].southSpace = 0;
	world.gridBlocks[20].blockSpaces[4].eastSpace  = 0;
	world.gridBlocks[20].blockSpaces[4].westSpace  = 0;

	//Block Space 5
	world.gridBlocks[20].blockSpaces[5].northSpace = 0;
	world.gridBlocks[20].blockSpaces[5].southSpace = 0;
	world.gridBlocks[20].blockSpaces[5].eastSpace  = 0;
	world.gridBlocks[20].blockSpaces[5].westSpace  = 0;

	//Block Space 6
	world.gridBlocks[20].blockSpaces[6].northSpace = 0;
	world.gridBlocks[20].blockSpaces[6].southSpace = 0;
	world.gridBlocks[20].blockSpaces[6].eastSpace  = 0;
	world.gridBlocks[20].blockSpaces[6].westSpace  = 0;

	//Block Space 7
	world.gridBlocks[20].blockSpaces[7].northSpace = 0;
	world.gridBlocks[20].blockSpaces[7].southSpace = 0;
	world.gridBlocks[20].blockSpaces[7].eastSpace  = 0;
	world.gridBlocks[20].blockSpaces[7].westSpace  = 0;

//Block V
	//Block Space 0
	world.gridBlocks[21].blockSpaces[0].northSpace = 0;
	world.gridBlocks[21].blockSpaces[0].southSpace = 0;
	world.gridBlocks[21].blockSpaces[0].eastSpace  = 0;
	world.gridBlocks[21].blockSpaces[0].westSpace  = 0;

	//Block Space 1
	world.gridBlocks[21].blockSpaces[1].northSpace = 0;
	world.gridBlocks[21].blockSpaces[1].southSpace = 0;
	world.gridBlocks[21].blockSpaces[1].eastSpace  = 0;
	world.gridBlocks[21].blockSpaces[1].westSpace  = 0;

	//Block Space 2
	world.gridBlocks[21].blockSpaces[2].northSpace = 0;
	world.gridBlocks[21].blockSpaces[2].southSpace = 0;
	world.gridBlocks[21].blockSpaces[2].eastSpace  = 0;
	world.gridBlocks[21].blockSpaces[2].westSpace  = 0;

	//Block Space 3
	world.gridBlocks[21].blockSpaces[3].northSpace = 0;
	world.gridBlocks[21].blockSpaces[3].southSpace = 0;
	world.gridBlocks[21].blockSpaces[3].eastSpace  = 0;
	world.gridBlocks[21].blockSpaces[3].westSpace  = 0;

	//Block Space 4
	world.gridBlocks[21].blockSpaces[4].northSpace = 0;
	world.gridBlocks[21].blockSpaces[4].southSpace = 0;
	world.gridBlocks[21].blockSpaces[4].eastSpace  = 0;
	world.gridBlocks[21].blockSpaces[4].westSpace  = 0;

	//Block Space 5
	world.gridBlocks[21].blockSpaces[5].northSpace = 0;
	world.gridBlocks[21].blockSpaces[5].southSpace = 0;
	world.gridBlocks[21].blockSpaces[5].eastSpace  = 0;
	world.gridBlocks[21].blockSpaces[5].westSpace  = 0;

	//Block Space 6
	world.gridBlocks[21].blockSpaces[6].northSpace = 0;
	world.gridBlocks[21].blockSpaces[6].southSpace = 0;
	world.gridBlocks[21].blockSpaces[6].eastSpace  = 0;
	world.gridBlocks[21].blockSpaces[6].westSpace  = 0;

	//Block Space 7
	world.gridBlocks[21].blockSpaces[7].northSpace = 0;
	world.gridBlocks[21].blockSpaces[7].southSpace = 0;
	world.gridBlocks[21].blockSpaces[7].eastSpace  = 0;
	world.gridBlocks[21].blockSpaces[7].westSpace  = 0;

//Block W
	//Block Space 0
	world.gridBlocks[22].blockSpaces[0].northSpace = 0;
	world.gridBlocks[22].blockSpaces[0].southSpace = 0;
	world.gridBlocks[22].blockSpaces[0].eastSpace  = 0;
	world.gridBlocks[22].blockSpaces[0].westSpace  = 0;

	//Block Space 1
	world.gridBlocks[22].blockSpaces[1].northSpace = 0;
	world.gridBlocks[22].blockSpaces[1].southSpace = 0;
	world.gridBlocks[22].blockSpaces[1].eastSpace  = 0;
	world.gridBlocks[22].blockSpaces[1].westSpace  = 0;

	//Block Space 2
	world.gridBlocks[22].blockSpaces[2].northSpace = 0;
	world.gridBlocks[22].blockSpaces[2].southSpace = 0;
	world.gridBlocks[22].blockSpaces[2].eastSpace  = 0;
	world.gridBlocks[22].blockSpaces[2].westSpace  = 0;

	//Block Space 3
	world.gridBlocks[22].blockSpaces[3].northSpace = 0;
	world.gridBlocks[22].blockSpaces[3].southSpace = 0;
	world.gridBlocks[22].blockSpaces[3].eastSpace  = 0;
	world.gridBlocks[22].blockSpaces[3].westSpace  = 0;

	//Block Space 4
	world.gridBlocks[22].blockSpaces[4].northSpace = 0;
	world.gridBlocks[22].blockSpaces[4].southSpace = 0;
	world.gridBlocks[22].blockSpaces[4].eastSpace  = 0;
	world.gridBlocks[22].blockSpaces[4].westSpace  = 0;

	//Block Space 5
	world.gridBlocks[22].blockSpaces[5].northSpace = 0;
	world.gridBlocks[22].blockSpaces[5].southSpace = 0;
	world.gridBlocks[22].blockSpaces[5].eastSpace  = 0;
	world.gridBlocks[22].blockSpaces[5].westSpace  = 0;

	//Block Space 6
	world.gridBlocks[22].blockSpaces[6].northSpace = 0;
	world.gridBlocks[22].blockSpaces[6].southSpace = 0;
	world.gridBlocks[22].blockSpaces[6].eastSpace  = 0;
	world.gridBlocks[22].blockSpaces[6].westSpace  = 0;

	//Block Space 7
	world.gridBlocks[22].blockSpaces[7].northSpace = 0;
	world.gridBlocks[22].blockSpaces[7].southSpace = 0;
	world.gridBlocks[22].blockSpaces[7].eastSpace  = 0;
	world.gridBlocks[22].blockSpaces[7].westSpace  = 0;

//Block X
	//Block Space 0
	world.gridBlocks[23].blockSpaces[0].northSpace = 0;
	world.gridBlocks[23].blockSpaces[0].southSpace = 0;
	world.gridBlocks[23].blockSpaces[0].eastSpace  = 0;
	world.gridBlocks[23].blockSpaces[0].westSpace  = 0;

	//Block Space 1
	world.gridBlocks[23].blockSpaces[1].northSpace = 0;
	world.gridBlocks[23].blockSpaces[1].southSpace = 0;
	world.gridBlocks[23].blockSpaces[1].eastSpace  = 0;
	world.gridBlocks[23].blockSpaces[1].westSpace  = 0;

	//Block Space 2
	world.gridBlocks[23].blockSpaces[2].northSpace = 0;
	world.gridBlocks[23].blockSpaces[2].southSpace = 0;
	world.gridBlocks[23].blockSpaces[2].eastSpace  = 0;
	world.gridBlocks[23].blockSpaces[2].westSpace  = 0;

	//Block Space 3
	world.gridBlocks[23].blockSpaces[3].northSpace = 0;
	world.gridBlocks[23].blockSpaces[3].southSpace = 0;
	world.gridBlocks[23].blockSpaces[3].eastSpace  = 0;
	world.gridBlocks[23].blockSpaces[3].westSpace  = 0;

	//Block Space 4
	world.gridBlocks[23].blockSpaces[4].northSpace = 0;
	world.gridBlocks[23].blockSpaces[4].southSpace = 0;
	world.gridBlocks[23].blockSpaces[4].eastSpace  = 0;
	world.gridBlocks[23].blockSpaces[4].westSpace  = 0;

	//Block Space 5
	world.gridBlocks[23].blockSpaces[5].northSpace = 0;
	world.gridBlocks[23].blockSpaces[5].southSpace = 0;
	world.gridBlocks[23].blockSpaces[5].eastSpace  = 0;
	world.gridBlocks[23].blockSpaces[5].westSpace  = 0;

	//Block Space 6
	world.gridBlocks[23].blockSpaces[6].northSpace = 0;
	world.gridBlocks[23].blockSpaces[6].southSpace = 0;
	world.gridBlocks[23].blockSpaces[6].eastSpace  = 0;
	world.gridBlocks[23].blockSpaces[6].westSpace  = 0;

	//Block Space 7
	world.gridBlocks[23].blockSpaces[7].northSpace = 0;
	world.gridBlocks[23].blockSpaces[7].southSpace = 0;
	world.gridBlocks[23].blockSpaces[7].eastSpace  = 0;
	world.gridBlocks[23].blockSpaces[7].westSpace  = 0;

//Block Y
	//Block Space 0
	world.gridBlocks[24].blockSpaces[0].northSpace = 0;
	world.gridBlocks[24].blockSpaces[0].southSpace = 0;
	world.gridBlocks[24].blockSpaces[0].eastSpace  = 0;
	world.gridBlocks[24].blockSpaces[0].westSpace  = 0;

	//Block Space 1
	world.gridBlocks[24].blockSpaces[1].northSpace = 0;
	world.gridBlocks[24].blockSpaces[1].southSpace = 0;
	world.gridBlocks[24].blockSpaces[1].eastSpace  = 0;
	world.gridBlocks[24].blockSpaces[1].westSpace  = 0;

	//Block Space 2
	world.gridBlocks[24].blockSpaces[2].northSpace = 0;
	world.gridBlocks[24].blockSpaces[2].southSpace = 0;
	world.gridBlocks[24].blockSpaces[2].eastSpace  = 0;
	world.gridBlocks[24].blockSpaces[2].westSpace  = 0;

	//Block Space 3
	world.gridBlocks[24].blockSpaces[3].northSpace = 0;
	world.gridBlocks[24].blockSpaces[3].southSpace = 0;
	world.gridBlocks[24].blockSpaces[3].eastSpace  = 0;
	world.gridBlocks[24].blockSpaces[3].westSpace  = 0;

	//Block Space 4
	world.gridBlocks[24].blockSpaces[4].northSpace = 0;
	world.gridBlocks[24].blockSpaces[4].southSpace = 0;
	world.gridBlocks[24].blockSpaces[4].eastSpace  = 0;
	world.gridBlocks[24].blockSpaces[4].westSpace  = 0;

	//Block Space 5
	world.gridBlocks[24].blockSpaces[5].northSpace = 0;
	world.gridBlocks[24].blockSpaces[5].southSpace = 0;
	world.gridBlocks[24].blockSpaces[5].eastSpace  = 0;
	world.gridBlocks[24].blockSpaces[5].westSpace  = 0;

	//Block Space 6
	world.gridBlocks[24].blockSpaces[6].northSpace = 0;
	world.gridBlocks[24].blockSpaces[6].southSpace = 0;
	world.gridBlocks[24].blockSpaces[6].eastSpace  = 0;
	world.gridBlocks[24].blockSpaces[6].westSpace  = 0;

	//Block Space 7
	world.gridBlocks[24].blockSpaces[7].northSpace = 0;
	world.gridBlocks[24].blockSpaces[7].southSpace = 0;
	world.gridBlocks[24].blockSpaces[7].eastSpace  = 0;
	world.gridBlocks[24].blockSpaces[7].westSpace  = 0;
	
}