const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var iron1 
var stone 
var rubber


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    iron1 = new iron(900,100,50,20);

    rubber = new Rubber(50,100,20);

    stone = new Stone(1000,100,20,30);


  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber.display()
    stone.display()
    iron1.display()

    
 
}