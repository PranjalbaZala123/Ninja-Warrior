var Bg
var BgImg
var story
var ninja
var start
var gameOver

function preload(){
  BgImg = loadImage("images/Bg 1.jpeg");

}


function setup() {
  createCanvas(displayWidth,displayHeight);

  Bg = createSprite( displayWidth/2,displayHeight/2,displayWidth,displayHeight);
  Bg.addImage(BgImg);
  Bg.scale = 2.5;

}

function draw() {

  drawSprites();
}