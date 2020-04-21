class Circle{
  constructor(center, speed, color){
    this.center = center;
    this.speed = speed;
    this.color = color;
    this.diameter = 90;
    this.angle = 0;
    this.orbit = createVector(0,0);
  }
  update(){
    let radius = this.diameter/2;
    this.orbit.x = this.center.x + radius*cos(this.angle);
    this.orbit.y = this.center.y + radius*sin(this.angle);
    this.angle += this.speed;
  }
  show(){
    stroke(this.color || 255);
    strokeWeight(1);
    noFill();
    ellipse(this.center.x, this.center.y, this.diameter);
    stroke(255);
    strokeWeight(8);
    point(this.orbit.x, this.orbit.y)
  }
}

class Curve {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.vertex = [];
    this.color = color;
  }

  update(x, y){
    if( !this.vertex[0] || this.vertex[0].x != x && this.vertex[0].y != y){
      this.vertex.push(createVector(x, y));
    }
    this.x = x;
    this.y = y;
  }

  show(){
    stroke(this.color || 255);
    strokeWeight(1);
    // noFill();
    beginShape(LINES);
    for(i = 0; i< this.vertex.length; i++){
      vertex(this.vertex[i].x, this.vertex[i].y);
    }
    endShape(LINES)
    // line(this.x, this.y, this.prevX, this.prevY);
    stroke(255);
    strokeWeight(8);
    point(this.x, this.y);
  }
}
