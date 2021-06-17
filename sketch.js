
const Engine = Matter.Engine;//universe
const World = Matter.World;//earth
const Bodies = Matter.Bodies;//object
const Body = Matter.Body;
var paper,ground;
var a,b,c;
function preload()
{
	
}

function setup() {
	createCanvas(600, 400);


	engine = Engine.create();//creating our own engine from matters Engine
	world = engine.world;//adding our own world to our engine

	//Create the Bodies Here
	paper = new Paper(120,200,20);
    ground = new Ground(300,390,600,10);
	a = new Dustbin(500,365,10,40);
	b = new Dustbin(550,365,10,40);
	c = new Dustbin(525,380,50,10);
	Engine.run(engine);
  
}
function draw() {
  //rectMode(CENTER);
  background(0);
  Engine.update(engine);
  
  paper.display();
  ground.display();
  a.display();
  b.display();
  c.display();
  //drawSprites();
}
function keyPressed(){
	if(keyCode === 32){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:50,y:-50});
	    console.log("hello");
	}
}