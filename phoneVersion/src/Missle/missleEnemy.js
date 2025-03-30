class MissleEnemy extends Missle {
  constructor(game, position, speed, size, lives, color = "rgb(255, 0, 255)") {
    super(game);
    this.game = game;
    this.size = size;
    this.width = this.size;
    this.height = this.size;
    this.markedForDeletion = false;
    this.lives = lives;
    this.speed = speed;
    this.color = color;
    this.position = position;
  }
  update(deltaTime) {
    super.update(deltaTime);
  }
  draw(context) {
    super.draw(context);
  }
}
