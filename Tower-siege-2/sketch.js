const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var box1,box2,box3,box4,box5,box6,box7;
var box8,box9,box10,box11,box12;
var box13,box14,box15;
var box16;
var box17,box18,box19;
var box20,box21;
var box22;

var ground,ground2,ground3;
var score;
var slingshot;

var polygon;
var polygon_img;
var backgroundImg;

function preload(){
  polygon_img=loadImage("polygon.png");

  getTime();
}
function setup(){
    createCanvas(1000,500);
    rectMode(CENTER);

    engine = Engine.create();
    world = engine.world;

    ground = new Ground(100,450,2000,10);
    ground2 = new Ground(750,250,200,10);
    ground3 = new Ground(450,350,200,10);

    //Ground1 layer1
    box1 = new Box(700, 245, 45, 45)
    box2 = new Box(750, 245, 45, 45)
    box3 = new Box(800, 245, 45, 45)

    //Ground1 layer2
    box4 = new Box(725, 175, 45, 45)
    box5 = new Box(775, 175, 45, 45)

    //Ground1 layer3
    box6 = new Box(750, 125, 45, 45)

       //Ground2 layer1
       box7 = new Box(450, 345, 45, 45)
       box8 = new Box(400, 345, 45, 45)
       box9 = new Box(500, 345, 45, 45)
   
       //Ground2 layer2
       box10 = new Box(425, 275, 45, 45)
       box11 = new Box(475, 275, 45, 45)
   
       //Ground2 layer3
       box12 = new Box(450, 225, 45, 45)
  

 
   polygon = Bodies.rectangle(50,200,20,20);
   World.add(world,polygon);
    slingshot = new Slingshot(polygon,{x:180,y:290});
    
}

function draw(){

    rectMode(CENTER);
   
    if(backgroundImg)
     background(backgroundImg);

    Engine.update(engine);

    strokeWeight(2);

  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
 

    ground.display();
    ground2.display();
    ground3.display();
 fill("white")
text("Score=" + score, 1100, 50)

  //  r1.display();
  fill("gold");
  imageMode(CENTER)
  image(polygon_img ,polygon.position.x,polygon.position.y,40,40);

    slingshot.display();
   
}
function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
  }
  function mouseReleased(){
    slingshot.fly();
  }
  function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(this.polygon);
    }
  }
  async function getTime(){
    var response= await fetch("https://worldtimeapi.org/api/timezone/America/Toronto")
    var responseJSON= await response.json();
    
    var Time= responseJSON.datetime
    
    var hour= Time.slice(11, 13)
    console.log(hour);
    if(hour>06 && hour<18){
       bg = "morningbg.jpg"
    }
    else{
    bg= "nightbg.jpg"
    }
    backgroundImg= loadImage(bg)
}
