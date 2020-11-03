class Polygon {
    constructor(x,y,r) {

      this.body = Bodies.circle(x,y,r);
      this.r = r;
      World.add(world,this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      ellipse(0, 0, this.r);
      pop();
    }
  };
  