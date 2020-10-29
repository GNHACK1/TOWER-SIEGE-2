const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground1, ground2, ground3, ground4, ground5
var blue1, blue2, blue3, blue4, blue5, blue6, blue7, blue8, blue9, blue10, blue11, blue12
var pink1, pink2, pink3, pink4, pink5, pink6
var green1, green2, green3, green4, green5, green6
var grey;
var player;
var slingShot;


function preload(){
  polygon_img=loadImage("polygon.png");
}

function setup() {
  createCanvas(1300,600);
  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(650,598,1400,10)
  ground2 = new Ground(0,300,10,700)
  ground3 = new Ground(1298,300,10,700)

  ground4 = new Ground(1100,260,240,8)
  ground5 = new Ground(820,450,360,8)

  blue1 = new Blue(700,400)
  blue2 = new Blue(740,400)
  blue3 = new Blue(780,400)
  blue4 = new Blue(820,400)
  blue5 = new Blue(860,400)
  blue6 = new Blue(900,400)
  blue7 = new Blue(940,400)

  blue8 = new Blue(1020,195)
  blue9 = new Blue(1060,195)
  blue10 = new Blue(1100,195)
  blue11 = new Blue(1140,195)
  blue12 = new Blue(1180,195)

  pink1 = new Pink(740,330)
  pink2 = new Pink(780,330)
  pink3 = new Pink(820,330)
  pink4 = new Pink(860,330)
  pink5 = new Pink(900,330)

  pink6 = new Pink(1100,65)

  green1 = new Green(780,260)
  green2 = new Green(820,260)
  green3 = new Green(860,260)

  green4 = new Green(1060,125)
  green5 = new Green(1100,125)
  green6 = new Green(1140,125)

  grey = new Grey(820,190)

  //player = new Player(100,260,40,40)
  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  slingShot = new SlingShot(this.ball,{x:200,y:300});
}

function draw() {
  background(56,44,44);  
  Engine.update(engine)

  ground1.display();
  ground2.display();
  ground3.display();

  ground4.display();
  ground5.display();

  blue1.display();
  blue2.display();
  blue3.display()
  blue4.display();
  blue5.display();
  blue6.display();
  blue7.display();

  blue8.display();
  blue9.display();
  blue10.display();
  blue11.display();
  blue12.display();

  pink1.display(); 
  pink2.display(); 
  pink3.display(); 
  pink4.display(); 
  pink5.display(); 

  pink6.display();

  green1.display();
  green2.display();
  green3.display();

  green6.display();
  green5.display();
  green4.display();

  grey.display();  
  imageMode(CENTER)
  image(polygon_img ,ball.position.x,ball.position.y,40,40);
 // player.display();
 slingShot.display();

}
function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}
function keyPressed(){
  if(keyCode === 32){
    slingShot.attach(this.ball);
  }
}
