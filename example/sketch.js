
var balls =[];

function setup() {
	createCanvas(600,400);
}

function draw() {
  background(25);
  for (var i = 0 ; i< balls.length; i++) {  	
  	for (var j = i+1; j < balls.length; j++) {
  		if(balls[i].intersets(balls[j])){
  			if(!balls[i].itChange && !balls[j].itChange){
				balls[i].changeDirection();
  				balls[j].changeDirection();
  			}else if(balls[i].itChange && !balls[j].itChange){
  				balls[j].changeDirection();
  			}else if(!balls[i].itChange && balls[j].itChange){
  				balls[i].changeDirection();
  			}else{

  			}
  		}
  	}
  	balls[i].move();
  	balls[i].bounce();
  	balls[i].display();
  	
  }
  for (var i = 0 ; i< balls.length; i++) {  	
  	balls[i].itChange = false;
  }
}

function mousePressed(){
	for (var i = balls.length - 1; i >= 0; i--) {
			if(balls[i].clicked(mouseX,mouseY)){
				balls.splice(i,1);
				return true;
			}
	} 
	
	balls[balls.length] = new Ball(mouseX,mouseY);
}
function mouseDragged(){
	
}