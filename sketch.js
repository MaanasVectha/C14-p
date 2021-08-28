var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleImg;apple.x
var leaf,leafImg;leaf.x
var select_sprites;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  rabbit.x =World.mouseX
  
  
  drawSprites();
 
  var select_sprites = Math.round(1,2);

  if(frameCount%80==0){
    if(select_sprites==1){
      createApples(apple.y=Math.round(random(10,100)));
    }  else{
      createLeaf(leaf.y=Math.round(random(10,100)));
    }  
  }

}
     function createApples(){  
      apple = createSprite(400,40,10,10);
      apple.addImage(appleImg);
      apple = Math.round(50,350);
      apple.scale=0.01;
      apple.velocityY=3;
      apple.lifetime=100;
    }
    function createLeaf(){
      leaf = createSprite(400,40,10,10);
      leaf.addImage(leafImg);
      leaf = Math.round(50,350);
      leaf.scale=0.5;
      leaf.velocityY=3;
      leaf.lifetime=100;
    }