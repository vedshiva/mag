const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof = new Roof (400,60,450,30);
	
	ball1 = new Bob (30,360,20);
	ball2 = new Bob (70,360,20);
	ball3 = new Bob (85,360,20);
	ball4 = new Bob (120,360,20);
	ball5 = new Bob (150,360,20);

	rope1 = new Rope (ball1.body,roof.body,-10,20);
	rope2 = new Rope (ball2.body,roof.body,20,20);
	rope3 = new Rope (ball3.body,roof.body,40,20);
	rope4 = new Rope (ball4.body,roof.body,60,20);
	rope5 = new Rope (ball5.body,roof.body,80,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  roof.display();

  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();

  rope1.display ();
  rope2.display ();
  rope3.display ();
  rope4.display ();
  rope5.display ();
  
  drawSprites();
 
}

function mouseDragged (){
	Matter.Body.setPosition (ball1.body,{x:mouseX,y:mouseY}||ball2.body,{x:mouseX,y:mouseY}||ball3.body,{x:mouseX,y:mouseY}||ball4.body,{x:mouseX,y:mouseY}||ball5.body,{x:mouseX,y:mouseY})
	
}