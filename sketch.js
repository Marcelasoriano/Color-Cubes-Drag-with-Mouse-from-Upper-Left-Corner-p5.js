let angle= 3;
function setup() {
  createCanvas(600, 600);
  rectMode(CENTER); 
}

function draw() {
  background(0);
  for (let i = 80; i < mouseX; i += 80) {
    for (let j = 20; j < mouseY; j += 20) {
      noFill();
      stroke(mouseX - i, j, mouseY - j);
      strokeWeight(1);
      
      let d =dist(mouseX,mouseY,i+width/2,j+height/2);
      
      let r=d - 100;
      push();
      translate(i, j);
      rotate(angle);
      rect(2, 2, r, r);
      pop();
      
      push();
      translate(j, i);
      rotate(angle);
      rect(2, 2, r, r);
      pop();
      
      angle+=0.00004;
      
    }
  }

}