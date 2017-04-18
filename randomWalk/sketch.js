function Walker(){
  this.x = width/2;
  this.y = height/2;


  this.move = function(){ 
     // totally random
    // this.x = constrain((random(-1,1)+this.x),0,width);
   // this.y = constrain((random(-1,1)+this.y),0,height);
   
  //random with 50% chances of goin to the mouse 
  /* var r = random(1);
   if(r<0.5){
    this.x = constrain(((mouseX>this.x)? this.x+1 : this.x-1),0,width);
    this.y = constrain(((mouseY>this.y)? this.y+1 : this.y-1),0,height);;
   }else{
     this.x = constrain((random(-1,1)+this.x),0,width);
     this.y = constrain((random(-1,1)+this.y),0,height);
   } */
  var stepsize = random(0,10);
 
  var stepx = random(-stepsize,stepsize);
  var stepy = random(-stepsize,stepsize);
 
  this.x += stepx;
  this.y += stepy;
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