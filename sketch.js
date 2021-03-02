const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;
var box1, box2;
var wall1;

function setup() {
  var canvas = createCanvas(400, 400);
  engine = Engine.create();
  world = engine.world;
  box1 = new Box(100, 200, 50, 50);
  box2 = new Box(30, 100, 50, 50);

  wall1 = new Wall(200, 300, 400, 20);
}

function draw() {
  background(0);
  Engine.update(engine);
  box1.display();
  box2.display();
  wall1.display();
}
