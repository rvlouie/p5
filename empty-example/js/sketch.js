  

var ellipseHeight = 50;
var ellipseWidth = 50;
var xCenter = window.innerWidth/2;
var yCenter = window.innerHeight/2;
var level


var oscFreq = Math.floor((Math.random() * 2000) + 150);

var osc


function preload() {
  testSample = loadSound('Even.wav');
}

function setup() {

  var headerHeight= $('.title').height() + $('.guide-container').height();

  var width = windowWidth;
  var height = windowHeight - headerHeight;



  createCanvas(windowWidth, height);

  osc =   new p5.Oscillator(oscFreq, 'triangle')

}

function draw() {
  background(235, 225, 210)


  waveform();

}

//primatives

  

function mouseClicked() {
  if (testSample.isPlaying()) {
    testSample.stop();
  } else {
    testSample.play();
  }
}


var waveform = function() {

  var soundFileAmplitude = new p5.Amplitude();

  soundFileAmplitude.setInput(testSample);

  var level = soundFileAmplitude.getLevel();

  rect(xCenter, yCenter, 20, 10 + level * 100);

};


 
function windowResized() {

  xCenter = windowWidth/2;
  yCenter = windowHeight/2;


  resizeCanvas(windowWidth, windowHeight);
}

