/*  const Engine= Matter.Engine; 
const World = Matter.World;
const Bodies = Matter.Bodies;

  function setup() {

   createCanvas(400,400);

   engine=Engine.create();
   world=engine.world;

   var ground_options ={
      isStatic : true
     } 

  //   object=Bodies.rectangle(200,100,50,10,options);
   ground=Bodies.rectangle(200,300,200,10,ground_options);
   World.add(world,ground);
    }

     function draw() {

       background(0);
       Engine.update(engine);
        rectMode(CENTER);
        rect(ground.position.x,ground.position.y,50,10);

     //rect(200,200,50,50); 
    drawSprites(); 
  }*/

 const Engine = Matter.Engine;
 const World= Matter.World;
 const Bodies = Matter.Bodies;
 const Constraint = Matter.Constraint;
 
 var engine, world;
 
 function setup(){
     var canvas = createCanvas(1600,600);
     engine = Engine.create();
     world = engine.world;

     ground = new Ground(800,595,1600,10);
     ground1 = new Ground(500,340,250,10);
     ground2 = new Ground(1000,200,200,10)

     block1 = new Block(500,155,30,40);

     block2 = new Block(500,195,30,40);
     block15 = new Block(530,195,30,40);
     block16 = new Block(470,195,30,40);

     block3 = new Block(500,235,30,40);
     block11 = new Block(530,235,30,40);
     block12 = new Block(560,235,30,40);
     block13 = new Block(470,235,30,40);
     block14 = new Block(440,235,30,40);

     block4 = new Block(500,275,30,40);
     block5 = new Block(530,275,30,40);
     block6 = new Block(470,275,30,40);
     block7 = new Block(560,275,30,40);
     block8 = new Block(440,275,30,40);
     block9 = new Block(590,275,30,40);
     block10 = new Block(410,275,30,40);

     block20 = new Block(1000,165,30,40);
     block21 = new Block(1030,165,30,40);
     block22 = new Block(1060,165,30,40);
     block23 = new Block(970,165,30,40);
     block24 = new Block(940,165,30,40);

     block25 = new Block(1000,135,30,40);
     block26 = new Block(1030,135,30,40);
     block27 = new Block(970,135,30,40);

     block28 = new Block(1000,105,30,40);

     polygon = new Polygon(150,300,30);

     sling = new SlingShot(polygon.body,{x:150,y:200})
 }
 
 function draw(){
     background(0);
     Engine.update(engine);

     ground.display();
     ground1.display();
     ground2.display();

     block1.display();
     block2.display();
     block3.display();
     block4.display();
     block5.display();
     block6.display();
     block7.display();
     block8.display();
     block9.display();
    block10.display();
    block11.display(); 
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();   
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();
    block26.display();
    block27.display();
    block28.display();

    polygon.display();

    sling.display();
 }
 


 function mouseDragged(){
   Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
   sling.fly();
}

function keyPressed(){
   if(keyCode === 32){
      Matter.Body.setPosition(polygon.body, {x:150, y:300});
       sling.attach(polygon.body);
   }
}