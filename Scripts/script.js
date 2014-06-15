	var dices = new DiceRoller();
	var currentColor='white';
	var contextDices = document.getElementById('canvas-dices').getContext("2d");

	function roll(){
		dices.animateRollingDices(0,0,currentColor);
}