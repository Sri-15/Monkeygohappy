
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score = 0
var ground

function preload(){
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
}
function setup() {
createCanvas(400,400);
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;
  

ground = createSprite(400,350,900,10)
ground.velocityX = -6;
ground.x=ground.width/2;
  
bananaGroup = new Group();
obstacleGroup = new Group();
}


function draw() {
background("white");
if(keyDown("space")){
  monkey.velocityY=-15;
}
monkey.velocityY = monkey.velocityY + 1.5;
if(ground.x<0){
  ground.x = ground.width/2
}
monkey.collide(ground);  
  
drawSprites()
obstacles();  
food();
if(obstacleGroup.isTouching(monkey)){
  bananaGroup.setVelocityXEach(0);
  obstacleGroup.setVelocityXEach(0);
  ground.velocityX = 0;
  monkey.velocityY = 0;
  obstacleGroup.setLifetimeEach(-1);
  bananaGroup.setLifetimeEach(-1);
}
stroke("white");
textSize(20);
fill("black");
text("Score: " + score, 500, 50);
stroke("black");
textSize(20);
fill("black");
survivalTime = Math.ceil(frameCount / frameRate())
text("Survival Time: " + survivalTime, 100, 50);
}

function food(){
  if(frameCount%80===0){
   banana=createSprite(400,Math.round(random(120,200)))
  banana.addImage(bananaImage);
  banana.velocityX=-3
  banana.lifetime = 133
  banana.scale=0.1
  monkey.depth = banana.depth + 1;
  bananaGroup.add(banana);
  }
}
function obstacles(){
  if(frameCount%300 === 0){
    obstacle = createSprite(800,320,10,40)
    obstacle.velocityX = -6;
    obstacle.addImage(obstacleImage)
    obstacle.scale = 0.2;
    obstacle.lifetime = 400;
    obstacleGroup.add(obstacle);
  }
}




