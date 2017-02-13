function Walker(){
  this.x = width/2;
  this.y = height/2;

  this.move = function(){
    var n = floor(random(4));
    if(n == 0){ //up
      this.y += 1; 
    }
    if(n == 1){ //down
      this.y += -1; 
    }
    if(n == 2){ //left
      this.x += -1; 
    }
    if(n == 3){ //rigth
      this.x += 1; 
    }
  }

  this.display = function(){
    fill(0);
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