function Walker(){
  this.x = 0;//width/2;
  this.y = 0;//height/2;


  this.move = function(){ 
     // totally random
    // this.x = constrain((random(-1,1)+this.x),0,width);
   // this.y = constrain((random(-1,1)+this.y),0,height);
   
  //random with 50% chances of goin to the mouse 
   var r = random(1);
   if(r<0.5){
    this.x += (mouseX>this.x)? 1 : -1;
    this.y += (mouseY>this.y)? 1 : -1;
   }else{
     this.x = constrain((random(-1,1)+this.x),0,width);
     this.y = constrain((random(-1,1)+this.y),0,height);
   } 
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