var xt = 0;
var yt = 0;
var st = 0;


function setup() {
	createCanvas(600,400);
  pixelDensity(1);
}

function draw() {
  background(55);
  fill(255);
  stroke(255);
  noFill();
  // perlin noise 
  /*var x = (map(noise(xt),0,1,0,width));
  var y = (map(noise(yt),0,1,0,height));
  ellipse(x,y,25,25);
  xt+=0.001;
  yt+=0.001;*/

  //perlin noise 1D
  /*beginShape();
  yt = st
  for (var x = 0; x < width; x++) {
    var y = map(noise(yt),0,1,0,height);
    vertex(x,y);
    yt+=0.001;
  }
  st += 0.001; 
  endShape();*/ 
  
  //perlin noise 2D
  loadPixels();
  yt = st;
   for (var y = 0; y < height; y++){
     xt=yt;
     for (var x = 0; x < width; x++){ 
      var pos = (x+y*width)*4;
      var color = map(noise(xt,yt),0,1,0,255);
      pixels[pos] = color;
      pixels[pos+1] = color;
      pixels[pos+2] = color;
      pixels[pos+3] = 255;
      xt+=0.005;
    }
    yt+=0.005; 
  }
  st=yt; 
  updatePixels();

}