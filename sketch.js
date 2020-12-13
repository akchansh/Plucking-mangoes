
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var tree, treeimg
var boy,boyimg
function preload()
{
	treeimg = loadImage("image/tree.png")
	boyimg = loadImage("image/boy.png")
}

function setup() {
	createCanvas(1025, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree = createSprite(790,250)
	tree.addImage(treeimg)
	tree.scale = 0.4
	boy = createSprite(225,435,10,10)
	boy.addImage(boyimg)
	boy.scale = 0.1
	stone = new Stone(173,378,50,50)
	chain = new SlingShot(stone.body,{x : 173, y : 378})
	ground = new Ground(400,495,10000,10)
	mango1 = new Mango(652,165,50,50)
	mango2 = new Mango(741,73,50,50)
	mango3 = new Mango(724,170,50,50)
	mango4 = new Mango(825,44,50,50)
	mango5 = new Mango(800,155,50,50)
	mango6 = new Mango(879,153,50,50)
	mango7 = new Mango(956,199,50,50)
	mango8 = new Mango(921,117,50,50)
	mango9 = new Mango(872,78,50,50)

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(255,255,255);
  drawSprites();

  ground.display();
  stone.display()
  chain.display()
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  mango6.display()
  mango7.display()
  mango8.display()
  mango9.display()
  if (collides(stone,mango1)){
	Matter.Body.setStatic(mango1.body,false)
  }
  if (collides(stone,mango2)){
	Matter.Body.setStatic(mango2.body,false)
  }
  if (collides(stone,mango3)){
	Matter.Body.setStatic(mango3.body,false)
  }
  if (collides(stone,mango4)){
	Matter.Body.setStatic(mango4.body,false)
  }
  if (collides(stone,mango5)){
	Matter.Body.setStatic(mango5.body,false)
  }
  if (collides(stone,mango6)){
	Matter.Body.setStatic(mango6.body,false)
  }
  if (collides(stone,mango7)){
	Matter.Body.setStatic(mango7.body,false)
  }
  if (collides(stone,mango8)){
	Matter.Body.setStatic(mango8.body,false)
  }
  if (collides(stone,mango9)){
	Matter.Body.setStatic(mango9.body,false)
  }
  
  text(mouseX + "," + mouseY,mouseX,mouseY)
  text("Press Space to play again",165,60)
}



function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x: mouseX,y: mouseY})
}

function mouseReleased(){
    chain.fly();
}

function keyPressed(){
if (keyCode === 32){
	chain.attach(stone.body);
}
}

//function detectCollison(stone , mango){
	//MangoBodyPosition = mango.body.position
	//StoneBodyPosition = stone.body.position
	
	//var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	//if (distance<= mango.width + stone.width + mango.height + stone.height){
//		Matter.Body.setStatic(mango.body,false)
//	}
//	}

function collides(objA, objB){

	if (Math.abs(objA.body.position.x-objB.body.position.x) <= objA.width + objB.width && Math.abs(objA.body.position.y-objB.body.position.y) <= objA.width + objB.width){
	return true;
}
if (Math.abs(objA.body.position.x-objB.body.position.x) <= objA.height + objB.height && Math.abs(objA.body.position.y-objB.body.position.y) <= objA.height + objB.height){
	return true;
}
else {
	return false;
}

}
