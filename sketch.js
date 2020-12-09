var fix,moving;
var object1,object2,object3,object4;
function setup() {
  createCanvas(800,800);
  fix=createSprite(400, 200, 50, 50);
  fix.shapeColor="green";
  moving=createSprite(400,400,50,50)
  moving.shapeColor="green";

  object1=createSprite(100,280,50,50);
  object1.shapeColor="red";
  object2=createSprite(300,280,50,50);
  object2.shapeColor="red";
  object3=createSprite(500,280,50,50);
  object3.shapeColor="red";
  object4=createSprite(700,280,50,50);
  object4.shapeColor="red";
}

function draw() {
  background(255,12,250);
  moving.x=World.mouseX;
  moving.y=World.mouseY;
  if (IsTouching(moving,object3)){
    object3.shapeColor="blue";
    moving.shapeColor="blue";
  }else{
    object3.shapeColor="red";
    moving.shapeColor="green";
  }
  

  drawSprites();
}

  
