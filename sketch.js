
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var groundObj

function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    
	groundObj = new Ground(width/2,670,width,20);
    leftSide = new Ground(1100,600,20,120);
    rightSide = new Ground(1400,600,20,120);

	var ball_options={
	isStatic:false,
	restitution:0.5,
	friction:0,
	density:1.2
	}
    
	ball=Bodies.circle(200,200,15,ball_options);

	World.add(world,ball);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS)
  background(0);
  
  drawSprites();
  groundObj.display();
  leftSide.display();
  rightSide.display();
  
  push ();
  fill("white");
  ellipse(ball.position.x,ball.position.y,15,15);
  pop ();
}

function keyPressed (){
	if(keyCode === UP_ARROW){
      Matter.Body.applyForce(ball,{x:0,y:0},{x:50,y:-50})
	}
}



