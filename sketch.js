var mic;
var x = 0;
var speed = 3;
function setup() {
  createCanvas(400, 400);
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
   fill(0);
  ellipse(x, 200, 100, 100);

  if (x > width || x < 0) {
    speed = speed * -1;
  }

  x = x + speed;
  background(30);
   fill(0);
  ellipse(x, 200, 100, 100);

  if (x > width || x < 0) {
    speed = speed * -1;
  }

  x = x + speed;
  angleMode(DEGREES);
  var vol = mic.getLevel();
  
  fill(0);
  ellipse(x, 200, 100, 100);

  if (x > width || x < 0) {
    speed = speed * -1;
  }

  x = x + speed;
  
  rect(mouseX,20,300,300,07);
  fill(123,213,123);
  rect(30,mouseY,200,200,07);
  fill(123,54,67);
  rect(70,43,200,mouseY,07);
  fill(23,221,34);
  rect(30,300,mouseX,200,07);
  fill(1345,334,2);
  rect(mouseX,mouseY,200,200,07);
  fill(25,224,156);
  rect(30,100,mouseX,mouseY,07);
  fill(255,0,150);
  ellipse(x, y, 40, 40);
  
  for (var x = 0; x <= width; x+=50) {
    for (var y = 0; y <= height; y += 50) {
      fill(random(255), 0, random(255));
      ellipse(x, y, 25, 25);
    }
  }
  
  fill(234,234,12);
  ellipse(x, 200, 100, 100);

  if (x > width || x < 0) {
    speed = speed * -1;
  }

  x = x + speed;
  
  head();
  
  face();
  
  body();
  
  stomach();
  
  balls();
  
   fill(0);
  ellipse(x, 200, 100, 100);

  if (x > width || x < 0) {
    speed = speed * -1;
  }

  x = x + speed;
  
  fill(0,0,0);
  rect(190, 100, vol*2000,vol*600, 20);
  console.log(vol);
  
  fill(195,27,10);
  rect(100,120,20,20);
  rect(120,135,5,27);
  rect(95,135,5,27);
  rect(95,135,5,27);
  rect(102,135,5,27);
  rect(112,135,5,27);
  
  fill(0);
  circle(105,126,5)
  circle(115,126,5)
  rect(105, 130, vol*900,vol*400, 5);
}

function balls(xPos, yPos, rotation){
  push();
  noStroke();
  translate(xPos, yPos);
  rotate(rotation);
  fill(244,226,198);
  circle(width * .27, height * .85, width * .11);
  circle(width * .71, height * .85, width * .11);
}

function head(){
  push();
  translate(width * 0,height * 0)
  stroke(0, 0, 0);
  strokeWeight(2);
  fill(244,226,198)
  rect(width * .420, height * .25, width * .15, height * .15);
  rect(width * .340, height * .05, width * .300, height * .30, width * .03);
}

function face() {
  push();
  translate(width * 0,height * 0)
  //outer left eye
  fill(0,0,0);
  circle(width * .42, height * .18, width * .05); 
  //lft spot
  fill(255,255,255)
  circle(width * .43, height * .17, width * .02); 
  //left spot
  fill(255,255,255)
  circle(width * .41, height * .19, width * .02); 
  //outer right eye
  fill(0,0,0);
  circle(width * .57, height * .18, width * .05); 
  //right spot
  fill(255,255,255)
  circle(width * .56, height * .17, width * .02); 
  //right spot
  fill(255,255,255)
  circle(width * .58, height * .19, width * .02);  
}
function stomach(){
  push();
  translate(width * 0,height * 0)
  fill(101,67,33);
  rect(width * .310, height * .700, width * .360, height * .9);
  rect(width * .310, height * .750, width * .360, height * .9);
  rect(width * .310, height * .750, width * .190, height * .9);
}
function body(){
  push();
  translate(width * 0,height * 0)
  fill(136,134,123);
  square(width * .310, height * .40, width * .450, height * .04);
  fill(136,134,123);
  square(width * .210, height * .40, width * .450, height * .04);
  square(width * .315, height * .39, width * .35, height * .03);
   fill(0);
  ellipse(x, 200, 100, 100);

  if (x > width || x < 0) {
    speed = speed * -3;
  }

  x = x + speed;
}