var Helicopterimg,helicoptersprite,packagesprite,packageimg;
var Packagebody,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {
  helicopterimg=loadImage("helicopter.png")
  packageimg=loadImage("package.png")
}



function setup() {
  createCanvas(800,700);
  rectMode(CENTER)
  packagesprite=createSprite(width/2,80,10,10)
  packagesprite.addImage(packageimg)
  packagesprite.scale=0.2

  helicoptersprite=createSprite(width/2,200,10,10)
  helicoptersprite.addImage(helicopterimg)
  helicoptersprite.scale=0.6

  engine = Engine.create();
  world = engine.world;
  
  packageBody=Bodies.circle(width/2,200,5,{restitution:0.4,isStatic:true})
  World.add(world,packageBody)

  ground=Bodies.rectangle(width/2,650,width,10,{isStatic:true})
  World.add(world,ground)
  Engine.run(engine)
}


function draw() 
{
  rectMode(CENTER)
  background(0);
  Engine.update(engine);
  packagesprite.x=packageBody.position.x
  packagesprite.y=packageBody.position.y
  drawSprites()
}
function keyPressed(){
  if(keyCode==DOWN_ARROW){
    Matter.Body.setStatic(packageBody,false)
}
}
