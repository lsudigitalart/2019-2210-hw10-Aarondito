// the black snow fall
let snowflakes = []; 

function setup() {
  createCanvas(1000, 600);
  fill(240);
  noStroke();
}

function draw() {
  background(377,146,0);
  rect(0, 500, 1000, 100);
  fill(0)
  let t = frameCount / 80; 

 
  for (let i = 0; i < random(7); i++) {
    snowflakes.push(new snowflake()); 
  }

 
  for (let flake of snowflakes) {
    flake.update(t); 
    flake.display(); 
  }
}

function snowflake() {
  
  this.posX = 0;
  this.posY = random(-60, 0);
  this.initialangle = random(0, 2 * PI);
  this.size = random(4, 7);


  this.radius = sqrt(random(pow(width / 2, 2)));

  this.update = function(time) {
    let w = 0.6; // angular speed
    let angle = w * time + this.initialangle;
    this.posX = width / 2 + this.radius * sin(angle);

    this.posY += pow(this.size, 0.5);

    if (this.posY > height) {
      let index = snowflakes.indexOf(this);
      snowflakes.splice(index, 1);
    }
  };

  this.display = function() {
    ellipse(this.posX, this.posY, this.size);
  };
}
