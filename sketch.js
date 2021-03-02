var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

    bottomSprite=createSprite(width/2,650,200,20);
	bottomSprite.shapeColor="red";

	leftSprite=createSprite((width/2)-90,610,20,100);
	leftSprite.shapeColor="red";

	rightSprite=createSprite((width/2)+90,610,20,100);
	rightSprite.shapeColor="red";

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 20 , {restitution:0.8, isStatic:true});
	World.add(world, packageBody);
	
    bottomBody=Bodies.rectangle(width/2,650,200,20,{isStatic:true})
	World.add(world, bottomBody);

	leftSpriteb=Bodies.rectangle((width/2)-90,650,10,100,{isStatic:true})
	World.add(world, leftSpriteb);

	rightSpriteb=Bodies.rectangle((width/2)+90,650,10,100,{isStatic:true})
	World.add(world, rightSpriteb);
	



	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);

  background(0);
  rectMode(CENTER);
  rect(bottomBody.position.x,bottomBody.position.y,200,20);

  rectMode(CENTER);
  rect(leftSprite.position.x,leftSprite.position.y,10,100);

  rectMode(CENTER);
  rect(rightSprite.position.x,rightSprite.position.y,10,100);

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false)    
  }
}



