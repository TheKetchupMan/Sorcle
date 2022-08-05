const canvas=document.getElementById("gameArea")
const ctx = canvas.getContext('2d')

let x = 100;
let y = 100;
let radius = 20;
let speed = 7.5;

let upPressed = false;
let downPressed = false;
let rightPressed = false;
let leftPressed = false;

function drawGame() {
  requestAnimationFrame(drawGame)
  clearScreen();
  inputs();
  boundaryCheck();
  drawSorcle();
}

function boundaryCheck(){
    //up
    if(y < radius) {
        y = radius;
    }
    //down
    if(y > canvas.height - radius) {
        y = canvas.height - radius;
    }
    //left
    if(x < radius) {
        x = radius;
    }
    //right
    if(x > canvas.width - radius) {
        x = canvas.width - radius;
}
}

function inputs() {
    //up
    if(upPressed) {
        y = y - speed;
    }
    //down
    if(downPressed) {
        y = y + speed;
    }
    //left
    if(leftPressed) {
        x = x - speed;
    }
    //right
    if(rightPressed) {
        x = x + speed;        
    }
}

function drawSorcle(){
    ctx.fillStyle ="blue";
    ctx.beginPath();
    ctx.arc(x,y, radius,0, Math.PI * 2)
    ctx.fill();
}

function clearScreen(){
    ctx.fillStyle = "black";
    ctx.fillRect(0,0, canvas.width, canvas.height)
}

document.body.addEventListener('keydown', keyDown);
document.body.addEventListener('keyup', keyUp);

function keyDown(event){
    //up
    if(event.keyCode == 38){
        upPressed = true;
    }
    //down
    if(event.keyCode == 40){
    downPressed = true;
    }
    //left
    if(event.keyCode == 37){
        leftPressed = true;
    }
    //right
    if(event.keyCode == 39){
        rightPressed = true;
    }
}

function keyUp(event){
    //up
    if(event.keyCode == 38){
        upPressed = false;
    }
    //down
    if(event.keyCode == 40){
        downPressed = false;
    }
    //left
    if(event.keyCode == 37){
        leftPressed = false;
    }
    //right
    if(event.keyCode == 39){
        rightPressed = false;
    }
}

drawGame()
