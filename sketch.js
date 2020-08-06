let sceneNum = 0;
let dot = new Mover();
let dots = [];

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 4000; i++) {
    dots[i] = new Mover();
  }
}

function draw() {
  mouseClicked = function() {
    sceneNum++;
    if(sceneNum>4){
      sceneNum=0;
    }
      
  }
  if (sceneNum == 0) {
    background(173, 239, 255);
    fill(7, 14, 145);
    textSize(25);
    text("The Green Dot Art", 50, 50, 50);
    textSize(30);
    text("Click to Start", 1, 20)
  } else if (sceneNum == 1) {
    background(220);

    for (let i = 0; i < 4000; i++) {
      dots[i].update();
      dots[i].show();
    }

    ellipse(mouseX, mouseY, 10, 10);
  } else if (sceneNum == 2) {
    background(50, 200, 140);
    textSize(30);
    text("Thank you for watching!", 20, 20,20);
  }


}
