function Ball(){
	this.x = arguments[0];	
	this.y = arguments[1];
	this.xspeed = random(-0.5,0.5);
	this.yspeed = random(-0.5,0.5);
	this.color = color(random(255),random(255),random(255));
	this.size = 24;
	this.itChange = false;
	
	this.move = function (){
		this.x = this.x + this.xspeed;
		this.y = this.y + this.yspeed; 
	}

	this.bounce = function (){
		if(this.x > width || this.x < 0){
			this.xspeed *= -1; 
		}
		if(this.y > height || this.y < 0){
			this.yspeed *= -1;
		}
	}

	this.changeDirection = function(){
		this.xspeed *= -1; 
		this.yspeed *= -1;
		this.itChange = true;
	}

	this.intersets = function(ball){
		var d = dist(this.x,this.y,ball.x,ball.y);
		return (d < this.size);
	}

	this.clicked = function(x,y){
		var d = dist(this.x,this.y,x,y);
		return (d < this.size/2);
	}

	this.display = function (){
		fill(this.color);
		ellipse(this.x,this.y,this.size,this.size);
	}
}