
var balls =[];

function setup() {
	createCanvas(600,400);
  pixelDensity(1);
}

function draw() {
  background(25);
  loadPixels();
   for (var y = 0; y < height; y++){
     for (var x = 0; x < width; x++){
      var pos = (x+y*width)*4;
      pixels[pos] = x;
      pixels[pos+1] = random(255);
      pixels[pos+2] = y;
      pixels[pos+3] = 255;
    }
  }
  updatePixels();
}