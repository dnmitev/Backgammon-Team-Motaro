/// <reference path="_references.js" />
function Checker(player) {
    this.player = player;
}

Checker.prototype.getPlayer = function () {
    return this.player;
}

Checker.prototype.drawWhite = function () {
    var stage = new Kinetic.Stage({
        container: 'container',
        width: 100,
        height: 100
    });

    var layer = new Kinetic.Layer();

    var whiteChecker = new Kinetic.Circle({
        x: 200,
        y: 100,
        radius: 25,
        fill: "white",
        stroke: "black",
        strokeWidth: 4,
        draggable: true
    });

    // add the shape to the layer
    layer.add(whiteChecker);

    // add the layer to the stage
    stage.add(layer);

    //whiteChecker.on('dragend', function () {
    //    console.log(whiteChecker.getAbsolutePosition());
    //});
}

Checker.prototype.getCoordinates = function () {
    Checker.on('dragend', function () {
        return {
            x: Checker.
        }
    });
}