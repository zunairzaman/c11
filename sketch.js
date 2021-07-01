var road_image, road, boy, boy_running, invisibleLeft, invisibleRight;
function preload(){
  //pre-load images
road_image=loadImage("path.png");
boy_running=loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  road = createSprite(200,200)
  road.addImage(road_image);
  road.velocityY=4;
  road.scale=1.2;

  boy = createSprite(200,200);
  boy.addAnimation("running",boy_running);
  boy.scale=0.05;

  edges=createEdgeSprites();

  invisibleLeft = createSprite(50,400,20,1000)
  invisibleRight = createSprite(370,400,20,1000)

  invisibleLeft.visible=false;
  invisibleRight.visible=false;
}

function draw() {
  background(0);
  if(road.y>400){
    road.y=height/2;
  }
  boy.x=World.mouseX;
  boy.collide(invisibleLeft);
  boy.collide(invisibleRight);
drawSprites();
}
