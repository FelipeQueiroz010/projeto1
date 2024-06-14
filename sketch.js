function setup() {
    createCanvas(800, 800);
     background("black");

}

function draw() {
  
  stroke("red");
  fill("purple")
  
  if(mouseIsPressed) {
   rect(mouseX, mouseY, 10, 10); 
  }
}