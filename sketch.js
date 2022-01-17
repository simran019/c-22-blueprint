const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground,tower;
var bgImage,towerImage;

var mycannon;
var rectangles_options={isStatic:true};

function preload() 
{
 bgImage=loadImage("assets/background.gif");

 towerImage=loadImage("assets/tower.png");
}
function setup() {

  canvas = createCanvas(1200, 600);

  engine = Engine.create();
  world = engine.world;
  
  

  ground=Bodies.rectangle(600,600,1200,2,rectangles_options);
  World.add(world,ground);

  tower=Bodies.rectangle(100,350,150,350,rectangles_options);
  World.add(world,tower);

  mycannon=new Cannon(100,100,150,100);
 
}

function draw()
 {
  background(189);

  imageMode(CENTER);
  image(bgImage,600,300,1200,600)
 
  Engine.update(engine);

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,1200,2);

  imageMode(CENTER);
  image(towerImage,tower.position.x,tower.position.y,150,350);

  mycannon.show();
   
}
