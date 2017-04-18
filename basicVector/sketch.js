var ball;
function setup() {
	createCanvas(600,400);
  ball = new Ball(width/2,height/2);
}

function draw() {
  background(25);
  	ball.move();
  	ball.bounce();
  	ball.display();
    translate(width/2,height/2);
    var center = createVector(width/2,height/2);
    var mouse = createVector(mouseX,mouseY);
    //var 
    
    mouse.sub(center);
    var tri1 = createVector(mouse.x,mouse.y);
    tri1.setMag(mouse.mag()-map(mouse.mag(),0,200,0,20));
    tri1.rotate(HALF_PI/10);

    var tri2 = createVector(mouse.x,mouse.y);
    tri2.setMag(mouse.mag()-map(mouse.mag(),0,200,0,20));
    tri2.rotate(-HALF_PI/10);


    fill(255);
    stroke(255);  
    ellipse(0,0,5,5);
    line(0,0,mouse.x,mouse.y);
    triangle(tri1.x,tri1.y,mouse.x,mouse.y,tri2.x,tri2.y);
}

function mousePressed(){
	console.log(mouseX,mouseY);
}
function mouseDragged(){
	
}