/// <reference path="_references.js" />
(function () {
    "use strict";

    var stage = new Kinetic.Stage({
        container: 'container',
        width: 840,
        height: 600
    });

    // this layer will contain all the checkers
    var layer = new Kinetic.Layer();

    function drawChecker(color, count, startPosX, startPosY, radius) {
        for (var i = 0; i < count; i += 1) {
            var checker = new Kinetic.Circle({
                x: startPosX,
                y: startPosY - 2 * i * radius,
                radius: radius,
                fill: color,
                stroke: "yellowgreen",
                strokeWidth: 4,
                draggable: true
            });

            checker.on('dragend', function () {
                // if it is needed to use the coordinates after dragend
                // this can be used
                console.log(checker.getAbsolutePosition());
            });

            // add each checker to the layer
            layer.add(checker);
        }
    }

    // draw white checkers
    drawChecker("lightgray", 2, 742, 95, 20);
    drawChecker("lightgray", 5, 82, 215, 20);
    drawChecker("lightgray", 3, 302, 530, 20);
    drawChecker("lightgray", 5, 467, 530, 20);

    // draw black checkers
    drawChecker("black", 5, 467, 215, 20);
    drawChecker("black", 3, 302, 135, 20);
    drawChecker("black", 5, 82, 530, 20);
    drawChecker("black", 2, 742, 530, 20);

    // add the layer to the stage and draw all the checkers
    stage.add(layer);
})();


