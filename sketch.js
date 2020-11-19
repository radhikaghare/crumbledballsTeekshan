
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, paperObject,groundObject	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	paperObject=new paper(200,450,40);
	groundObject=new ground(width/2,670,width,20);
	//Create a Ground
	
	Engine.run(engine);

	boxDown=createSprite(1200,600,300,20)
	boxLeft=createSprite(1050,575,20,70)
	boxRight=createSprite(1350,575,20,70)
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  
  paperObject.display();
  groundObject.display();
  
 
  drawSprites();
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
    
  	}
}