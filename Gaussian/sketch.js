

function setup() {
	createCanvas(600,400);
  background(55);
}

function draw() {
  var x = randomGaussian(width/2,100);
  var y = randomGaussian(height/2,65);
  console.log(x + " "+y);
  noStroke();
  fill(x,x-y,y,100);
  ellipse(x,y,24,24);
}