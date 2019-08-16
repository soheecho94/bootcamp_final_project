var canvas;

const myself = document.getElementById('portrait');
let area;

function setup() {
	canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
	area = myself.getBoundingClientRect();
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
	area = myself.getBoundingClientRect();

}

function keyPressed() {
  clear();
}

function draw() {

	//get link area
	if(mouseX > area.left && mouseX < area.right && mouseY > area.top && mouseY < area.bottom){
		console.log('im being hovered help');
		document.getElementById('defaultCanvas0').style.visibility = "hidden";
		myself.classList.add("isBeingHovered");
	} else {
		document.getElementById('defaultCanvas0').style.visibility = "visible";
		myself.classList.remove("isBeingHovered");
	}

	//drawing functionality
	if (mouseIsPressed) {
		// stroke(0, 50);
		// strokeWeight(2);
		// line(px, py, lerp(mouseX,px,.1), lerp(mouseY,py,.1));
		fill(0);
		ellipse(mouseX, mouseY, 2, 2);
	}
}
