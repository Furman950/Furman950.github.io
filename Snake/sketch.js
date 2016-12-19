var s;
var scl = 20;

var food, score = -1;

function setup(){
    createCanvas(600, 600);
    s = new Snake();
    frameRate(20);
    pickLocation();
}
function restartGame(){
    score = -1;
    s.x = 0;
    s.y = 0;
    s.xspeed = 1;
    s.yspeed = 0;
    pickLocation();
}
function pickLocation() {
    var cols = floor(width/scl);
    var rows = floor(height/scl);
    food = createVector(floor(random(cols)), floor(random(rows)));
    food.mult(scl);
    score++;
}

function draw(){
    background(51);
    fill(255, 255, 255);
    text("Score: " + score, 280 , 25);

  if (s.eat(food)) {
      console.log("Food");
    pickLocation();
  }
  
  if(s.death()){
      restartGame();
  }
  
  s.update();
  s.show();

  fill(13, 0, 255);
  rect(food.x, food.y, scl, scl);
}

function keyPressed() {
    keyCode === UP_ARROW && s.yspeed != 1 ? s.dir(0, -1) : false; 
    
    if (keyCode === DOWN_ARROW && s.yspeed != -1){
        s.dir(0, 1);
    }
    
    else if (keyCode === RIGHT_ARROW && s.xspeed != -1){
        s.dir(1, 0);
    }
        
    else if (keyCode === LEFT_ARROW && s.xspeed != 1){
        s.dir(-1, 0);
    }
}