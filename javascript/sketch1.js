// var canvas;
var video;
var button;
var snapshots = [];

function setup() {
  createCanvas(320, 240);
  // canvas.position(0, 0);
  background(51);
  video = createCapture(VIDEO);
  video.size(320, 240);
  video.hide();
  button = createButton('snap');
  button.mousePressed(takeSnap);
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
