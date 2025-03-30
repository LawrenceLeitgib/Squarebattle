class Paddle {
  constructor(game, xPostion,height=100,maxSpeed=17.5) {
    this.gameHeight = game.gameHeight;
    this.width = 50;
    this.height = height;
    this.maxSpeed = maxSpeed;
    this.speed = 0;
    this.game = game;
    this.xPostion = xPostion;
    if (this.xPostion === "left") {
      this.position = {
        x: this.width / 2 + 50,
        y: game.gameHeight / 2 - this.height / 2
      };
    } else if (this.xPostion === "right") {
      this.position = {
        x: game.gameWidth - 50 - this.width / 2 - this.width,
        y: game.gameHeight / 2 - this.height / 2
      };
    }
  }

  moveDown() {
    this.speed = this.maxSpeed;
  }
  moveUp() {
    this.speed = -this.maxSpeed;
  }
  stop() {
    this.speed = 0;
  }

  draw(context) {
    context.fillStyle = "rgb(0, 255, 255)";
    context.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  update(deltaTime) {

    this.position.y += this.speed;
    if (this.position.y < 0) {
      this.position.y = 0;
      this.speed = 0;
    }
    if (this.position.y > this.gameHeight - this.height) {
      this.position.y = this.gameHeight - this.height;
      this.speed = 0;
    }
  }
}
