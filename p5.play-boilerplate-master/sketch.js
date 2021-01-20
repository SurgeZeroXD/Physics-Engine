const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine, world;
var object;
var ground;

function setup() {
  createCanvas(400,400);

engine=Engine.create();
world=engine.world;

var options={
  isStatic:true
}
object=Bodies.rectangle(200,100,50,50,options);

var groundOptions={
  isStatic:true
}
ground=Bodies.rectangle(200,390,200,20,groundOptions);
var ballOptions={
  restitution:1.0
}
World.add(world,object);

World.add(world,ground);
ball=Bodies.circle(100,100,30, ballOptions);


World.add(world,ball);

console.log(object.position.x);
}

function draw() {
  background("lightblue");  
 
 Engine.update(engine);
 
 //rect(200,200,50,50);
  rectMode(CENTER);

  
  rect(object.position.x, object.position.y,50,50);
  rect(ground.position.x, ground.position.y, 400,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20,20);
  
  drawSprites();
}