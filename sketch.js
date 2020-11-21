StaticRect,MovingRect;


function setup() {
  createCanvas(1200,800);
  StaticRect=createSprite(400, 200, 50, 50);
  MovingRect=createSprite(200,50,50,50)
  StaticRect.shapeColor="green";
  MovingRect.shapeColor="green";
}

function draw() {
  background(0);
  MovingRect.y=World.mouseY;
  MovingRect.x= World.mouseX;
  console.log(StaticRect.width/2+MovingRect.width/2) ;
  console.log(MovingRect.x-StaticRect.x);
  if(MovingRect.x-StaticRect.x<MovingRect.width/2+StaticRect.width/2
    &&
    StaticRect.x-MovingRect.x<MovingRect.width/2+StaticRect.width/2
    &&
    MovingRect.y-StaticRect.y<MovingRect.height/2+StaticRect.height/2
    &&
    StaticRect.y-MovingRect.y<MovingRect.height/2+StaticRect.height/2){
    
    MovingRect.shapeColor="red";
    StaticRect.shapeColor="red";
  }
  else{
    StaticRect.shapeColor="green";
    MovingRect.shapeColor="green";
  }
  drawSprites();
}