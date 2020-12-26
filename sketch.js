var monkey,monkey1,monkey2,monkey3,monkey4,monkey5,monkey6,monkey7,monkey8,monkey9,monkey10;
var ban, banImage, jungle,jungleImage, jungle2, jungle3;
var ground,ground1;
var stone,stoneImage;
var banG, stoG;

function preload (){
  
  jungleImage = loadImage ("jungle.jpg");
  
  jungle2 = loadImage ("jungle.jpg");
  
  monkey1 = loadImage ("Monkey_01.png");
  
  monkey2 = loadImage ("Monkey_02.png");
  
  monkey3 = loadImage ("Monkey_03.png");
  
  monkey4 = loadImage ("Monkey_04.png");
  
  monkey7 = loadImage ("Monkey_07.png");
  
  monkey5 = loadImage ("Monkey_05.png");
  
  monkey6 = loadImage ("Monkey_06.png");
  
  monkey7 = loadImage ("Monkey_07.png");
  
  monkey8 = loadImage ("Monkey_08.png");
  
  monkey9 = loadImage ("Monkey_09.png");
  
  monkey10 = loadImage ("Monkey_10.png");
  
  banImage = loadImage ("banana.png");
  
  stoneImage = loadImage ("stone.png");
  
  
}

function setup() {
  createCanvas(600,200);
  
  jungle = createSprite(400,-100,900,300);   
 jungle.addAnimation("jungle",jungleImage);
  jungle.scale = 1.5;
  jungle.x = jungle.width/2;
  
  monkey = createSprite (50,170);
  monkey.addAnimation                          ("monkey",monkey1,monkey2,monkey3,monkey4,monkey5,monkey6,monkey7,monkey8, monkey9,monkey10);
  monkey.scale = 0.1;
  
  ground = createSprite (300,200,600,20);
  ground. visible = false; 
  
 banG = createGroup();
 stonG = createGroup();
  
}

function draw() {
  
  //background(220);
  
  jungle.velocityX = -4;
  
  if (jungle.x < 0){
      jungle.x = jungle.width/2;
  }
  
  if( keyDown ("space")&& monkey.y > 120){
     monkey.velocityY = -12 ;
}
   monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  
  food();
  obstacle();
  
  drawSprites();
  
}

function food (){
  
   if(frameCount % 80 === 0) {
     
     var bannana = createSprite(600,355,10,40);
     bannana.y = Math.round(random(0,120));
     bannana.addImage(banImage);
     bannana.velocityX = -4;
     bannana.scale = 0.05;
     bannana.lifetime= 200;
     banG.add( bannana);
    
    bannana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
   }

}

function obstacle (){
    
     if(World.frameCount % 200 === 0) {
       
        var stone = createSprite(600,180,800,10);
        stone.addImage(stoneImage);
        stone.velocityX = -8;
        stone.scale = 0.2;
        stone.lifetime = 150;
        stonG.add(stone);
       
     }
     
}