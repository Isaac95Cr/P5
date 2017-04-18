function Walker(){
  this.x = width/2;
  this.y = height/2;


  this.move = function(){ 
    this.x = constrain(randomGaussian(this.x,1),0,width);
    this.y = constrain(randomGaussian(this.y,1),0,height);
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