var player, playerImg
var bg, bgImage;
var bat, batImg;
var gameState = 0;
var batGroup;



function preload(){

    playerImg = loadImage("player.png");
    bgImage = loadImage("Background.png");
    batImg = loadImage("bat.png");

}

function setup(){
    createCanvas(501,550)

  bg = createSprite(248.75, 285, 501, 600);
  bg.addImage(bgImage)
  bg.visible = true;
  bg.scale = 1.1;

  player = createSprite(250.5,90,50,50);
  player.addImage(playerImg);
  player.scale = 0.15;
  player.debug = false;
  player.setCollider("circle",0,0,400);

  batGroup = new Group();

}

function draw(){
    background(30);

    if(gameState === 0){

    bg.velocityY = -4;

    if(bg.y<0){
      bg.y = 285
    }

    for(var i=0; i<550; i = i+20){
        stroke(255);
        strokeWeight(2);
        line(157,i,157,i+10)
     }

     for(var i=0; i<=550; i = i+20){
        stroke(255);
        strokeWeight(2);
        line(334,i,334,i+10)
     }

     if(keyCode===37&&player.x===250.5){
       player.x = 83.5;
     }
     if(keyCode===39&&player.x===250.5){
       player.x = 417.5
     }
     if(keyCode===38&&player.x===417.5){
       player.x = 250.5;
     }
     if(keyCode===38&&player.x===83.5){
       player.x = 250.5
     }

     if(player.isTouching(batGroup)){
       bg.velocityX = 0;
       batGroup.destroyEach();
       gameState = 1;
     }

     spawnBats();
     drawSprites();
    }
    else if(gameState === 1){
      textSize(48);
      fill(245);
      stroke("blue");
      strokeWeight(8);
      text("GAME OVER", 110, 275);
    }
}

function spawnBats(){


  var xyz = Math.round(random(30,100))

  if(frameCount % xyz===0){
  bat = createSprite(250.5,650,50,50);
  bat.addImage(batImg);
  bat.scale = 0.1
  bat.velocityY = -4;
  bat.depth = player.depth;
  bat.depth = bat.depth + 1;
  bat.lifetime = 180;
  batGroup.add(bat);

  var abc = Math.round(random(0.5,3.49))
  switch (abc) {

    case 1: bat.x = 83.5;
      break;

    case 2: bat.x = 250.5;
      break;

    case 3: bat.x = 417.5;
      break;

    default: break;
  }
  }

}