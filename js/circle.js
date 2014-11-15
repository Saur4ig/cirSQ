$(document).ready(function () {

    var circleContext;
    var circleInterval = 0;

    /*начальные координаты*/
    var circleX = 10;
    var circleY = 10;
    var circleDiameter = 10;
    /*начальные координаты*/

    var circleDx = 1;
    var circleDy = 1;
    
    var circlePosX;
    var circlePosY;

    var circle = $('#circle');
    var circleCanvasWidth = circle.width() / 2;
    var circleCanvasHeight = circle.height() / 2;
    
    function circleWall() {
        if (circleDx > 0) {
            circlePosX = "left wall";
        }
        else {
            circlePosX = "right wall";
        }
        if (circleDy > 0) {
            circlePosY = "upper wall";
        }
        else {
            circlePosY = "lower wall";
        }
    }

    function circleLimit() {
        if (circleX + circleDiameter + circleDx > circleCanvasWidth || (circleX + circleDx) - circleDiameter < 0) {
            circleDx = -circleDx;
        }
        if (circleY + circleDiameter + circleDy > circleCanvasHeight || (circleY + circleDy) - circleDiameter < 0) {
            circleDy = -circleDy;
        }
        circleWall();
        
        circleX += circleDx;
        circleY += circleDy;
        $('.circle-text').html('last tuch x: ' + circlePosX + '<br>last tuch y: ' + circlePosY
            + '<br>x: ' + circleX + '<br>y: ' + circleY);
    }

    function drawCircle(x, y, d) {
        circleContext.beginPath();
        circleContext.arc(x, y, d, 0, Math.PI * 2, true);
        circleContext.fill();
        circleContext.fillStyle = "#2E8B57";
        circleLimit();
    }

    function clearCircle() {
        circleContext.clearRect(0, 0, circleCanvasWidth, circleCanvasHeight);
    }

    function initCircleDraw() {
        clearCircle();
        drawCircle(circleX, circleY, circleDiameter);
    }

    function initCircle() {
        circleContext = document.getElementById("circle").getContext("2d");
        return setInterval(initCircleDraw, 20);
    }

    $('.circle-start-button').on('click', function () {
        if(circleInterval == 0){
            circleInterval = initCircle();
        }
    });

    $('.circle-stop-button').on('click', function () {
        clearInterval(circleInterval);
        circleInterval = 0;
    });
});