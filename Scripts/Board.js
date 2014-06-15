function drawBoard() {

    /// <reference path="_references.js" />

    var field = Raphael(0, 0, 840, 600);

    var frame = field.rect(0, 0, 840, 600)
                .attr({
                    fill: "url('/images/wood.jpg')"
                });

    var playField = field.rect(63, 40, 715, 520)
                .attr({
                    fill: "brown"
                });
    for (var x = 63; x < 778; x += 55) {
        if (x < 393) {

            if (parseInt(x / 55) % 2 === 0) {
                field.path('M ' + x + ' 40 L ' + (x + 27) + ' 260 L ' + (x + 55) + ' 40')
                    .attr({
                        fill: "#BDB76B"
                    });
            } else {
                field.path('M ' + x + ' 40 L ' + (x + 27) + ' 260 L ' + (x + 55) + ' 40')
                    .attr({
                        fill: "#8B4513"
                    });
            }

            if (parseInt(x / 55) % 2 === 0) {
                field.path('M ' + x + ' 560 L ' + (x + 27) + ' 340 L ' + (x + 55) + ' 560')
                    .attr({
                        fill: "#8B4513"
                    });
            } else {
                field.path('M ' + x + ' 560 L ' + (x + 27) + ' 340 L ' + (x + 55) + ' 560')
                    .attr({
                        fill: "#BDB76B"
                    });
            }


        } else if (x > 393) {
            if (parseInt(x / 55) % 2 === 0) {
                field.path('M ' + x + ' 40 L ' + (x + 27) + ' 260 L ' + (x + 55) + ' 40')
                    .attr({
                        fill: "#8B4513"
                    });
            } else {
                field.path('M ' + x + ' 40 L ' + (x + 27) + ' 260 L ' + (x + 55) + ' 40')
                    .attr({
                        fill: "#BDB76B"
                    });
            }

            if (parseInt(x / 55) % 2 === 0) {
                field.path('M ' + x + ' 560 L ' + (x + 27) + ' 340 L ' + (x + 55) + ' 560')
                    .attr({
                        fill: "#BDB76B"
                    });
            } else {
                field.path('M ' + x + ' 560 L ' + (x + 27) + ' 340 L ' + (x + 55) + ' 560')
                    .attr({
                        fill: "#8B4513"
                    });
            }
        }

        else {

            field.path('M ' + (x + 27) + ' 40 C350 200 500 400 ' + (x + 27) + ' 560')
                .attr({
                    fill: "#CD5C5C",
                    stroke: "#800000"
                });

            field.path('M ' + (x + 27) + ' 40 L ' + (x + 27) + ' 560')
                .attr({
                    stroke: "#800000"
                });

        }
    }
}