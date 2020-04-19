class Block {
  constructor(x, y, name) {
    var options = {
      'friction': 0.05,
      'restitution': 0.05
    }
    this.body = Bodies.rectangle(x, y, 25, 25, options);
    this.width = 25;
    this.height = 25;
    this._name = name;
    this.inside = true;
    World.add(world, this.body);
  }

  checkPos() {
    if (this.body.position.x < 600 && this.body.position.y < 400) {
      this.inside = true;
    } else {
      this.inside = false;
    }
    return this.inside;
  }

  display() {  
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill(random(0, 225), random(0, 225), random(0, 225));
    strokeWeight(2);
    stroke("white");
    rect(0, 0, this.width, this.height);
    pop();
  }
}