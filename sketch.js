
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var rope1

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ConstraintBob = new Roof (230,180,80,PI/2)


	bob1 = new Bob(100,100,50)
	bob2 = new Bob(100,100,50)
	bob3 = new Bob(100,100,50)
	bob4 = new Bob(100,100,50)
	bob5 = new Bob(100,100,50)

	roof1  = new Roof(width/2,370,width,20)

	rope1 = new Rope(bob1.body,roof1.body-100)

	chain1= new Rope(roof1,ConstraintBob.body)

	

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

	bob1.display()
	bob2.display()
	bob3.display()
	bob4.display()
	bob5.display()



  roof1.display()
  roof1.display()

  rope1.display()

  ConstraintBob.display()
  
  
  drawSprites();
 
}



