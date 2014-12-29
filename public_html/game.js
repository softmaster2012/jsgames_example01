window.onload = init;

var map;
var context;

var drawButton;
var clearButton;

var gameWidth;
var gameHeight;

var bg1 = new Image();
bg1.src = 'bg1.jpg';

function init() {
    map = document.getElementById('map');
    context = map.getContext('2d');
    
    drawButton = document.getElementById('drawButton');
    clearButton = document.getElementById('clearButton');
    
    drawButton.onclick = drawRect;
    clearButton.onclick = clearRect;
    
    gameWidth = 1095;
    gameHeight = 540;    
    drawBackground();
}

function drawRect() {    
    context.fillStyle = 'bisque';
    context.fillRect(10, 10, 20, 20);
}

function clearRect() {
    context.fillStyle = 'whitesmoke';
    context.fillRect(0, 0, gameWidth, gameHeight);
    drawBackground();
}

function drawBackground() {
    context.drawImage(bg1, 0, 0, 1024, 768, 0, 0, gameWidth, gameHeight);
}

