  

var ellipseHeight = 50;
var ellipseWidth = 50;
var xCenter = window.innerWidth/2;
var yCenter = window.innerHeight/2;



var oscFreq = Math.floor((Math.random() * 2000) + 150);

var osc

function setup() {

  var headerHeight= $('.title').height() + $('.guide-container').height();

  var width = windowWidth;
  var height = windowHeight - headerHeight;


  createCanvas(windowWidth, height);

  osc =   new p5.Oscillator(oscFreq, 'triangle')

}

function draw() {
  background(235, 225, 210)

  ellipse1();
  ellipse2();
  ellipse3();
  ellipse4();

}

//primatives

function ellipse1() {
  noStroke();
  fill(172, 66, 55);
  ellipse(xCenter, yCenter -140, ellipseWidth, ellipseHeight);  
}


function ellipse2() {
  noStroke();
  fill(50, 80, 131);
  ellipse(xCenter, yCenter - 70, ellipseWidth, ellipseHeight);  
}

function ellipse3() {
  noStroke();
  fill(56, 162, 82);
  ellipse(xCenter, yCenter, ellipseWidth, ellipseHeight);  
}

function ellipse4() {
  noStroke();
  fill(210, 115, 0);
  ellipse(xCenter, yCenter + 70, ellipseWidth, ellipseHeight);  
}

function mouseClicked() {

  if (ellipseWidth !== 200) {
    ellipseWidth = 200;
  } 

}

function mouseDragged() {
  ellipseWidth = mouseX/2;
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    xCenter = xCenter - 10;
  } else if (keyCode === RIGHT_ARROW) {
    xCenter = xCenter + 10;
  } 

  if (keyCode === UP_ARROW) {
    yCenter = yCenter - 10;
  } else if (keyCode === DOWN_ARROW) {
    yCenter = yCenter + 10;
  } 
}
 
function windowResized() {

  xCenter = windowWidth/2;
  yCenter = windowHeight/2;


  resizeCanvas(windowWidth, windowHeight);
}

