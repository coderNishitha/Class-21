var fixedRect, movingRect;
var rect1,rect2;

function setup() {
  createCanvas(1200,800);
 /* fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;*/
  rect1=createSprite(400,200,30,80);
  rect2=createSprite(400,700,80,30);


 rect1.velocityY = +5;
rect2.velocityY = -5;
}

function draw() {
  background(0,0,0);  

  
  bounce(rect1,rect2);
  
  drawSprites();
}

