$(document).ready(function () {

    var context;
    var squareInterval = 0;

    var squareWidth = 20;
    var squareHeight = 20;

    /*начальные координаты*/
    var squareX = 0;
    var squareY = 0;
    /*начальные координаты*/

    var squareDx = 1;
    /*increment*/
    var squareDy = 3;
    /*increment*/
    
    var squarePosX;
    var squarePosY;
    

    var square = $('#square');
    var squareCanvasWidth = square.width() / 2;
    var squareCanvasHeight = square.height() / 2;
    
    

    function drawSquare(x, y, width, height) {
        context.beginPath();
        context.rect(x, y, width, height);
        context.fill();
        context.fillStyle = "#66CDAA";
        moveSquare(x, y);
    }
    function squareWall () {
        if (squareDx < 0) {
            squarePosX = "left wall";
        }
        else {
            squarePosX = "right wall";
        }
        if (squareDy < 0) {
            squarePosY = "upper wall";
        }
        else {
            squarePosY = "lower wall";
        }
    }

    function moveSquare() {
        if (squareX + squareWidth - squareDx > squareCanvasWidth || squareX - squareDx < 0) {
            squareDx = -squareDx;
        }
        if (squareY + squareHeight - squareDy > squareCanvasHeight || squareY - squareDy < 0) {
            squareDy = -squareDy;
        }
        squareWall();
        
        squareX -= squareDx;
        squareY -= squareDy;
        $('.square-text').html('last tuch x: ' + squarePosX + '<br>last tuch y: ' + squarePosY
            + '<br>x: ' + squareX + '<br>y: ' + squareY);
    }

    function clearSquare() {
        context.clearRect(0, 0, squareCanvasWidth, squareCanvasHeight);
    }

    function initSquareDraw() {
        clearSquare();
        drawSquare(squareX, squareY, squareWidth, squareHeight);
    }

    function initSquare() {
        context = document.getElementById("square").getContext("2d");
        return setInterval(initSquareDraw, 20);
    }

    $('.square-start-button').on('click', function () {
        if (squareInterval == 0) {
            squareInterval = initSquare();
        }
    });

    $('.square-stop-button').on('click', function () {
        clearInterval(squareInterval);
        squareInterval = 0;
    });
});