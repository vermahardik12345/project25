
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1;
var ground1;
var bin1,bin2,bin3;
var bin4,bin4img;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
paper1=new paper(140,450,70);
ground1=new Ground(width/2,670,1600,20);
bin1=new Dustbin(756,630);	
//bin2=new Dustbin(1370,602,15,150);	
//bin3=new Dustbin(1210,602,15,150);	

  
}


function draw() {
 Engine.update(engine);
  background("white");
  drawSprites();
  
 console.log(mouseY);
 
  paper1.display();
 bin1.display(); 
  
   
  
   
  ground1.display();
  
  
 
  
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paper1.body,paper1.body.position,{x:135,y:-135});

  
	}
}


