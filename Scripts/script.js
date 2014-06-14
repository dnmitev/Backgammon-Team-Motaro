var dices = new DiceRoller();
var currentColor='white'
dices.animateRollingDices(0,0,currentColor);
var contextDices = document.getElementsByTagName('canvas')[1].getContext("2d");

function roll(){
	/*contextDices.clearRect(0,0,150,60);
	var color;
	if(dices.gotPair()==false){
		currentColor*=-1;
	}
	switch(currentColor)
	{
	case 1:
		color='white';
		
		break;
	case -1:
		color='black';
		
		break;
	}*/
	
	dices.animateRollingDices(0,0,currentColor);

}