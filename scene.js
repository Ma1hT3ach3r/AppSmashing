class Scene {
  constructor(num) {
    this.num = num;
    this.color = color(this.num % 255, (this.num * 100) % 255, (this.num * 200) % 255);
  }

  display() {
    background(this.color);
    fill(mouseX % 255, mouseY % 255, (mouseX + mouseY) % 255);
    ellipse(mouseX, mouseY, 20, 20);
  }

  update() {

  }

  anim() {

  }
