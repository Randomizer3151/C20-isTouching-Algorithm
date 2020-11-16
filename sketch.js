var movingRect;
var stillRect;

function setup() {
  createCanvas(800,400);
  movingRect=createSprite(400,200,80,30);
  stillRect=createSprite(200,200,50,80);
  movingRect.shapeColor="teal";
  stillRect.shapeColor="teal";
}

function draw() {
  background(0);
 movingRect.x=World.mouseX;
 movingRect.y=World.mouseY;
 if(movingRect.x-stillRect.x<movingRect.width/2+stillRect.width/2 &&
  stillRect.x-movingRect.x<movingRect.width/2+stillRect.width/2 &&
  stillRect.y-movingRect.y<movingRect.height/2+stillRect.height/2 &&
  movingRect.y-stillRect.y<movingRect.height/2+stillRect.height/2

  ){
  movingRect.shapeColor="red";
  stillRect.shapeColor="red";
 }
 else{
  movingRect.shapeColor="teal";
  stillRect.shapeColor="teal";
}
  drawSprites();
}