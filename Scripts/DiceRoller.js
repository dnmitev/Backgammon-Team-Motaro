function DiceRoller() {
  this.firstValue = null;
  this.secondValue = null;
  this.numberGenerator = new DiceNumberGenerator();
}
DiceRoller.prototype.animateNumber = function(x, y, color,number) {
  var context = document.getElementsByTagName('canvas')[0].getContext("2d");
  var nrGenerator = new DiceNumberGenerator();
  var sourceX=0;
  var sourceY=0;
  var img='';
   
    var randomNr = number;
    if(color==='white'){
		sourceX =0;
		sourceY =0;
	}else{
		sourceX =0;
		sourceY =64;
	}
	var imageObj = document.getElementById('dice');
   
    context.drawImage(imageObj, sourceX, sourceY,sourceX+64,sourceY+64,x,y,64,64);
	context.drawImage(imageObj, sourceX +(randomNr*64), sourceY,sourceX+64,sourceY+64,x,y,64,64);
  
 
}
DiceRoller.prototype.animateRandomNumber = function(x, y, color) {
 // var contextDices = document.getElementsByTagName('canvas')[1].getContext("2d");
  var nrGenerator = new DiceNumberGenerator();
  var sourceX=0;
  var sourceY=0;
  var img='';
  
  
    var randomNr = nrGenerator.generate();
    if(color==='white'){
		sourceX =0;
		sourceY =0;
	}else{
		sourceX =0;
		sourceY =64;
	}
	var imageObj = document.getElementById('dice');

	contextDices.drawImage(imageObj, sourceX, sourceY,sourceX+64,sourceY+64,x,y,64,64);
	contextDices.drawImage(imageObj, sourceX +(randomNr*64), sourceY,sourceX+64,sourceY+64,x,y,64,64);
	return randomNr;
}
DiceRoller.prototype.animateRollingDices = function(x,y,color){
	 
	 var dRoller = new DiceRoller();
	  
	 var count=0;
		if(!!color){
		  var intervalID = setInterval(function(){
							dices.firstValue = dRoller.animateRandomNumber(x,y,color);
							dices.secondValue =dRoller.animateRandomNumber(x+74,y,color);
							count++;
								if(count>=10){
									window.clearInterval(intervalID);
									count=0;
								}		
							},250);
		if(count>=15){
			window.clearInterval(intervalID);
			count=0;
		}		
					
		}else{
			var intervalID = setInterval(function(){
							dRoller.animateRandomNumber(x,y,'white');
							dRoller.animateRandomNumber(x+74,y,'black');
							count++;
								if(count>=15){
									window.clearInterval(intervalID);
									count=0;
								}		
							},250);
			
		 
		}
	 
}

DiceRoller.prototype.roll = function() {
  this.values = [];

  this.firstValue = this.numberGenerator.generate();
  this.secondValue = this.numberGenerator.generate();

  this.values.push(this.firstValue);
  this.values.push(this.secondValue);

  if (this.gotPair()) {
    this.values.push(this.firstValue);
    this.values.push(this.firstValue);
  }

}

DiceRoller.prototype.rollUntilNotPair = function() {
  this.roll();
  if (this.gotPair()) {
    this.rollUntilNotPair();
  }
}

DiceRoller.prototype.gotPair = function() {
  return (this.firstValue == this.secondValue);
}

DiceRoller.prototype.hasValue = function(value) {
  return (this.indexOfValue(value) != -1);
}

DiceRoller.prototype.useValue = function(value) {
  if (!this.hasValue(value)) {
    throw "Can't use value that is not available";
  }

  this.values.splice(this.indexOfValue(value), 1);
}

DiceRoller.prototype.valuesLeft = function() {
  return this.values.length;
}

DiceRoller.prototype.indexOfValue = function(value) {
  for (i = 0; i < this.values.length; i++) {
    if (this.values[i] == value) {
      return i;
    }
  }
  return -1;
}

DiceRoller.prototype.addValue = function(value) {
  this.values.push(value);
}
