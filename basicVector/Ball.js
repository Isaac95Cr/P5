var xt = 0;
var yt = 1000;
function Ball(){
	this.location = createVector( arguments[0],arguments[1]);
	this.velosity = createVector(0,0);
	this.acceleration = createVector(map(noise(xt),0,1,-1,1),map(noise(yt),0,1,-1,1));
	this.color = color(random(255),random(255),random(255));
	this.size = 24;
	this.itChange = false;
	
	this.move = function (){
		this.velosity.add(this.acceleration);
		this.location.add(this.velosity);
	}

	this.bounce = function (){
		if(this.location.x > width || this.location.x < 0){
			this.velosity.x *= -1; 
		}
		if(this.location.y > height || this.location.y < 0){
			this.velosity.y *= -1;
		}
	}

	this.changeDirection = function(){
		this.xspeed *= -1; 
		this.yspeed *= -1;
		this.itChange = true;
	}

	this.intersets = function(ball){
		var d = dist(this.location.x,this.location.y,ball.x,ball.y);
		return (d < this.size);
	}

	this.clicked = function(x,y){
		var d = dist(this.location.x,this.location.y,x,y);
		return (d < this.size/2);
	}

	this.display = function (){
		fill(this.color);
		ellipse(this.location.x,this.location.y,this.size,this.size);
	}
}