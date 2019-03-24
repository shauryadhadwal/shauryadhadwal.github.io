var stage;
var squareSize = 60;

function init() {
    //resize canvas to full width and height
    var canvas = document.getElementsByTagName('canvas')[0];
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    stage = canvas.getContext('2d');

    var rows = Math.floor(canvas.height / squareSize);
    var cols = Math.floor(canvas.width / squareSize);
    console.log(rows, cols);

    var squares = new Array(rows);

    //Loop to create squares
    for (i = 0; i <= cols; i++) {
        squares[i] = new Array(cols);
        for (j = 0; j <= rows; j++) {
            stage.strokeStyle = "rgb(195, 206, 224)";
            squares[i][j] = stage.strokeRect(squareSize * i, squareSize * j, squareSize, squareSize);
        }
    }

    squares[5][5] = null;
}

function randomColor() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    return "rgb(" + x + "," + y + "," + z + ")";
}
