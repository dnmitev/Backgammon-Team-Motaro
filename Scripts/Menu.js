function Menu(x, y) {
	var buttonWidth = 100,
		buttonHeight = 50,
		buttonSpacing = 10,
		availablePositionX = x,
		availablePositionY = y;

	var paper = Raphael(0, 0, 840, 600),
		svgElements = document.getElementsByTagName('svg');

	svgElements[0].style.zIndex = "10";

	this.clear = function() {
		paper.clear()
		paper.remove();
	}

	this.addButton = function(text, callback) {
		paper.setStart();
		paper.rect(availablePositionX, availablePositionY, buttonWidth, buttonHeight)
			.attr({
				fill: 'darkred',
			});
		paper.text(availablePositionX + buttonWidth / 2, availablePositionY + buttonHeight / 2, text)
			.attr({
				'font-size': 30,
				'font-weight': 'bold',
				'font-family': 'Comic Sans MS',
				fill: 'black',
			})
			.node.setAttribute("pointer-events", "none");

		paper.setFinish()
			.hover(
				function() {
					this.attr({
						fill: 'white',
						cursor: 'pointer',
					});
				},
				function() {
					this.attr({
						fill: 'darkred',
					});
				}
			)
			.click(callback);

		availablePositionY += buttonHeight + buttonSpacing;

	}
}