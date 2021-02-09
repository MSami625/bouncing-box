var mainbox;
var box1;
var box2;
var box3;
var box4;

var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    mainbox=createSprite(random(20,750),200,40,40);
    mainbox.shapeColor="white";
    mainbox.velocityX=3;
    mainbox.velocityY=6;

    box1=createSprite(700,590,200,30);
    box1.shapeColor="yellow";
    box2=createSprite(500,590,200,30);
    box2.shapeColor="green";
    box3=createSprite(300,590,200,30);
    box3.shapeColor="blue";
    box4=createSprite(100,590,200,30);
    box4.shapeColor="red";

    music.loop();
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges=createEdgeSprites();
    mainbox.bounceOff(edges);
    
    //add condition to check if box touching surface and make it box

    if(mainbox.isTouching(box2)){
        mainbox.shapeColor="green";
        mainbox.velocityX=0;
        mainbox.velocityY=0;
        music.stop();
      }

     if(mainbox.isTouching(box1) && mainbox.bounceOff(box1)){
        mainbox.shapeColor= "yellow";
     }
 
     if(mainbox.isTouching(box3) && mainbox.bounceOff(box3)){
         mainbox.shapeColor= "blue";
     }
 
 
     if(mainbox.isTouching(box4) && mainbox.bounceOff(box4)){
        mainbox.shapeColor= "red";
     }
    drawSprites();
        text(mouseX+','+mouseY,100,45); 
}
