window.onload = function() {

	var stage = new Kinetic.Stage({
		container: 'container',
		width: 840,
		height: 600,
	});

	// Draw background image and text
	var backgroundLayer = new Kinetic.Layer();
	var backgroundImage = new Image();
	backgroundImage.onload = function() {
		var backgroundPattern = new Kinetic.Rect({
			width: stage.attrs.width,
			height: stage.attrs.height,
			fillPatternImage: backgroundImage,
			stroke: 'black',
			strokeWidth: 3,
		});

		backgroundLayer.add(backgroundPattern);
		stage.add(backgroundLayer);

		drawText(125, 100, 'Backgammon', 100, 'brown');
		drawText(125, 500, 'Team Motaro', 40, 'black');
		drawImage('images/dices.png');


	}

	backgroundImage.src = 'images/background.jpg';

	function drawText(x, y, text, size, color) {
		var textLayer = new Kinetic.Layer();
		var gameTitle = new Kinetic.Text({
			x: x,
			y: y,
			text: text,
			fontSize: size,
			fontFamily: 'Comic Sans MS',
			'font-weight': 'bold',
			fill: color,
		});

		textLayer.add(gameTitle);
		stage.add(textLayer);
	}

	function drawImage(imageSrc) {
		var imageLayer = new Kinetic.Layer();
		var imageObj = new Image();

		imageObj.onload = function() {
			var image = new Kinetic.Image({
				x: 550,
				y: 350,
				image: imageObj,
				width: 256,
				height: 256,
			});

			imageLayer.add(image);
			stage.add(imageLayer);
		} 

		imageObj.src = imageSrc;
	}

	// Draw game menu
	var menu = new Menu(stage.attrs.width / 2 - 50 , 300);

	menu.addButton('start', onStartButtonClick);
	menu.addButton('exit', onExitButtonClick);

	function onStartButtonClick() {
		stage.clear();
		menu.clear();

		drawBoard();
		drawCheckers();
		dices.animateRollingDices(0, 0, currentColor);
	}

	function onExitButtonClick() {
		window.close();
	}
}