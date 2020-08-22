var bullet, wall, thickness;



var speed, weight;



var damage2; 



function setup() {
 
  createCanvas(1510,800);
  speed=random(223,321);
  weight=random(30,52);

  

  thickness = random(22, 83);
  

  bullet = createSprite(50, 300, 50, 20);
  bullet.velocityX = speed;
  wall = createSprite(1200, 300, thickness, height/8);

  
}

function draw() {
  background("black");  
  bullet.shapeColor = (255, 255, 255);
  
  wall.shapeColor = (80, 80, 80);
  

  
  damage =(0.5*weight*speed*speed)/(thickness*thickness*thickness);
  if(bullet.x>1150)
   {
    bullet.velocityX = 0;
   
   
    if(damage<10)
    {
   wall.shapeColor = color(0, 255, 0);
 }
   if(damage>10){
   wall.shapeColor = color(255, 0, 0);
} 


  
  drawSprites();
 }
} 
