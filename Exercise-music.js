var mySound;



function preload() {
  mySound = loadSound('seagulls.mp3');
}

function setup() { 
  mySound.setVolume(0.1);
  mySound.play();
  createCanvas(100, 100);
}

function draw() {
  if (mySound.isPlaying()) {
    background(240);
  } else {
    background(120);
  }
}

function keyPressed() {
  if (keyIsPressed) {
  mySound.play();
  print ('key'); 
  }
}
