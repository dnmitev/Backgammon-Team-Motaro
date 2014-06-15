/// <reference path="_references.js" />
function drawCheckers() {
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
                var checkerIntervalStart = Math.floor((checker.getAbsolutePosition().x - 55) / 55);
                var newY = 530;
                if (checker.getAbsolutePosition().y < 300) {
                    var newY = 55;
                }
                if ((checkerIntervalStart >= 0 && checkerIntervalStart <= 5) || (checkerIntervalStart >= 7 && checkerIntervalStart <= 12)) {
                    checker.setAbsolutePosition({ x: checkerIntervalStart * 55 + 82, y: newY });
                } else {
                    checker.setAbsolutePosition({ x: 357, y: newY });
                }
                // if it is needed to use the coordinates after dragend
                // this can be used
                console.log(checker.getAbsolutePosition());
            });

            // add each checker to the layer
            layer.add(checker);
        }
    }

    // draw white checkers
    drawChecker("lightgray", 1, 742, 55, 20);
    drawChecker("lightgray", 1, 742, 95, 20);
    drawChecker("lightgray", 1, 82, 55, 20);
    drawChecker("lightgray", 1, 82, 95, 20);
    drawChecker("lightgray", 1, 82, 135, 20);
    drawChecker("lightgray", 1, 82, 175, 20);
    drawChecker("lightgray", 1, 82, 215, 20);
    drawChecker("lightgray", 1, 302, 530, 20);
    drawChecker("lightgray", 1, 302, 490, 20);
    drawChecker("lightgray", 1, 302, 450, 20);
    drawChecker("lightgray", 1, 467, 530, 20);
    drawChecker("lightgray", 1, 467, 490, 20);
    drawChecker("lightgray", 1, 467, 450, 20);
    drawChecker("lightgray", 1, 467, 410, 20);
    drawChecker("lightgray", 1, 467, 370, 20);

    // draw black checkers
    drawChecker("black", 1, 467, 215, 20);
    drawChecker("black", 1, 467, 175, 20);
    drawChecker("black", 1, 467, 135, 20);
    drawChecker("black", 1, 467, 95, 20);
    drawChecker("black", 1, 467, 55, 20);
    drawChecker("black", 1, 302, 135, 20);
    drawChecker("black", 1, 302, 95, 20);
    drawChecker("black", 1, 302, 55, 20);
    drawChecker("black", 1, 82, 530, 20);
    drawChecker("black", 1, 82, 490, 20);
    drawChecker("black", 1, 82, 450, 20);
    drawChecker("black", 1, 82, 410, 20);
    drawChecker("black", 1, 82, 370, 20);
    drawChecker("black", 1, 742, 530, 20);
    drawChecker("black", 1, 742, 490, 20);

    // add the layer to the stage and draw all the checkers
    stage.add(layer);
}


