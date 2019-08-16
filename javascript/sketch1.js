var canvas;
var video;
var button;
var snapshots = [];

function setup() {
  canvas = createCanvas(320, 240);
  canvas.parent('video');
  // canvas.position(0, 0);
  background(255);
  video = createCapture(VIDEO);
  video.size(320, 240);
  video.hide();
  // button = createButton('snap');
  // button.parent('button');
  // button.mousePressed(takeSnap);
}

function takeSnap() {
  snapshots.push(video.get());
  //image(video, 0, 0);
}

function draw() {
  for (var i = 0; i < snapshots.length; i++) {
    image(snapshots[i], 0, 0);
  }
}

function keyReleased() {
  if (keyCode === ENTER) {
    console.log("test");
    takeSnap();
  }
}
