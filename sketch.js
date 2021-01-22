var p1;
var e1,e2,e3,e4,e5,e6,e7,e8,eg,ebg;
var sq1,sq2,sq3,sq4,sq5;
var b1,b2,b3;
var pb1,pb2,eb,pm,pt,pbg,exp;
var lc=0,life,life1;
var PLAY=1;
var END=0;
var HOME;
var BOMBER;
var gamestate=HOME;
var gamestate2=1;
var akagi;
var RESET;
var retry,playagain;
var kills,kc;


function preload(){
  f4u=loadImage("images/f4u.png");
  f4ur=loadImage("images/f4ur.png");
  f4ul=loadImage("images/f4ul.png");
  b1=loadImage("images/b2.png");
  bg=loadImage("images/bg.png");
  p1i=loadImage("images/p1.png");
exp=loadImage("images/exp.png");
ijnakagi =loadImage("images/ijn akagi.png");
  }

function setup() {
  createCanvas(800,800);

  akagi = createSprite(400, 400, 50, 50);
  akagi.addImage(ijnakagi);

  p1 = createSprite(413, 400, 50, 50);
  p1.addImage(p1i);
 
 // playagain = createSprite(400, 500, 50, 50);
  //retry = createSprite(400, 400, 50, 50);

 
  eg=new Group ();
  pbg=new Group ();
  ebg=new Group ();
 
  life1 = createSprite(400,780,400,5);
  life = createSprite(400,780,400,5);
  life1.shapeColor="red";
  life.shapeColor="yellow";
}

function draw() {
  background(bg);
 

  if(gamestate === HOME){

    life.width=400;
 
p1.scale=0.5;

  akagi.velocityY=2;
  akagi.lifetime=280;



  if(akagi.y===900){
akagi.destroy();
    p1.scale=1;
    gamestate=PLAY;

  }

   }

  
   if(gamestate === PLAY){
    enemy ();
bomber();

    p1.x=mouseX;
    p1.y=mouseY;

//if(p1.isTouching(b2)){
//b3.createSprite(400,850);
//gamestate=BOMBER;
//}
//if(eg.get(i).destroy){
 //kc=kc+1
//}
 //textSize (32);
  //fill("red");
//text("kills"+ kc,700,40);
//if(gamestate===PLAY){
//  efire();
//}

if(keyDown("space")){
  fire();
}

if(pbg.isTouching(eg)){
  for (var i = 0; i < eg.length; i++) {
     if (eg.get(i).isTouching(pbg)) {
        eg.get(i).destroy()
        ;
       }
      }
  
 // eg.destroyEach();
 // pbg.destroyEach();
  }

  if(ebg.isTouching(p1)){
    
     lc=lc+1;
    life.width=life.width-1;
     }

     if(lc===400){
      gamestate=END;
      p1.lifetime=150;
        p1.addImage(exp);
   
       }





 

 console.log(gamestate);
 console.log(lc);
 console.log(life.width);




  drawSprites();
 

  
 // textSize (32);
 //// fill("red");
//text("kills"+ kc,700,40);


 
}
drawSprites();

       if(gamestate===END){
      
        textSize (32);
        fill("red");
     text("!/you died/!",300,400);

life.visible=false;

if(mousePressedOver(playagain)){
 // gamestate=RESET;
 gamestate=HOME;
}



  }
  
if(gamestate===RESET){

life.width=400;

if(mousePressedOver(retry)){
  gamestate=HOME;
}


//if(gamestate === BOMBER){
 // if(b3.y===-100){
  //  b3.destroy();
     //  // p1.scale=1;
     //  b3.velocityY=2;
//b3.lifetime=280;
       // gamestate=PLAY;
 // }
 //}


}





}

function enemy () {
 if(frameCount%50===0){ 
   var rand = Math.round(random (200,600));
   e1 = createSprite(rand, -20, 90, 50);
   e1.velocityY=3;
   eg.add (e1);
   efire();
   e1.lifetime=280;
   e1.addImage(f4u)
   
 }
   if(frameCount%30===0){ 
    var rand = Math.round(random (10,200));
    e1 = createSprite(rand, -20, 90, 50);
    e1.velocityY=3;
    e1.velocityX=1;
    eg.add (e1);
    efire();
    e1.lifetime=280;
    e1.addImage(f4ur)
 }
 if(frameCount%30===0){ 
  var rand = Math.round(random (600,800));
  e1 = createSprite(rand, -20, 90, 50);
  e1.velocityY=3;
  e1.velocityX=-1;
  eg.add (e1);
  efire();
  e1.lifetime=280;
    e1.addImage(f4ul)
}

//function bomber


}

function bomber(){


  if(frameCount%500===0){ 
    var rand = Math.round(random (10,800));
    b2 = createSprite(rand, -20, 90, 50);
    b2.velocityY=3;
    //e1.velocityX=-1;
  //  eg.add (e1);
   //...........00 efire();
  // e1.lifetime=280;
  
  b2.scale=0.3;
    b2.addImage(b1)
  }
}

function fire (){
  pb1 = createSprite(p1.x-17, p1.y, 2, 5);
  pb2= createSprite(p1.x+17, p1.y, 2, 5);
pb1.velocityY=-16;
pb1.shapeColor="yellow";
pbg.add(pb1);
pb1.lifetime=40;
pb2.velocityY=-16;
pb2.shapeColor="yellow";
pbg.add(pb2);
pb2.lifetime=40;
}

function efire (){
  eb = createSprite(e1.x, e1.y, 2, 5);
eb.velocityY=16;
eb.shapeColor="yellow";
ebg.add(eb);
eb.lifetime=80;
}