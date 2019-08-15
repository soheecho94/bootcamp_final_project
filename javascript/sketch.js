var canvas;
var px,py;

// function preload() {
// 	img = loadImage('/assets/pen.png')
// }

function setup() {
	canvas = createCanvas(windowWidth, windowHeight-20);
  canvas.position(0, 20);
	// noCursor();
  //background(0);
}

function keyPressed() {
  clear();
}

function draw() {

	if (mouseIsPressed) {
		// stroke(0, 50);
		// strokeWeight(2);
		// line(px, py, lerp(mouseX,px,.1), lerp(mouseY,py,.1));
		fill(0);
		ellipse(mouseX, mouseY, 2, 2);

	}
	// px = mouseX;
	// py = mouseY;
}
