var Mia, Rover;
var bird,stone,fruit;
var ground;

function preload() {
appleImg = loadImage("images/apple.png");
bananaImg = loadImage("images/banana.png");
orangeImg = loadImage("images/orange.png");
pearImg = loadImage("images/pear.png");
}

function setup(){
    var canvas = createCanvas(1200,600);
   
    Mia = createSprite(50,500,50,50);
    ground = createSprite(600,600,1200,50)
   
}

function draw(){
    background("blue");
   
    if(keyDown(UP_ARROW)){
        Mia.velocityY = -8;
      }
      Mia.velocityY =  Mia.velocityY+0.5;
     
      if(keyDown(RIGHT_ARROW)){
        Mia.velocityX = +3;
      }
      if(keyDown(LEFT_ARROW)){
        Mia.velocityX = -3;
      }
      Mia.collide(ground);
      
    drawSprites();
}

