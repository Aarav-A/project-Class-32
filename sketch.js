const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var block1,block2,block3,block4,block5,block6,
block7,block8,block9,block10,block11,block12,block13,
block14,block15,block16,block17,block18,block19,block20,block21
,block22,block23,block24,block25,block26,block27;

var backgroundImg,platform;
var ball, slingshot;
var ground2;

var gameState = "onSling";

var score = 0

function preload() {
    backgroundImg = loadImage("bg.png");
    getTime()
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,350,250,10);
    ground2 = new Ground(1000,200,150,10)
    
    block1 = new Blocks(520,340,30,40);
    block2 = new Blocks(550,340,30,40)
    block3 = new Blocks(580,340,30,40)
    block4 = new Blocks(610,340,30,40)
    block5 = new Blocks(640,340,30,40)
    block6 = new Blocks(670,340,30,40)
    block7 = new Blocks(535,270,30,40)
    block8 = new Blocks(565,270,30,40)
    block9 = new Blocks(595,270,30,40)
    block10 = new Blocks(625,270,30,40)
    block11 = new Blocks(655,270,30,40)
    block12 = new Blocks(550,238,30,40)
    block13 = new Blocks(580,238,30,40)
    block14 = new Blocks(610,238,30,40)
    block15 = new Blocks(640,238,30,40)
    block16 = new Blocks(565,190,30,40)
    block17 = new Blocks(595,190,30,40)
    block18 = new Blocks(625,190,30,40)
    block19 = new Blocks(580,152,30,40)
    block20 = new Blocks(610,152,30,40)
    block21 = new Blocks(595,115,30,40)
    block22 = new Blocks(970,190,30,40)
    block23 = new Blocks(1000,190,30,40)
    block24 = new Blocks(1030,190,30,40)
    block25 = new Blocks(985,130,30,40)
    block26 = new Blocks(1015,130,30,40)
    block27 = new Blocks(1000,90,30,40)



    ball = new Polygon(200,50,20);

    slingshot = new SlingShot(ball.body,{x:200, y:50});
}

function draw(){

    background("White")

    if(backgroundImg){
        background(backgroundImg);
    }

    Engine.update(engine);
    
    fill("red")
    textSize(25)
    text("Score: "+score,width-200,50)
    
   
    ground.display();
    ground2.display()

    block1.display();
    block1.score();
    block2.display()
    block2.score()
    block3.display()
    block3.score()
    block4.display()
    block4.score()
    block5.display()
    block5.score()
    block6.display()
    block6.score()
    block7.display()
    block7.score()
    block8.display()
    block8.score()
    block9.display()
    block9.score()
    block10.display()
    block10.score()
    block11.display()
    block11.score()
    block12.display()
    block12.score()
    block13.display()
    block13.score()
    block14.display()
    block14.score()
    block15.display()
    block15.score()
    block16.display()
    block16.score()
    block17.display()
    block17.score()
    block18.display()
    block18.score()
    block19.display()
    block19.score()
    block20.display()
    block20.score()
    block21.display()
    block21.score()
    block22.display()
    block22.score()
    block23.display()
    block23.score()
    block24.display()
    block24.score()
    block25.display()
    block25.score()
    block26.display()
    block26.score()
    block27.display()
    block27.score()




    ball.display();
   
    slingshot.display();   
    
    
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
   
    }
}


async function getTime(){
    var link = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var linkJson = await link.json()
    var dateTime = linkJson.datetime
    var hour  = dateTime.slice(11,13)
    console.log(hour)
     
    if(hour > 06&&hour < 12){
        bg = ("bg.png")
    }else{
        bg = ("bg2.jpg")
    }
    backgroundImg = loadImage(bg)
}