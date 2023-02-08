
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
groundObj.display();

function preload()
{
	
}

function setup() {
	createCanvas(1000, 900);


	engine = Engine.create();
	world = engine.world;

	var ball_options={
		isStatic:false
		restitution: 0.3
		friction:0
		density:1.2
	}

	//Create the Bodies Here.
    groundObj = new ground(width/2,670,width 20);
	leftSide = new ground(1100,600,20,120);

	Engine.run(engine);
  
}
function keyPressed(){
	if ( keyCode = UP_ARROW){
		Matter.Body.applyForce;
	}
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



