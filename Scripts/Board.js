/// <reference path="_references.js" />

var field = Raphael(0, 0, 840, 600);

var frame = field.rect(0, 0, 840, 600)
            .attr({
                fill: 'lightblue'
            });
var playField = field.rect(63, 40, 715, 520)
            .attr({
                fill: 'white'
            });
for (var x = 63; x < 778; x += 55) {
    if (x !== 393) {

        field.path('M ' + x + ' 40 L ' + (x + 27) + ' 260 L ' + (x + 55) + ' 40');

        field.path('M ' + x + ' 560 L ' + (x + 27) + ' 340 L ' + (x + 55) + ' 560');

    }
}