
function PopulateBlockSpaceReferences(world)
{

	var gIndex = 0;

	for (var i = 0; i <  world.gridBlocks.length; i++) 
	{
		for (var j = 0; j < world.gridBlocks[i].blockSpaces.length; j++)
		{
			world.gridBlocks[i].blockSpaces[j].globalIndex = gIndex;
			gIndex++;
		}
	}

//Block A
	//Block Space 0
	world.gridBlocks[0].blockSpaces[0].northSpace = -1;
	world.gridBlocks[0].blockSpaces[0].southSpace = 3;
	world.gridBlocks[0].blockSpaces[0].eastSpace  = 1;
	world.gridBlocks[0].blockSpaces[0].westSpace  = -1;

	//Block Space 1
	world.gridBlocks[0].blockSpaces[1].northSpace = -1;
	world.gridBlocks[0].blockSpaces[1].southSpace = 4;
	world.gridBlocks[0].blockSpaces[1].eastSpace  = 2;
	world.gridBlocks[0].blockSpaces[1].westSpace  = 0;

	//Block Space 2
	world.gridBlocks[0].blockSpaces[2].northSpace = -1;
	world.gridBlocks[0].blockSpaces[2].southSpace = 5;
	world.gridBlocks[0].blockSpaces[2].eastSpace  = 9;
	world.gridBlocks[0].blockSpaces[2].westSpace  = 1;

	//Block Space 3
	world.gridBlocks[0].blockSpaces[3].northSpace = 0;
	world.gridBlocks[0].blockSpaces[3].southSpace = 6;
	world.gridBlocks[0].blockSpaces[3].eastSpace  = 4;
	world.gridBlocks[0].blockSpaces[3].westSpace  = -1;

	//Block Space 4
	world.gridBlocks[0].blockSpaces[4].northSpace = 1;
	world.gridBlocks[0].blockSpaces[4].southSpace = 7;
	world.gridBlocks[0].blockSpaces[4].eastSpace  = 5;
	world.gridBlocks[0].blockSpaces[4].westSpace  = 3;

	//Block Space 5
	world.gridBlocks[0].blockSpaces[5].northSpace = 2;
	world.gridBlocks[0].blockSpaces[5].southSpace = 8;
	world.gridBlocks[0].blockSpaces[5].eastSpace  = 12;
	world.gridBlocks[0].blockSpaces[5].westSpace  = 4;

	//Block Space 6
	world.gridBlocks[0].blockSpaces[6].northSpace = 3;
	world.gridBlocks[0].blockSpaces[6].southSpace = 45;
	world.gridBlocks[0].blockSpaces[6].eastSpace  = 7;
	world.gridBlocks[0].blockSpaces[6].westSpace  = -1;

	//Block Space 7
	world.gridBlocks[0].blockSpaces[7].northSpace = 4;
	world.gridBlocks[0].blockSpaces[7].southSpace = 46;
	world.gridBlocks[0].blockSpaces[7].eastSpace  = 8;
	world.gridBlocks[0].blockSpaces[7].westSpace  = 6;

	//Block Space 8
	world.gridBlocks[0].blockSpaces[8].northSpace = 5;
	world.gridBlocks[0].blockSpaces[8].southSpace = 47;
	world.gridBlocks[0].blockSpaces[8].eastSpace  = 15;
	world.gridBlocks[0].blockSpaces[8].westSpace  = 7;

//Block B
	//Block Space 0
	world.gridBlocks[1].blockSpaces[0].northSpace = -1;
	world.gridBlocks[1].blockSpaces[0].southSpace = 12;
	world.gridBlocks[1].blockSpaces[0].eastSpace  = 10;
	world.gridBlocks[1].blockSpaces[0].westSpace  = 2;

	//Block Space 1
	world.gridBlocks[1].blockSpaces[1].northSpace = -1;
	world.gridBlocks[1].blockSpaces[1].southSpace = 13;
	world.gridBlocks[1].blockSpaces[1].eastSpace  = 11;
	world.gridBlocks[1].blockSpaces[1].westSpace  = 9;

	//Block Space 2
	world.gridBlocks[1].blockSpaces[2].northSpace = -1;
	world.gridBlocks[1].blockSpaces[2].southSpace = 14;
	world.gridBlocks[1].blockSpaces[2].eastSpace  = 18;
	world.gridBlocks[1].blockSpaces[2].westSpace  = 10;

	//Block Space 3
	world.gridBlocks[1].blockSpaces[3].northSpace = 9;
	world.gridBlocks[1].blockSpaces[3].southSpace = 15;
	world.gridBlocks[1].blockSpaces[3].eastSpace  = 13;
	world.gridBlocks[1].blockSpaces[3].westSpace  = 5;

	//Block Space 4
	world.gridBlocks[1].blockSpaces[4].northSpace = 10;
	world.gridBlocks[1].blockSpaces[4].southSpace = 16;
	world.gridBlocks[1].blockSpaces[4].eastSpace  = 14;
	world.gridBlocks[1].blockSpaces[4].westSpace  = 12;

	//Block Space 5
	world.gridBlocks[1].blockSpaces[5].northSpace = 11;
	world.gridBlocks[1].blockSpaces[5].southSpace = 17;
	world.gridBlocks[1].blockSpaces[5].eastSpace  = 21;
	world.gridBlocks[1].blockSpaces[5].westSpace  = 13;

	//Block Space 6
	world.gridBlocks[1].blockSpaces[6].northSpace = 12;
	world.gridBlocks[1].blockSpaces[6].southSpace = 54;
	world.gridBlocks[1].blockSpaces[6].eastSpace  = 16;
	world.gridBlocks[1].blockSpaces[6].westSpace  = 8;

	//Block Space 7
	world.gridBlocks[1].blockSpaces[7].northSpace = 13;
	world.gridBlocks[1].blockSpaces[7].southSpace = 55;
	world.gridBlocks[1].blockSpaces[7].eastSpace  = 17;
	world.gridBlocks[1].blockSpaces[7].westSpace  = 15;

	//Block Space 8
	world.gridBlocks[1].blockSpaces[8].northSpace = 14;
	world.gridBlocks[1].blockSpaces[8].southSpace = 56;
	world.gridBlocks[1].blockSpaces[8].eastSpace  = 24;
	world.gridBlocks[1].blockSpaces[8].westSpace  = 16;

//Block C
	//Block Space 0
	world.gridBlocks[2].blockSpaces[0].northSpace = -1;
	world.gridBlocks[2].blockSpaces[0].southSpace = 21;
	world.gridBlocks[2].blockSpaces[0].eastSpace  = 19;
	world.gridBlocks[2].blockSpaces[0].westSpace  = 11;

	//Block Space 1
	world.gridBlocks[2].blockSpaces[1].northSpace = -1;
	world.gridBlocks[2].blockSpaces[1].southSpace = 22;
	world.gridBlocks[2].blockSpaces[1].eastSpace  = 20;
	world.gridBlocks[2].blockSpaces[1].westSpace  = 18;

	//Block Space 2
	world.gridBlocks[2].blockSpaces[2].northSpace = -1;
	world.gridBlocks[2].blockSpaces[2].southSpace = 23;
	world.gridBlocks[2].blockSpaces[2].eastSpace  = 27;
	world.gridBlocks[2].blockSpaces[2].westSpace  = 19;

	//Block Space 3
	world.gridBlocks[2].blockSpaces[3].northSpace = 18;
	world.gridBlocks[2].blockSpaces[3].southSpace = 24;
	world.gridBlocks[2].blockSpaces[3].eastSpace  = 22;
	world.gridBlocks[2].blockSpaces[3].westSpace  = 14;

	//Block Space 4
	world.gridBlocks[2].blockSpaces[4].northSpace = 19;
	world.gridBlocks[2].blockSpaces[4].southSpace = 25;
	world.gridBlocks[2].blockSpaces[4].eastSpace  = 23;
	world.gridBlocks[2].blockSpaces[4].westSpace  = 21;

	//Block Space 5
	world.gridBlocks[2].blockSpaces[5].northSpace = 20;
	world.gridBlocks[2].blockSpaces[5].southSpace = 26;
	world.gridBlocks[2].blockSpaces[5].eastSpace  = 30;
	world.gridBlocks[2].blockSpaces[5].westSpace  = 22;

	//Block Space 6
	world.gridBlocks[2].blockSpaces[6].northSpace = 21;
	world.gridBlocks[2].blockSpaces[6].southSpace = 63;
	world.gridBlocks[2].blockSpaces[6].eastSpace  = 25;
	world.gridBlocks[2].blockSpaces[6].westSpace  = 17;

	//Block Space 7
	world.gridBlocks[2].blockSpaces[7].northSpace = 22;
	world.gridBlocks[2].blockSpaces[7].southSpace = 64;
	world.gridBlocks[2].blockSpaces[7].eastSpace  = 26;
	world.gridBlocks[2].blockSpaces[7].westSpace  = 24;

	
	//Block Space 8
	world.gridBlocks[2].blockSpaces[8].northSpace = 23;
	world.gridBlocks[2].blockSpaces[8].southSpace = 65;
	world.gridBlocks[2].blockSpaces[8].eastSpace  = 33;
	world.gridBlocks[2].blockSpaces[8].westSpace  = 25;


//Block D
	//Block Space 0
	world.gridBlocks[3].blockSpaces[0].northSpace = -1;
	world.gridBlocks[3].blockSpaces[0].southSpace = 30;
	world.gridBlocks[3].blockSpaces[0].eastSpace  = 28;
	world.gridBlocks[3].blockSpaces[0].westSpace  = 20;

	//Block Space 1
	world.gridBlocks[3].blockSpaces[1].northSpace = -1;
	world.gridBlocks[3].blockSpaces[1].southSpace = 31;
	world.gridBlocks[3].blockSpaces[1].eastSpace  = 29;
	world.gridBlocks[3].blockSpaces[1].westSpace  = 27;

	//Block Space 2
	world.gridBlocks[3].blockSpaces[2].northSpace = -1;
	world.gridBlocks[3].blockSpaces[2].southSpace = 32;
	world.gridBlocks[3].blockSpaces[2].eastSpace  = 36;
	world.gridBlocks[3].blockSpaces[2].westSpace  = 28;

	//Block Space 3
	world.gridBlocks[3].blockSpaces[3].northSpace = 27;
	world.gridBlocks[3].blockSpaces[3].southSpace = 33;
	world.gridBlocks[3].blockSpaces[3].eastSpace  = 31;
	world.gridBlocks[3].blockSpaces[3].westSpace  = 23;

	//Block Space 4
	world.gridBlocks[3].blockSpaces[4].northSpace = 28;
	world.gridBlocks[3].blockSpaces[4].southSpace = 34;
	world.gridBlocks[3].blockSpaces[4].eastSpace  = 32;
	world.gridBlocks[3].blockSpaces[4].westSpace  = 30;

	//Block Space 5
	world.gridBlocks[3].blockSpaces[5].northSpace = 29;
	world.gridBlocks[3].blockSpaces[5].southSpace = 35;
	world.gridBlocks[3].blockSpaces[5].eastSpace  = 39;
	world.gridBlocks[3].blockSpaces[5].westSpace  = 31;

	//Block Space 6
	world.gridBlocks[3].blockSpaces[6].northSpace = 30;
	world.gridBlocks[3].blockSpaces[6].southSpace = 72;
	world.gridBlocks[3].blockSpaces[6].eastSpace  = 34;
	world.gridBlocks[3].blockSpaces[6].westSpace  = 26;

	//Block Space 7
	world.gridBlocks[3].blockSpaces[7].northSpace = 31;
	world.gridBlocks[3].blockSpaces[7].southSpace = 73;
	world.gridBlocks[3].blockSpaces[7].eastSpace  = 35;
	world.gridBlocks[3].blockSpaces[7].westSpace  = 33;

	
	//Block Space 8
	world.gridBlocks[3].blockSpaces[8].northSpace = 32;
	world.gridBlocks[3].blockSpaces[8].southSpace = 74;
	world.gridBlocks[3].blockSpaces[8].eastSpace  = 42;
	world.gridBlocks[3].blockSpaces[8].westSpace  = 34;


//Block E
	//Block Space 0
	world.gridBlocks[4].blockSpaces[0].northSpace = -1;
	world.gridBlocks[4].blockSpaces[0].southSpace = 39;
	world.gridBlocks[4].blockSpaces[0].eastSpace  = 37;
	world.gridBlocks[4].blockSpaces[0].westSpace  = 29;

	//Block Space 1
	world.gridBlocks[4].blockSpaces[1].northSpace = -1;
	world.gridBlocks[4].blockSpaces[1].southSpace = 40;
	world.gridBlocks[4].blockSpaces[1].eastSpace  = 38;
	world.gridBlocks[4].blockSpaces[1].westSpace  = 36;

	//Block Space 2
	world.gridBlocks[4].blockSpaces[2].northSpace = -1;
	world.gridBlocks[4].blockSpaces[2].southSpace = 41;
	world.gridBlocks[4].blockSpaces[2].eastSpace  = -1;
	world.gridBlocks[4].blockSpaces[2].westSpace  = 37;

	//Block Space 3
	world.gridBlocks[4].blockSpaces[3].northSpace = 36;
	world.gridBlocks[4].blockSpaces[3].southSpace = 42;
	world.gridBlocks[4].blockSpaces[3].eastSpace  = 40;
	world.gridBlocks[4].blockSpaces[3].westSpace  = 32;

	//Block Space 4
	world.gridBlocks[4].blockSpaces[4].northSpace = 37;
	world.gridBlocks[4].blockSpaces[4].southSpace = 43;
	world.gridBlocks[4].blockSpaces[4].eastSpace  = 41;
	world.gridBlocks[4].blockSpaces[4].westSpace  = 39;

	//Block Space 5
	world.gridBlocks[4].blockSpaces[5].northSpace = 38;
	world.gridBlocks[4].blockSpaces[5].southSpace = 44;
	world.gridBlocks[4].blockSpaces[5].eastSpace  = -1;
	world.gridBlocks[4].blockSpaces[5].westSpace  = 40;

	//Block Space 6
	world.gridBlocks[4].blockSpaces[6].northSpace = 39;
	world.gridBlocks[4].blockSpaces[6].southSpace = 81;
	world.gridBlocks[4].blockSpaces[6].eastSpace  = 43;
	world.gridBlocks[4].blockSpaces[6].westSpace  = 35;

	//Block Space 7
	world.gridBlocks[4].blockSpaces[7].northSpace = 40;
	world.gridBlocks[4].blockSpaces[7].southSpace = 82;
	world.gridBlocks[4].blockSpaces[7].eastSpace  = 44;
	world.gridBlocks[4].blockSpaces[7].westSpace  = 42;
	
	//Block Space 8
	world.gridBlocks[4].blockSpaces[8].northSpace = 41;
	world.gridBlocks[4].blockSpaces[8].southSpace = 83;
	world.gridBlocks[4].blockSpaces[8].eastSpace  = -1;
	world.gridBlocks[4].blockSpaces[8].westSpace  = 43;


	//Block F

	//Block Space 0
	world.gridBlocks[5].blockSpaces[0].northSpace = 6;
	world.gridBlocks[5].blockSpaces[0].southSpace = 48;
	world.gridBlocks[5].blockSpaces[0].eastSpace  = 46;
	world.gridBlocks[5].blockSpaces[0].westSpace  = -1;

	//Block Space 1
	world.gridBlocks[5].blockSpaces[1].northSpace = 7;
	world.gridBlocks[5].blockSpaces[1].southSpace = 49;
	world.gridBlocks[5].blockSpaces[1].eastSpace  = 47;
	world.gridBlocks[5].blockSpaces[1].westSpace  = 45;
	//Block Space 2;
	world.gridBlocks[5].blockSpaces[2].northSpace = 8;
	world.gridBlocks[5].blockSpaces[2].southSpace = 50;
	world.gridBlocks[5].blockSpaces[2].eastSpace  = 54;
	world.gridBlocks[5].blockSpaces[2].westSpace  = 46;
	//Block Space 3;
	world.gridBlocks[5].blockSpaces[3].northSpace = 45;
	world.gridBlocks[5].blockSpaces[3].southSpace = 51;
	world.gridBlocks[5].blockSpaces[3].eastSpace  = 49;
	world.gridBlocks[5].blockSpaces[3].westSpace  = -1;
	//Block Space 4;
	world.gridBlocks[5].blockSpaces[4].northSpace = 46;
	world.gridBlocks[5].blockSpaces[4].southSpace = 52;
	world.gridBlocks[5].blockSpaces[4].eastSpace  = 50;
	world.gridBlocks[5].blockSpaces[4].westSpace  = 48;
	//Block Space 5;
	world.gridBlocks[5].blockSpaces[5].northSpace = 47;
	world.gridBlocks[5].blockSpaces[5].southSpace = 53;
	world.gridBlocks[5].blockSpaces[5].eastSpace  = 57;
	world.gridBlocks[5].blockSpaces[5].westSpace  = 49;
	//Block Space 6;
	world.gridBlocks[5].blockSpaces[6].northSpace = 48;
	world.gridBlocks[5].blockSpaces[6].southSpace = 90;
	world.gridBlocks[5].blockSpaces[6].eastSpace  = 52;
	world.gridBlocks[5].blockSpaces[6].westSpace  = -1;
	//Block Space 7;
	world.gridBlocks[5].blockSpaces[7].northSpace = 49;
	world.gridBlocks[5].blockSpaces[7].southSpace = 91;
	world.gridBlocks[5].blockSpaces[7].eastSpace  = 53;
	world.gridBlocks[5].blockSpaces[7].westSpace  = 51;
	//Block Space 8;
	world.gridBlocks[5].blockSpaces[8].northSpace = 50;
	world.gridBlocks[5].blockSpaces[8].southSpace = 92;
	world.gridBlocks[5].blockSpaces[8].eastSpace  = 60;
	world.gridBlocks[5].blockSpaces[8].westSpace  = 52;


//Block G
	//Block Space 0
	world.gridBlocks[6].blockSpaces[0].northSpace = 15;
	world.gridBlocks[6].blockSpaces[0].southSpace = 57;
	world.gridBlocks[6].blockSpaces[0].eastSpace  = 55;
	world.gridBlocks[6].blockSpaces[0].westSpace  = 47;

	//Block Space 1
	world.gridBlocks[6].blockSpaces[1].northSpace = 16;
	world.gridBlocks[6].blockSpaces[1].southSpace = 58;
	world.gridBlocks[6].blockSpaces[1].eastSpace  = 56;
	world.gridBlocks[6].blockSpaces[1].westSpace  = 54;

	//Block Space 2
	world.gridBlocks[6].blockSpaces[2].northSpace = 17;
	world.gridBlocks[6].blockSpaces[2].southSpace = 59;
	world.gridBlocks[6].blockSpaces[2].eastSpace  = 63;
	world.gridBlocks[6].blockSpaces[2].westSpace  = 55;

	//Block Space 3
	world.gridBlocks[6].blockSpaces[3].northSpace = 54;
	world.gridBlocks[6].blockSpaces[3].southSpace = 60;
	world.gridBlocks[6].blockSpaces[3].eastSpace  = 58;
	world.gridBlocks[6].blockSpaces[3].westSpace  = 50;

	//Block Space 4
	world.gridBlocks[6].blockSpaces[4].northSpace = 55;
	world.gridBlocks[6].blockSpaces[4].southSpace = 61;
	world.gridBlocks[6].blockSpaces[4].eastSpace  = 59;
	world.gridBlocks[6].blockSpaces[4].westSpace  = 57;

	//Block Space 5
	world.gridBlocks[6].blockSpaces[5].northSpace = 56;
	world.gridBlocks[6].blockSpaces[5].southSpace = 62;
	world.gridBlocks[6].blockSpaces[5].eastSpace  = 66;
	world.gridBlocks[6].blockSpaces[5].westSpace  = 58;

	//Block Space 6
	world.gridBlocks[6].blockSpaces[6].northSpace = 57;
	world.gridBlocks[6].blockSpaces[6].southSpace = 99;
	world.gridBlocks[6].blockSpaces[6].eastSpace  = 61;
	world.gridBlocks[6].blockSpaces[6].westSpace  = 53;

	//Block Space 7
	world.gridBlocks[6].blockSpaces[7].northSpace = 58;
	world.gridBlocks[6].blockSpaces[7].southSpace = 100;
	world.gridBlocks[6].blockSpaces[7].eastSpace  = 62;
	world.gridBlocks[6].blockSpaces[7].westSpace  = 60;
	
	
	//Block Space 8
	world.gridBlocks[6].blockSpaces[8].northSpace = 59;
	world.gridBlocks[6].blockSpaces[8].southSpace = 101;
	world.gridBlocks[6].blockSpaces[8].eastSpace  = 69;
	world.gridBlocks[6].blockSpaces[8].westSpace  = 61;


//Block H
	//Block Space 0
	world.gridBlocks[7].blockSpaces[0].northSpace = 24;
	world.gridBlocks[7].blockSpaces[0].southSpace = 66;
	world.gridBlocks[7].blockSpaces[0].eastSpace  = 64;
	world.gridBlocks[7].blockSpaces[0].westSpace  = 56;

	//Block Space 1
	world.gridBlocks[7].blockSpaces[1].northSpace = 25;
	world.gridBlocks[7].blockSpaces[1].southSpace = 67;
	world.gridBlocks[7].blockSpaces[1].eastSpace  = 65;
	world.gridBlocks[7].blockSpaces[1].westSpace  = 63;

	//Block Space 2
	world.gridBlocks[7].blockSpaces[2].northSpace = 26;
	world.gridBlocks[7].blockSpaces[2].southSpace = 68;
	world.gridBlocks[7].blockSpaces[2].eastSpace  = 72;
	world.gridBlocks[7].blockSpaces[2].westSpace  = 64;

	//Block Space 3
	world.gridBlocks[7].blockSpaces[3].northSpace = 63;
	world.gridBlocks[7].blockSpaces[3].southSpace = 69;
	world.gridBlocks[7].blockSpaces[3].eastSpace  = 67;
	world.gridBlocks[7].blockSpaces[3].westSpace  = 59;

	//Block Space 4
	world.gridBlocks[7].blockSpaces[4].northSpace = 64;
	world.gridBlocks[7].blockSpaces[4].southSpace = 70;
	world.gridBlocks[7].blockSpaces[4].eastSpace  = 68;
	world.gridBlocks[7].blockSpaces[4].westSpace  = 66;

	//Block Space 5
	world.gridBlocks[7].blockSpaces[5].northSpace = 65;
	world.gridBlocks[7].blockSpaces[5].southSpace = 71;
	world.gridBlocks[7].blockSpaces[5].eastSpace  = 75;
	world.gridBlocks[7].blockSpaces[5].westSpace  = 67;

	//Block Space 6
	world.gridBlocks[7].blockSpaces[6].northSpace = 66;
	world.gridBlocks[7].blockSpaces[6].southSpace = 108;
	world.gridBlocks[7].blockSpaces[6].eastSpace  = 70;
	world.gridBlocks[7].blockSpaces[6].westSpace  = 62;

	//Block Space 7
	world.gridBlocks[7].blockSpaces[7].northSpace = 67;
	world.gridBlocks[7].blockSpaces[7].southSpace = 109;
	world.gridBlocks[7].blockSpaces[7].eastSpace  = 71;
	world.gridBlocks[7].blockSpaces[7].westSpace  = 69;

	
	//Block Space 8
	world.gridBlocks[7].blockSpaces[8].northSpace = 68;
	world.gridBlocks[7].blockSpaces[8].southSpace = 110;
	world.gridBlocks[7].blockSpaces[8].eastSpace  = 78;
	world.gridBlocks[7].blockSpaces[8].westSpace  = 70;


//Block I
	//Block Space 0
	world.gridBlocks[8].blockSpaces[0].northSpace = 33;
	world.gridBlocks[8].blockSpaces[0].southSpace = 75;
	world.gridBlocks[8].blockSpaces[0].eastSpace  = 73;
	world.gridBlocks[8].blockSpaces[0].westSpace  = 65;

	//Block Space 1
	world.gridBlocks[8].blockSpaces[1].northSpace = 34;
	world.gridBlocks[8].blockSpaces[1].southSpace = 76;
	world.gridBlocks[8].blockSpaces[1].eastSpace  = 74;
	world.gridBlocks[8].blockSpaces[1].westSpace  = 72;

	//Block Space 2
	world.gridBlocks[8].blockSpaces[2].northSpace = 35;
	world.gridBlocks[8].blockSpaces[2].southSpace = 77;
	world.gridBlocks[8].blockSpaces[2].eastSpace  = 81;
	world.gridBlocks[8].blockSpaces[2].westSpace  = 73;

	//Block Space 3
	world.gridBlocks[8].blockSpaces[3].northSpace = 72;
	world.gridBlocks[8].blockSpaces[3].southSpace = 78;
	world.gridBlocks[8].blockSpaces[3].eastSpace  = 76;
	world.gridBlocks[8].blockSpaces[3].westSpace  = 68;

	//Block Space 4
	world.gridBlocks[8].blockSpaces[4].northSpace = 73;
	world.gridBlocks[8].blockSpaces[4].southSpace = 79;
	world.gridBlocks[8].blockSpaces[4].eastSpace  = 77;
	world.gridBlocks[8].blockSpaces[4].westSpace  = 75;

	//Block Space 5
	world.gridBlocks[8].blockSpaces[5].northSpace = 74;
	world.gridBlocks[8].blockSpaces[5].southSpace = 80;
	world.gridBlocks[8].blockSpaces[5].eastSpace  = 84;
	world.gridBlocks[8].blockSpaces[5].westSpace  = 76;

	//Block Space 6
	world.gridBlocks[8].blockSpaces[6].northSpace = 75;
	world.gridBlocks[8].blockSpaces[6].southSpace = 117;
	world.gridBlocks[8].blockSpaces[6].eastSpace  = 79;
	world.gridBlocks[8].blockSpaces[6].westSpace  = 71;

	//Block Space 7
	world.gridBlocks[8].blockSpaces[7].northSpace = 76;
	world.gridBlocks[8].blockSpaces[7].southSpace = 118;
	world.gridBlocks[8].blockSpaces[7].eastSpace  = 80;
	world.gridBlocks[8].blockSpaces[7].westSpace  = 78;
	
	
	//Block Space 8
	world.gridBlocks[8].blockSpaces[8].northSpace = 77;
	world.gridBlocks[8].blockSpaces[8].southSpace = 119;
	world.gridBlocks[8].blockSpaces[8].eastSpace  = 87;
	world.gridBlocks[8].blockSpaces[8].westSpace  = 79;


//Block J
	//Block Space 0
	world.gridBlocks[9].blockSpaces[0].northSpace = 42;
	world.gridBlocks[9].blockSpaces[0].southSpace = 84;
	world.gridBlocks[9].blockSpaces[0].eastSpace  = 82;
	world.gridBlocks[9].blockSpaces[0].westSpace  = 74;

	//Block Space 1
	world.gridBlocks[9].blockSpaces[1].northSpace = 43;
	world.gridBlocks[9].blockSpaces[1].southSpace = 85;
	world.gridBlocks[9].blockSpaces[1].eastSpace  = 83;
	world.gridBlocks[9].blockSpaces[1].westSpace  = 81;

	//Block Space 2
	world.gridBlocks[9].blockSpaces[2].northSpace = 44;
	world.gridBlocks[9].blockSpaces[2].southSpace = 86;
	world.gridBlocks[9].blockSpaces[2].eastSpace  = -1;
	world.gridBlocks[9].blockSpaces[2].westSpace  = 82;

	//Block Space 3
	world.gridBlocks[9].blockSpaces[3].northSpace = 81;
	world.gridBlocks[9].blockSpaces[3].southSpace = 87;
	world.gridBlocks[9].blockSpaces[3].eastSpace  = 85;
	world.gridBlocks[9].blockSpaces[3].westSpace  = 77;

	//Block Space 4
	world.gridBlocks[9].blockSpaces[4].northSpace = 82;
	world.gridBlocks[9].blockSpaces[4].southSpace = 88;
	world.gridBlocks[9].blockSpaces[4].eastSpace  = 86;
	world.gridBlocks[9].blockSpaces[4].westSpace  = 84;

	//Block Space 5
	world.gridBlocks[9].blockSpaces[5].northSpace = 83;
	world.gridBlocks[9].blockSpaces[5].southSpace = 89;
	world.gridBlocks[9].blockSpaces[5].eastSpace  = -1;
	world.gridBlocks[9].blockSpaces[5].westSpace  = 85;

	//Block Space 6
	world.gridBlocks[9].blockSpaces[6].northSpace = 84;
	world.gridBlocks[9].blockSpaces[6].southSpace = 126;
	world.gridBlocks[9].blockSpaces[6].eastSpace  = 88;
	world.gridBlocks[9].blockSpaces[6].westSpace  = 80;

	//Block Space 7
	world.gridBlocks[9].blockSpaces[7].northSpace = 85;
	world.gridBlocks[9].blockSpaces[7].southSpace = 127;
	world.gridBlocks[9].blockSpaces[7].eastSpace  = 89;
	world.gridBlocks[9].blockSpaces[7].westSpace  = 87;
	
	
	//Block Space 8
	world.gridBlocks[9].blockSpaces[8].northSpace = 86;
	world.gridBlocks[9].blockSpaces[8].southSpace = 128;
	world.gridBlocks[9].blockSpaces[8].eastSpace  = -1;
	world.gridBlocks[9].blockSpaces[8].westSpace  = 88;


//Block K
	//Block Space 0
	world.gridBlocks[10].blockSpaces[0].northSpace = 51;
	world.gridBlocks[10].blockSpaces[0].southSpace = 93;
	world.gridBlocks[10].blockSpaces[0].eastSpace  = 91;
	world.gridBlocks[10].blockSpaces[0].westSpace  = -1;

	//Block Space 1
	world.gridBlocks[10].blockSpaces[1].northSpace = 52;
	world.gridBlocks[10].blockSpaces[1].southSpace = 94;
	world.gridBlocks[10].blockSpaces[1].eastSpace  = 92;
	world.gridBlocks[10].blockSpaces[1].westSpace  = 90;

	//Block Space 2
	world.gridBlocks[10].blockSpaces[2].northSpace = 53;
	world.gridBlocks[10].blockSpaces[2].southSpace = 95;
	world.gridBlocks[10].blockSpaces[2].eastSpace  = 99;
	world.gridBlocks[10].blockSpaces[2].westSpace  = 91;

	//Block Space 3
	world.gridBlocks[10].blockSpaces[3].northSpace = 90;
	world.gridBlocks[10].blockSpaces[3].southSpace = 96;
	world.gridBlocks[10].blockSpaces[3].eastSpace  = 94;
	world.gridBlocks[10].blockSpaces[3].westSpace  = -1;

	//Block Space 4
	world.gridBlocks[10].blockSpaces[4].northSpace = 91;
	world.gridBlocks[10].blockSpaces[4].southSpace = 97;
	world.gridBlocks[10].blockSpaces[4].eastSpace  = 95;
	world.gridBlocks[10].blockSpaces[4].westSpace  = 93;

	//Block Space 5
	world.gridBlocks[10].blockSpaces[5].northSpace = 92;
	world.gridBlocks[10].blockSpaces[5].southSpace = 98;
	world.gridBlocks[10].blockSpaces[5].eastSpace  = 102;
	world.gridBlocks[10].blockSpaces[5].westSpace  = 94;

	//Block Space 6
	world.gridBlocks[10].blockSpaces[6].northSpace = 93;
	world.gridBlocks[10].blockSpaces[6].southSpace = 135;
	world.gridBlocks[10].blockSpaces[6].eastSpace  = 97;
	world.gridBlocks[10].blockSpaces[6].westSpace  = -1;
 
	//Block Space 7
	world.gridBlocks[10].blockSpaces[7].northSpace = 94;
	world.gridBlocks[10].blockSpaces[7].southSpace = 136;
	world.gridBlocks[10].blockSpaces[7].eastSpace  = 98;
	world.gridBlocks[10].blockSpaces[7].westSpace  = 96;

	
	//Block Space 8
	world.gridBlocks[10].blockSpaces[8].northSpace = 95;
	world.gridBlocks[10].blockSpaces[8].southSpace = 137;
	world.gridBlocks[10].blockSpaces[8].eastSpace  = 105;
	world.gridBlocks[10].blockSpaces[8].westSpace  = 97;


//Block L
	//Block Space 0
	world.gridBlocks[11].blockSpaces[0].northSpace = 60;
	world.gridBlocks[11].blockSpaces[0].southSpace = 102;
	world.gridBlocks[11].blockSpaces[0].eastSpace  = 100;
	world.gridBlocks[11].blockSpaces[0].westSpace  = 92;

	//Block Space 1
	world.gridBlocks[11].blockSpaces[1].northSpace = 61;
	world.gridBlocks[11].blockSpaces[1].southSpace = 103;
	world.gridBlocks[11].blockSpaces[1].eastSpace  = 101;
	world.gridBlocks[11].blockSpaces[1].westSpace  = 99;

	//Block Space 2
	world.gridBlocks[11].blockSpaces[2].northSpace = 62;
	world.gridBlocks[11].blockSpaces[2].southSpace = 104;
	world.gridBlocks[11].blockSpaces[2].eastSpace  = 108;
	world.gridBlocks[11].blockSpaces[2].westSpace  = 100;

	//Block Space 3
	world.gridBlocks[11].blockSpaces[3].northSpace = 99;
	world.gridBlocks[11].blockSpaces[3].southSpace = 105;
	world.gridBlocks[11].blockSpaces[3].eastSpace  = 103 ;
	world.gridBlocks[11].blockSpaces[3].westSpace  = 95;

	//Block Space 4
	world.gridBlocks[11].blockSpaces[4].northSpace = 100;
	world.gridBlocks[11].blockSpaces[4].southSpace = 106 ;
	world.gridBlocks[11].blockSpaces[4].eastSpace  = 104;
	world.gridBlocks[11].blockSpaces[4].westSpace  = 102;

	//Block Space 5
	world.gridBlocks[11].blockSpaces[5].northSpace = 101 ;
	world.gridBlocks[11].blockSpaces[5].southSpace = 107;
	world.gridBlocks[11].blockSpaces[5].eastSpace  = 111;
	world.gridBlocks[11].blockSpaces[5].westSpace  = 103;

	//Block Space 6
	world.gridBlocks[11].blockSpaces[6].northSpace = 102;
	world.gridBlocks[11].blockSpaces[6].southSpace = 144;
	world.gridBlocks[11].blockSpaces[6].eastSpace  = 106;
	world.gridBlocks[11].blockSpaces[6].westSpace  = 98;

	//Block Space 7
	world.gridBlocks[11].blockSpaces[7].northSpace = 103;
	world.gridBlocks[11].blockSpaces[7].southSpace = 145;
	world.gridBlocks[11].blockSpaces[7].eastSpace  = 107;
	world.gridBlocks[11].blockSpaces[7].westSpace  = 105;
	
	
	//Block Space 8
	world.gridBlocks[11].blockSpaces[8].northSpace =  104;
	world.gridBlocks[11].blockSpaces[8].southSpace = 146;
	world.gridBlocks[11].blockSpaces[8].eastSpace  = 114;
	world.gridBlocks[11].blockSpaces[8].westSpace  = 106;


//Block M
	//Block Space 0
	world.gridBlocks[12].blockSpaces[0].northSpace = 69;
	world.gridBlocks[12].blockSpaces[0].southSpace = 111;
	world.gridBlocks[12].blockSpaces[0].eastSpace  = 109;
	world.gridBlocks[12].blockSpaces[0].westSpace  = 101;

	//Block Space 1
	world.gridBlocks[12].blockSpaces[1].northSpace = 70;
	world.gridBlocks[12].blockSpaces[1].southSpace = 112;
	world.gridBlocks[12].blockSpaces[1].eastSpace  = 110;
	world.gridBlocks[12].blockSpaces[1].westSpace  = 108;

	//Block Space 2
	world.gridBlocks[12].blockSpaces[2].northSpace = 71;
	world.gridBlocks[12].blockSpaces[2].southSpace = 113;
	world.gridBlocks[12].blockSpaces[2].eastSpace  = 117;
	world.gridBlocks[12].blockSpaces[2].westSpace  = 109;

	//Block Space 3
	world.gridBlocks[12].blockSpaces[3].northSpace = 108;
	world.gridBlocks[12].blockSpaces[3].southSpace = 114;
	world.gridBlocks[12].blockSpaces[3].eastSpace  = 112;
	world.gridBlocks[12].blockSpaces[3].westSpace  = 104;

	//Block Space 4
	world.gridBlocks[12].blockSpaces[4].northSpace = 109;
	world.gridBlocks[12].blockSpaces[4].southSpace = 115;
	world.gridBlocks[12].blockSpaces[4].eastSpace  = 113;
	world.gridBlocks[12].blockSpaces[4].westSpace  = 111;

	//Block Space 5
	world.gridBlocks[12].blockSpaces[5].northSpace = 110;
	world.gridBlocks[12].blockSpaces[5].southSpace = 116;
	world.gridBlocks[12].blockSpaces[5].eastSpace  = 120;
	world.gridBlocks[12].blockSpaces[5].westSpace  = 112;

	//Block Space 6
	world.gridBlocks[12].blockSpaces[6].northSpace = 111;
	world.gridBlocks[12].blockSpaces[6].southSpace = 153;
	world.gridBlocks[12].blockSpaces[6].eastSpace  = 115;
	world.gridBlocks[12].blockSpaces[6].westSpace  = 107;

	//Block Space 7
	world.gridBlocks[12].blockSpaces[7].northSpace = 112;
	world.gridBlocks[12].blockSpaces[7].southSpace = 154;
	world.gridBlocks[12].blockSpaces[7].eastSpace  = 116;
	world.gridBlocks[12].blockSpaces[7].westSpace  = 114;

	
	//Block Space 8
	world.gridBlocks[12].blockSpaces[8].northSpace = 113;
	world.gridBlocks[12].blockSpaces[8].southSpace = 155;
	world.gridBlocks[12].blockSpaces[8].eastSpace  = 123;
	world.gridBlocks[12].blockSpaces[8].westSpace  = 115;


//Block N
	//Block Space 0
	world.gridBlocks[13].blockSpaces[0].northSpace = 78;
	world.gridBlocks[13].blockSpaces[0].southSpace = 120;
	world.gridBlocks[13].blockSpaces[0].eastSpace  = 118;
	world.gridBlocks[13].blockSpaces[0].westSpace  = 110;

	//Block Space 1
	world.gridBlocks[13].blockSpaces[1].northSpace = 79;
	world.gridBlocks[13].blockSpaces[1].southSpace = 121;
	world.gridBlocks[13].blockSpaces[1].eastSpace  = 119;
	world.gridBlocks[13].blockSpaces[1].westSpace  = 117;

	//Block Space 2
	world.gridBlocks[13].blockSpaces[2].northSpace = 80;
	world.gridBlocks[13].blockSpaces[2].southSpace = 122;
	world.gridBlocks[13].blockSpaces[2].eastSpace  = 126;
	world.gridBlocks[13].blockSpaces[2].westSpace  = 118;

	//Block Space 3
	world.gridBlocks[13].blockSpaces[3].northSpace = 117;
	world.gridBlocks[13].blockSpaces[3].southSpace = 123;
	world.gridBlocks[13].blockSpaces[3].eastSpace  = 121;
	world.gridBlocks[13].blockSpaces[3].westSpace  = 113;

	//Block Space 4
	world.gridBlocks[13].blockSpaces[4].northSpace = 118;
	world.gridBlocks[13].blockSpaces[4].southSpace = 124;
	world.gridBlocks[13].blockSpaces[4].eastSpace  = 122;
	world.gridBlocks[13].blockSpaces[4].westSpace  = 120;

	//Block Space 5
	world.gridBlocks[13].blockSpaces[5].northSpace = 119;
	world.gridBlocks[13].blockSpaces[5].southSpace = 125;
	world.gridBlocks[13].blockSpaces[5].eastSpace  = 129;
	world.gridBlocks[13].blockSpaces[5].westSpace  = 121;

	//Block Space 6
	world.gridBlocks[13].blockSpaces[6].northSpace = 120;
	world.gridBlocks[13].blockSpaces[6].southSpace = 162;
	world.gridBlocks[13].blockSpaces[6].eastSpace  = 124;
	world.gridBlocks[13].blockSpaces[6].westSpace  = 116;

	//Block Space 7
	world.gridBlocks[13].blockSpaces[7].northSpace = 121;
	world.gridBlocks[13].blockSpaces[7].southSpace = 163;
	world.gridBlocks[13].blockSpaces[7].eastSpace  = 125;
	world.gridBlocks[13].blockSpaces[7].westSpace  = 123;
  
	
	//Block Space 8
	world.gridBlocks[13].blockSpaces[8].northSpace = 122;
	world.gridBlocks[13].blockSpaces[8].southSpace =  164;
	world.gridBlocks[13].blockSpaces[8].eastSpace  = 132;
	world.gridBlocks[13].blockSpaces[8].westSpace  = 124;


//Block O
	//Block Space 0
	world.gridBlocks[14].blockSpaces[0].northSpace = 87;
	world.gridBlocks[14].blockSpaces[0].southSpace = 129;
	world.gridBlocks[14].blockSpaces[0].eastSpace  = 127;
	world.gridBlocks[14].blockSpaces[0].westSpace  = 119;

	//Block Space 1
	world.gridBlocks[14].blockSpaces[1].northSpace = 88;
	world.gridBlocks[14].blockSpaces[1].southSpace = 130;
	world.gridBlocks[14].blockSpaces[1].eastSpace  = 128;
	world.gridBlocks[14].blockSpaces[1].westSpace  = 126;

	//Block Space 2
	world.gridBlocks[14].blockSpaces[2].northSpace = 89;
	world.gridBlocks[14].blockSpaces[2].southSpace = 131;
	world.gridBlocks[14].blockSpaces[2].eastSpace  = -1;
	world.gridBlocks[14].blockSpaces[2].westSpace  = 127;

	//Block Space 3
	world.gridBlocks[14].blockSpaces[3].northSpace = 126;
	world.gridBlocks[14].blockSpaces[3].southSpace = 132;
	world.gridBlocks[14].blockSpaces[3].eastSpace  = 130;
	world.gridBlocks[14].blockSpaces[3].westSpace  = 122;

	//Block Space 4
	world.gridBlocks[14].blockSpaces[4].northSpace = 127;
	world.gridBlocks[14].blockSpaces[4].southSpace = 133;
	world.gridBlocks[14].blockSpaces[4].eastSpace  = 131;
	world.gridBlocks[14].blockSpaces[4].westSpace  = 129;
 
	//Block Space 5
	world.gridBlocks[14].blockSpaces[5].northSpace  = 128;
	world.gridBlocks[14].blockSpaces[5].southSpace = 134;
	world.gridBlocks[14].blockSpaces[5].eastSpace  = -1;
	world.gridBlocks[14].blockSpaces[5].westSpace  = 130;

	//Block Space 6
	world.gridBlocks[14].blockSpaces[6].northSpace = 129;
	world.gridBlocks[14].blockSpaces[6].southSpace = 171;
	world.gridBlocks[14].blockSpaces[6].eastSpace  = 133;
	world.gridBlocks[14].blockSpaces[6].westSpace  = 125;

	//Block Space 7
	world.gridBlocks[14].blockSpaces[7].northSpace = 130;
	world.gridBlocks[14].blockSpaces[7].southSpace = 172;
	world.gridBlocks[14].blockSpaces[7].eastSpace  = 134;
	world.gridBlocks[14].blockSpaces[7].westSpace  = 132;

	
	//Block Space 8
	world.gridBlocks[14].blockSpaces[8].northSpace = 131;
	world.gridBlocks[14].blockSpaces[8].southSpace = 173;
	world.gridBlocks[14].blockSpaces[8].eastSpace  = -1;
	world.gridBlocks[14].blockSpaces[8].westSpace  = 133;


//Block P
	//Block Space 0
	world.gridBlocks[15].blockSpaces[0].northSpace = 96;
	world.gridBlocks[15].blockSpaces[0].southSpace = 138;
	world.gridBlocks[15].blockSpaces[0].eastSpace  = 136;
	world.gridBlocks[15].blockSpaces[0].westSpace  = -1;

	//Block Space 1 
	world.gridBlocks[15].blockSpaces[1].northSpace = 97;
	world.gridBlocks[15].blockSpaces[1].southSpace = 139;
	world.gridBlocks[15].blockSpaces[1].eastSpace  = 137;
	world.gridBlocks[15].blockSpaces[1].westSpace  = 135;

	//Block Space 2
	world.gridBlocks[15].blockSpaces[2].northSpace = 98;
	world.gridBlocks[15].blockSpaces[2].southSpace = 140;
	world.gridBlocks[15].blockSpaces[2].eastSpace  = 144;
	world.gridBlocks[15].blockSpaces[2].westSpace  = 136;

	//Block Space 3
	world.gridBlocks[15].blockSpaces[3].northSpace = 135;
	world.gridBlocks[15].blockSpaces[3].southSpace = 141;
	world.gridBlocks[15].blockSpaces[3].eastSpace  = 139;
	world.gridBlocks[15].blockSpaces[3].westSpace  = -1;

	//Block Space 4
	world.gridBlocks[15].blockSpaces[4].northSpace = 136;
	world.gridBlocks[15].blockSpaces[4].southSpace = 142;
	world.gridBlocks[15].blockSpaces[4].eastSpace  = 140;
	world.gridBlocks[15].blockSpaces[4].westSpace  = 138;

	//Block Space 5
	world.gridBlocks[15].blockSpaces[5].northSpace = 137;
	world.gridBlocks[15].blockSpaces[5].southSpace = 143;
	world.gridBlocks[15].blockSpaces[5].eastSpace  = 147;
	world.gridBlocks[15].blockSpaces[5].westSpace  = 139;

	//Block Space 6
	world.gridBlocks[15].blockSpaces[6].northSpace = 138;
	world.gridBlocks[15].blockSpaces[6].southSpace = 180;
	world.gridBlocks[15].blockSpaces[6].eastSpace  = 142;
	world.gridBlocks[15].blockSpaces[6].westSpace  = -1;

	//Block Space 7
	world.gridBlocks[15].blockSpaces[7].northSpace = 139;
	world.gridBlocks[15].blockSpaces[7].southSpace = 181;
	world.gridBlocks[15].blockSpaces[7].eastSpace  = 143;
	world.gridBlocks[15].blockSpaces[7].westSpace  = 141;

	
	//Block Space 8
	world.gridBlocks[15].blockSpaces[8].northSpace = 140;
	world.gridBlocks[15].blockSpaces[8].southSpace = 182;
	world.gridBlocks[15].blockSpaces[8].eastSpace  = 150;
	world.gridBlocks[15].blockSpaces[8].westSpace  = 142;


//Block Q
	//Block Space 0
	world.gridBlocks[16].blockSpaces[0].northSpace = 105;
	world.gridBlocks[16].blockSpaces[0].southSpace = 147;
	world.gridBlocks[16].blockSpaces[0].eastSpace  = 145;
	world.gridBlocks[16].blockSpaces[0].westSpace  = 137;

	//Block Space 1
	world.gridBlocks[16].blockSpaces[1].northSpace = 106;
	world.gridBlocks[16].blockSpaces[1].southSpace = 148;
	world.gridBlocks[16].blockSpaces[1].eastSpace  = 146;
	world.gridBlocks[16].blockSpaces[1].westSpace  = 144;

	//Block Space 2
	world.gridBlocks[16].blockSpaces[2].northSpace = 107;
	world.gridBlocks[16].blockSpaces[2].southSpace = 149;
	world.gridBlocks[16].blockSpaces[2].eastSpace  = 153;
	world.gridBlocks[16].blockSpaces[2].westSpace  = 145;

	//Block Space 3
	world.gridBlocks[16].blockSpaces[3].northSpace = 144;
	world.gridBlocks[16].blockSpaces[3].southSpace = 150;
	world.gridBlocks[16].blockSpaces[3].eastSpace  = 148;
	world.gridBlocks[16].blockSpaces[3].westSpace  = 140;

	//Block Space 4
	world.gridBlocks[16].blockSpaces[4].northSpace = 145;
	world.gridBlocks[16].blockSpaces[4].southSpace = 151;
	world.gridBlocks[16].blockSpaces[4].eastSpace  = 149;
	world.gridBlocks[16].blockSpaces[4].westSpace  = 147;

	//Block Space 5
	world.gridBlocks[16].blockSpaces[5].northSpace = 146;
	world.gridBlocks[16].blockSpaces[5].southSpace = 152;
	world.gridBlocks[16].blockSpaces[5].eastSpace  = 156;
	world.gridBlocks[16].blockSpaces[5].westSpace  = 148;

	//Block Space 6
	world.gridBlocks[16].blockSpaces[6].northSpace = 147;
	world.gridBlocks[16].blockSpaces[6].southSpace = 189;
	world.gridBlocks[16].blockSpaces[6].eastSpace  = 151;
	world.gridBlocks[16].blockSpaces[6].westSpace  = 143;

	//Block Space 7
	world.gridBlocks[16].blockSpaces[7].northSpace = 148;
	world.gridBlocks[16].blockSpaces[7].southSpace = 190;
	world.gridBlocks[16].blockSpaces[7].eastSpace  = 152;
	world.gridBlocks[16].blockSpaces[7].westSpace  = 150;

	
	//Block Space 8
	world.gridBlocks[16].blockSpaces[8].northSpace = 149;
	world.gridBlocks[16].blockSpaces[8].southSpace = 191;
	world.gridBlocks[16].blockSpaces[8].eastSpace  = 159;
	world.gridBlocks[16].blockSpaces[8].westSpace  = 151;


//Block R
	//Block Space 0
	world.gridBlocks[17].blockSpaces[0].northSpace = 114;
	world.gridBlocks[17].blockSpaces[0].southSpace = 156;
	world.gridBlocks[17].blockSpaces[0].eastSpace  = 154 ;
	world.gridBlocks[17].blockSpaces[0].westSpace  = 146;

	//Block Space 1
	world.gridBlocks[17].blockSpaces[1].northSpace = 115;
	world.gridBlocks[17].blockSpaces[1].southSpace = 157;
	world.gridBlocks[17].blockSpaces[1].eastSpace  = 155;
	world.gridBlocks[17].blockSpaces[1].westSpace  = 153;

	//Block Space 2
	world.gridBlocks[17].blockSpaces[2].northSpace = 116;
	world.gridBlocks[17].blockSpaces[2].southSpace = 158;
	world.gridBlocks[17].blockSpaces[2].eastSpace  = 162;
	world.gridBlocks[17].blockSpaces[2].westSpace  = 154;

	//Block Space 3
	world.gridBlocks[17].blockSpaces[3].northSpace = 153;
	world.gridBlocks[17].blockSpaces[3].southSpace = 159;
	world.gridBlocks[17].blockSpaces[3].eastSpace  = 157;
	world.gridBlocks[17].blockSpaces[3].westSpace  = 149;

	//Block Space 4
	world.gridBlocks[17].blockSpaces[4].northSpace = 154;
	world.gridBlocks[17].blockSpaces[4].southSpace = 160;
	world.gridBlocks[17].blockSpaces[4].eastSpace  = 158;
	world.gridBlocks[17].blockSpaces[4].westSpace  = 156;

	//Block Space 5
	world.gridBlocks[17].blockSpaces[5].northSpace = 155;
	world.gridBlocks[17].blockSpaces[5].southSpace = 161;
	world.gridBlocks[17].blockSpaces[5].eastSpace  = 165;
	world.gridBlocks[17].blockSpaces[5].westSpace  = 157;

	//Block Space 6
	world.gridBlocks[17].blockSpaces[6].northSpace = 156;
	world.gridBlocks[17].blockSpaces[6].southSpace = 198;
	world.gridBlocks[17].blockSpaces[6].eastSpace  = 160;
	world.gridBlocks[17].blockSpaces[6].westSpace  = 152;

	//Block Space 7
	world.gridBlocks[17].blockSpaces[7].northSpace = 157;
	world.gridBlocks[17].blockSpaces[7].southSpace = 199;
	world.gridBlocks[17].blockSpaces[7].eastSpace  = 161;
	world.gridBlocks[17].blockSpaces[7].westSpace  = 159;

	
	//Block Space 8
	world.gridBlocks[17].blockSpaces[8].northSpace = 158;
	world.gridBlocks[17].blockSpaces[8].southSpace =  200;
	world.gridBlocks[17].blockSpaces[8].eastSpace  = 168;
	world.gridBlocks[17].blockSpaces[8].westSpace  = 160;


//Block S
	//Block Space 0
	world.gridBlocks[18].blockSpaces[0].northSpace = 123;
	world.gridBlocks[18].blockSpaces[0].southSpace = 165;
	world.gridBlocks[18].blockSpaces[0].eastSpace  = 163;
	world.gridBlocks[18].blockSpaces[0].westSpace  = 155;

	//Block Space 1
	world.gridBlocks[18].blockSpaces[1].northSpace = 124;
	world.gridBlocks[18].blockSpaces[1].southSpace = 166;
	world.gridBlocks[18].blockSpaces[1].eastSpace  = 164;
	world.gridBlocks[18].blockSpaces[1].westSpace  = 162;

	//Block Space 2
	world.gridBlocks[18].blockSpaces[2].northSpace = 125;
	world.gridBlocks[18].blockSpaces[2].southSpace = 167;
	world.gridBlocks[18].blockSpaces[2].eastSpace  = 171;
	world.gridBlocks[18].blockSpaces[2].westSpace  = 163;

	//Block Space 3
	world.gridBlocks[18].blockSpaces[3].northSpace = 162;
	world.gridBlocks[18].blockSpaces[3].southSpace = 168;
	world.gridBlocks[18].blockSpaces[3].eastSpace  = 166;
	world.gridBlocks[18].blockSpaces[3].westSpace  = 158;

	//Block Space 4
	world.gridBlocks[18].blockSpaces[4].northSpace = 163;
	world.gridBlocks[18].blockSpaces[4].southSpace = 169;
	world.gridBlocks[18].blockSpaces[4].eastSpace  = 197;
	world.gridBlocks[18].blockSpaces[4].westSpace  = 165;

	//Block Space 5
	world.gridBlocks[18].blockSpaces[5].northSpace = 164;
	world.gridBlocks[18].blockSpaces[5].southSpace = 170;
	world.gridBlocks[18].blockSpaces[5].eastSpace  = 174;
	world.gridBlocks[18].blockSpaces[5].westSpace  = 166;

	//Block Space 6
	world.gridBlocks[18].blockSpaces[6].northSpace = 165;
	world.gridBlocks[18].blockSpaces[6].southSpace = 207;
	world.gridBlocks[18].blockSpaces[6].eastSpace  = 169;
	world.gridBlocks[18].blockSpaces[6].westSpace  = 161;

	//Block Space 7
	world.gridBlocks[18].blockSpaces[7].northSpace = 166;
	world.gridBlocks[18].blockSpaces[7].southSpace = 208;
	world.gridBlocks[18].blockSpaces[7].eastSpace  = 170;
	world.gridBlocks[18].blockSpaces[7].westSpace  = 168;

	
	//Block Space 8
	world.gridBlocks[18].blockSpaces[8].northSpace = 167;
	world.gridBlocks[18].blockSpaces[8].southSpace = 209;
	world.gridBlocks[18].blockSpaces[8].eastSpace  = 177;
	world.gridBlocks[18].blockSpaces[8].westSpace  = 169;


//Block T
	//Block Space 0
	world.gridBlocks[19].blockSpaces[0].northSpace = 132;
	world.gridBlocks[19].blockSpaces[0].southSpace = 174;
	world.gridBlocks[19].blockSpaces[0].eastSpace  = 172;
	world.gridBlocks[19].blockSpaces[0].westSpace  = 164;

	//Block Space 1
	world.gridBlocks[19].blockSpaces[1].northSpace = 133;
	world.gridBlocks[19].blockSpaces[1].southSpace = 175;
	world.gridBlocks[19].blockSpaces[1].eastSpace  = 173;
	world.gridBlocks[19].blockSpaces[1].westSpace  = 171;

	//Block Space 2
	world.gridBlocks[19].blockSpaces[2].northSpace = 134;
	world.gridBlocks[19].blockSpaces[2].southSpace = 176;
	world.gridBlocks[19].blockSpaces[2].eastSpace  = -1;
	world.gridBlocks[19].blockSpaces[2].westSpace  = 172;

	//Block Space 3
	world.gridBlocks[19].blockSpaces[3].northSpace = 171;
	world.gridBlocks[19].blockSpaces[3].southSpace = 177;
	world.gridBlocks[19].blockSpaces[3].eastSpace  = 175;
	world.gridBlocks[19].blockSpaces[3].westSpace  = 167;

	//Block Space 4
	world.gridBlocks[19].blockSpaces[4].northSpace = 172;
	world.gridBlocks[19].blockSpaces[4].southSpace = 178;
	world.gridBlocks[19].blockSpaces[4].eastSpace  = 176;
	world.gridBlocks[19].blockSpaces[4].westSpace  = 174;

	//Block Space 5
	world.gridBlocks[19].blockSpaces[5].northSpace = 173;
	world.gridBlocks[19].blockSpaces[5].southSpace = 179;
	world.gridBlocks[19].blockSpaces[5].eastSpace  = -1;
	world.gridBlocks[19].blockSpaces[5].westSpace  = 175;

	//Block Space 6
	world.gridBlocks[19].blockSpaces[6].northSpace = 174;
	world.gridBlocks[19].blockSpaces[6].southSpace = 216;
	world.gridBlocks[19].blockSpaces[6].eastSpace  = 178;
	world.gridBlocks[19].blockSpaces[6].westSpace  = 170;

	//Block Space 7
	world.gridBlocks[19].blockSpaces[7].northSpace = 175;
	world.gridBlocks[19].blockSpaces[7].southSpace = 217;
	world.gridBlocks[19].blockSpaces[7].eastSpace  = 179;
	world.gridBlocks[19].blockSpaces[7].westSpace  = 177;

	
	//Block Space 8 
	world.gridBlocks[19].blockSpaces[8].northSpace = 176;
	world.gridBlocks[19].blockSpaces[8].southSpace = 218;
	world.gridBlocks[19].blockSpaces[8].eastSpace  = -1;
	world.gridBlocks[19].blockSpaces[8].westSpace  = 178;


//Block U
	//Block Space 0
	world.gridBlocks[20].blockSpaces[0].northSpace = 141;
	world.gridBlocks[20].blockSpaces[0].southSpace = 183;
	world.gridBlocks[20].blockSpaces[0].eastSpace  = 181;
	world.gridBlocks[20].blockSpaces[0].westSpace  = -1;

	//Block Space 1
	world.gridBlocks[20].blockSpaces[1].northSpace = 142;
	world.gridBlocks[20].blockSpaces[1].southSpace = 184;
	world.gridBlocks[20].blockSpaces[1].eastSpace  = 182;
	world.gridBlocks[20].blockSpaces[1].westSpace  = 180;

	//Block Space 2
	world.gridBlocks[20].blockSpaces[2].northSpace = 143;
	world.gridBlocks[20].blockSpaces[2].southSpace = 185;
	world.gridBlocks[20].blockSpaces[2].eastSpace  = 189;
	world.gridBlocks[20].blockSpaces[2].westSpace  = 181;

	//Block Space 3
	world.gridBlocks[20].blockSpaces[3].northSpace = 180;
	world.gridBlocks[20].blockSpaces[3].southSpace = 186;
	world.gridBlocks[20].blockSpaces[3].eastSpace  = 184;
	world.gridBlocks[20].blockSpaces[3].westSpace  = -1;

	//Block Space 4
	world.gridBlocks[20].blockSpaces[4].northSpace = 181 ;
	world.gridBlocks[20].blockSpaces[4].southSpace = 187;
	world.gridBlocks[20].blockSpaces[4].eastSpace  = 185;
	world.gridBlocks[20].blockSpaces[4].westSpace  = 183;

	//Block Space 5
	world.gridBlocks[20].blockSpaces[5].northSpace = 182;
	world.gridBlocks[20].blockSpaces[5].southSpace = 188;
	world.gridBlocks[20].blockSpaces[5].eastSpace  = 192;
	world.gridBlocks[20].blockSpaces[5].westSpace  = 184;

	//Block Space 6
	world.gridBlocks[20].blockSpaces[6].northSpace = 183;
	world.gridBlocks[20].blockSpaces[6].southSpace = -1;
	world.gridBlocks[20].blockSpaces[6].eastSpace  = 187;
	world.gridBlocks[20].blockSpaces[6].westSpace  = -1;

	//Block Space 7
	world.gridBlocks[20].blockSpaces[7].northSpace = 184;
	world.gridBlocks[20].blockSpaces[7].southSpace = -1;
	world.gridBlocks[20].blockSpaces[7].eastSpace  = 188;
	world.gridBlocks[20].blockSpaces[7].westSpace  = 186;

	
	//Block Space 8;
	world.gridBlocks[20].blockSpaces[8].northSpace = 185;
	world.gridBlocks[20].blockSpaces[8].southSpace = -1;
	world.gridBlocks[20].blockSpaces[8].eastSpace  = 195;
	world.gridBlocks[20].blockSpaces[8].westSpace  = 187;


//Block V
	//Block Space 0
	world.gridBlocks[21].blockSpaces[0].northSpace = 150;
	world.gridBlocks[21].blockSpaces[0].southSpace = 192;
	world.gridBlocks[21].blockSpaces[0].eastSpace  = 190;
	world.gridBlocks[21].blockSpaces[0].westSpace  = 182;

	//Block Space 1
	world.gridBlocks[21].blockSpaces[1].northSpace = 151;
	world.gridBlocks[21].blockSpaces[1].southSpace = 193;
	world.gridBlocks[21].blockSpaces[1].eastSpace  = 191;
	world.gridBlocks[21].blockSpaces[1].westSpace  = 189;

	//Block Space 2;
	world.gridBlocks[21].blockSpaces[2].northSpace = 152;
	world.gridBlocks[21].blockSpaces[2].southSpace = 194;
	world.gridBlocks[21].blockSpaces[2].eastSpace  = 198;
	world.gridBlocks[21].blockSpaces[2].westSpace  = 190;

	//Block Space 3
	world.gridBlocks[21].blockSpaces[3].northSpace = 189;
	world.gridBlocks[21].blockSpaces[3].southSpace = 195;
	world.gridBlocks[21].blockSpaces[3].eastSpace  = 193;
	world.gridBlocks[21].blockSpaces[3].westSpace  = 185;

	//Block Space 4
	world.gridBlocks[21].blockSpaces[4].northSpace = 190;
	world.gridBlocks[21].blockSpaces[4].southSpace = 196;
	world.gridBlocks[21].blockSpaces[4].eastSpace  = 194;
	world.gridBlocks[21].blockSpaces[4].westSpace  = 192;

	//Block Space 5
	world.gridBlocks[21].blockSpaces[5].northSpace = 191;
	world.gridBlocks[21].blockSpaces[5].southSpace = 197;
	world.gridBlocks[21].blockSpaces[5].eastSpace  = 201;
	world.gridBlocks[21].blockSpaces[5].westSpace  = 193;
;
	//Block Space 6
	world.gridBlocks[21].blockSpaces[6].northSpace = 192;
	world.gridBlocks[21].blockSpaces[6].southSpace = -1;
	world.gridBlocks[21].blockSpaces[6].eastSpace  = 196;
	world.gridBlocks[21].blockSpaces[6].westSpace  = 188;

	//Block Space 7
	world.gridBlocks[21].blockSpaces[7].northSpace = 193;
	world.gridBlocks[21].blockSpaces[7].southSpace = -1;
	world.gridBlocks[21].blockSpaces[7].eastSpace  = 197;
	world.gridBlocks[21].blockSpaces[7].westSpace  = 195;

	
	//Block Space 8
	world.gridBlocks[21].blockSpaces[8].northSpace = 194;
	world.gridBlocks[21].blockSpaces[8].southSpace = -1;
	world.gridBlocks[21].blockSpaces[8].eastSpace  = 204;
	world.gridBlocks[21].blockSpaces[8].westSpace  = 196;


//Block W
	//Block Space 0
	world.gridBlocks[22].blockSpaces[0].northSpace = 159;
	world.gridBlocks[22].blockSpaces[0].southSpace = 201;
	world.gridBlocks[22].blockSpaces[0].eastSpace  = 199;
	world.gridBlocks[22].blockSpaces[0].westSpace  = 191;

	//Block Space 1
	world.gridBlocks[22].blockSpaces[1].northSpace = 160;
	world.gridBlocks[22].blockSpaces[1].southSpace = 202;
	world.gridBlocks[22].blockSpaces[1].eastSpace  = 200;
	world.gridBlocks[22].blockSpaces[1].westSpace  = 198;

	//Block Space 2
	world.gridBlocks[22].blockSpaces[2].northSpace = 161;
	world.gridBlocks[22].blockSpaces[2].southSpace = 203;
	world.gridBlocks[22].blockSpaces[2].eastSpace  = 207;
	world.gridBlocks[22].blockSpaces[2].westSpace  = 199;

	//Block Space 3
	world.gridBlocks[22].blockSpaces[3].northSpace = 198;
	world.gridBlocks[22].blockSpaces[3].southSpace = 204;
	world.gridBlocks[22].blockSpaces[3].eastSpace  = 202;
	world.gridBlocks[22].blockSpaces[3].westSpace  = 194;

	//Block Space 4
	world.gridBlocks[22].blockSpaces[4].northSpace = 199;
	world.gridBlocks[22].blockSpaces[4].southSpace = 205;
	world.gridBlocks[22].blockSpaces[4].eastSpace  = 203;
	world.gridBlocks[22].blockSpaces[4].westSpace  = 201;

	//Block Space 5
	world.gridBlocks[22].blockSpaces[5].northSpace = 200;
	world.gridBlocks[22].blockSpaces[5].southSpace = 206;
	world.gridBlocks[22].blockSpaces[5].eastSpace  = 210;
	world.gridBlocks[22].blockSpaces[5].westSpace  = 202;

	//Block Space 6
	world.gridBlocks[22].blockSpaces[6].northSpace = 201;
	world.gridBlocks[22].blockSpaces[6].southSpace = -1;
	world.gridBlocks[22].blockSpaces[6].eastSpace  = 205;
	world.gridBlocks[22].blockSpaces[6].westSpace  = 197;

	//Block Space 7
	world.gridBlocks[22].blockSpaces[7].northSpace = 202;
	world.gridBlocks[22].blockSpaces[7].southSpace = -1;
	world.gridBlocks[22].blockSpaces[7].eastSpace  = 206;
	world.gridBlocks[22].blockSpaces[7].westSpace  = 204;

	
	//Block Space 8
	world.gridBlocks[22].blockSpaces[8].northSpace = 203;
	world.gridBlocks[22].blockSpaces[8].southSpace = -1;
	world.gridBlocks[22].blockSpaces[8].eastSpace  = 213;
	world.gridBlocks[22].blockSpaces[8].westSpace  = 205;


//Block X
	//Block Space 0
	world.gridBlocks[23].blockSpaces[0].northSpace = 168;
	world.gridBlocks[23].blockSpaces[0].southSpace = 210;
	world.gridBlocks[23].blockSpaces[0].eastSpace  = 208;
	world.gridBlocks[23].blockSpaces[0].westSpace  = 200;

	//Block Space 1
	world.gridBlocks[23].blockSpaces[1].northSpace = 169;
	world.gridBlocks[23].blockSpaces[1].southSpace = 211;
	world.gridBlocks[23].blockSpaces[1].eastSpace  = 209;
	world.gridBlocks[23].blockSpaces[1].westSpace  = 207;

	//Block Space 2
	world.gridBlocks[23].blockSpaces[2].northSpace = 170;
	world.gridBlocks[23].blockSpaces[2].southSpace = 212;
	world.gridBlocks[23].blockSpaces[2].eastSpace  = 216;
	world.gridBlocks[23].blockSpaces[2].westSpace  = 208;

	//Block Space 3
	world.gridBlocks[23].blockSpaces[3].northSpace = 207;
	world.gridBlocks[23].blockSpaces[3].southSpace = 213;
	world.gridBlocks[23].blockSpaces[3].eastSpace  = 211;
	world.gridBlocks[23].blockSpaces[3].westSpace  = 203;

	//Block Space 4
	world.gridBlocks[23].blockSpaces[4].northSpace = 208;
	world.gridBlocks[23].blockSpaces[4].southSpace = 214;
	world.gridBlocks[23].blockSpaces[4].eastSpace  = 212;
	world.gridBlocks[23].blockSpaces[4].westSpace  = 210;

	//Block Space 5
	world.gridBlocks[23].blockSpaces[5].northSpace = 209;
	world.gridBlocks[23].blockSpaces[5].southSpace = 215;
	world.gridBlocks[23].blockSpaces[5].eastSpace  = 219;
	world.gridBlocks[23].blockSpaces[5].westSpace  = 211;

	//Block Space 6
	world.gridBlocks[23].blockSpaces[6].northSpace = 210;
	world.gridBlocks[23].blockSpaces[6].southSpace = -1;
	world.gridBlocks[23].blockSpaces[6].eastSpace  = 214;
	world.gridBlocks[23].blockSpaces[6].westSpace  = 206;

	//Block Space 7
	world.gridBlocks[23].blockSpaces[7].northSpace = 211;
	world.gridBlocks[23].blockSpaces[7].southSpace = -1;
	world.gridBlocks[23].blockSpaces[7].eastSpace  = 215;
	world.gridBlocks[23].blockSpaces[7].westSpace  = 213;

	
	//Block Space 8
	world.gridBlocks[23].blockSpaces[8].northSpace = 212;
	world.gridBlocks[23].blockSpaces[8].southSpace = -1;
	world.gridBlocks[23].blockSpaces[8].eastSpace  = 222;
	world.gridBlocks[23].blockSpaces[8].westSpace  = 214;


//Block Y
	//Block Space 0
	world.gridBlocks[24].blockSpaces[0].northSpace = 177;
	world.gridBlocks[24].blockSpaces[0].southSpace = 219;
	world.gridBlocks[24].blockSpaces[0].eastSpace  = 217;
	world.gridBlocks[24].blockSpaces[0].westSpace  = 209;

	//Block Space 1
	world.gridBlocks[24].blockSpaces[1].northSpace = 178;
	world.gridBlocks[24].blockSpaces[1].southSpace = 220;
	world.gridBlocks[24].blockSpaces[1].eastSpace  = 218;
	world.gridBlocks[24].blockSpaces[1].westSpace  = 216;

	//Block Space 2
	world.gridBlocks[24].blockSpaces[2].northSpace = 179;
	world.gridBlocks[24].blockSpaces[2].southSpace = 221;
	world.gridBlocks[24].blockSpaces[2].eastSpace  = -1;
	world.gridBlocks[24].blockSpaces[2].westSpace  = 217;

	//Block Space 3
	world.gridBlocks[24].blockSpaces[3].northSpace = 216;
	world.gridBlocks[24].blockSpaces[3].southSpace = 222;
	world.gridBlocks[24].blockSpaces[3].eastSpace  = 220;
	world.gridBlocks[24].blockSpaces[3].westSpace  = 212;

	//Block Space 4
	world.gridBlocks[24].blockSpaces[4].northSpace = 217;
	world.gridBlocks[24].blockSpaces[4].southSpace = 223;
	world.gridBlocks[24].blockSpaces[4].eastSpace  = 221;
	world.gridBlocks[24].blockSpaces[4].westSpace  = 219;

	//Block Space 5
	world.gridBlocks[24].blockSpaces[5].northSpace = 218;
	world.gridBlocks[24].blockSpaces[5].southSpace = 224;
	world.gridBlocks[24].blockSpaces[5].eastSpace  = -1;
	world.gridBlocks[24].blockSpaces[5].westSpace  = 220;

	//Block Space 6
	world.gridBlocks[24].blockSpaces[6].northSpace = 219;
	world.gridBlocks[24].blockSpaces[6].southSpace = -1;
	world.gridBlocks[24].blockSpaces[6].eastSpace  = 223;
	world.gridBlocks[24].blockSpaces[6].westSpace  = 215;

	//Block Space 7
	world.gridBlocks[24].blockSpaces[7].northSpace = 220;
	world.gridBlocks[24].blockSpaces[7].southSpace = -1;
	world.gridBlocks[24].blockSpaces[7].eastSpace  = 224;
	world.gridBlocks[24].blockSpaces[7].westSpace  = 222;
	
	
	//Block Space 8;
	world.gridBlocks[24].blockSpaces[8].northSpace = 221;
	world.gridBlocks[24].blockSpaces[8].southSpace = -1;
	world.gridBlocks[24].blockSpaces[8].eastSpace  = -1;
	world.gridBlocks[24].blockSpaces[8].westSpace  = 223;
}