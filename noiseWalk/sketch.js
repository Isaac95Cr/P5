var xt = 0;
var yt = 1000;
var st = 500;

function Walker(){
  this.x = width/2;
  this.y = height/2;

  this.move = function(){ 
    var stepsize = map(noise(st),0,1,-1,1); 
    this.x = map(noise(xt),0,1,0,width);
    this.y = map(noise(yt),0,1,0,height);
    xt += 0.01;
    yt += 0.01;
  }

  this.display = function(){
    fill(255);
    rect(this.x,this.y,2,2);
  };
}

function setup() {
	createCanvas(600,400);
  background(55);
  walker = new Walker();
}

function draw() {
  walker.display();
  walker.move();
  
}