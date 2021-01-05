const world = Matter.World;
const engine = Matter.Engine;
const bodies = Matter.Bodies;
var qwerty, offf, bird , net;

function setup() {
  createCanvas(800,800);

  offf = engine.create();

  qwerty = offf.world;

  var option = {

    isStatic : false,
    
    restitution : 1

    }

  
  bird = bodies.circle(400, 200, 10 , option);
  
  world.add(qwerty,bird);

  var netoption = {

    isStatic : true,
    
    restitution : 0.2555555555555555

    }

  
  net = bodies.rectangle(400, 700, 800 , 10, netoption);
  
  world.add(qwerty, net);

}

function draw() {
  background(255,255,255);  
  
  engine.update(offf);

  ellipseMode(RADIUS);

  ellipse(bird.position.x, bird.position.y, 10 , 10);

  rectMode(CENTER);

  rect(net.position.x, net.position.y, 800 , 10);

  drawSprites();
}