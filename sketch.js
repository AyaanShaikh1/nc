
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobDiameter = 100;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bob1 = new bob(360,400,70,70);
	roof1 = new roof(400,200,240,20);
	chain1 = new rope (bob1.body,roof1.body,0);
	
	bob2 = new bob(380,400,70,70);
	chain2 = new rope (bob2.body,roof1.body,0);
	
	bob3 = new bob(400,400,70,70);
	chain3 = new rope (bob3.body,roof1.body,0);

	
	bob4 = new bob(420,400,70,70);
	chain4 = new rope (bob4.body,roof1.body,0);
	
	bob5 = new bob(440,400,70,70);
	chain5 = new rope (bob5.body,roof1.body,0);
	
	ground = new roof(400,700,800,30);
	
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
   chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display(); 
  bob5.display();
  ground.display();
  roof1.display();
 
  drawSprites();
 
}



