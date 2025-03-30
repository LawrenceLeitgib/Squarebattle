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
    this.BWN=1;
  }
  update(deltaTime) {
    this.position.y += this.speed.y;
    this.position.x += this.speed.x;
    if (this.lives <= 0) {
      this.markedForDeletion = true;
    }
    if (this.position.y <= -5) this.markedForDeletion = true;
    if (this.position.y >= this.gameHeight + 5) this.markedForDeletion = true;
    if (this.position.x <= -5) this.markedForDeletion = true;
    if (this.position.x >= this.gameWidth + 5) this.markedForDeletion = true;


  }
  draw(context) {
    super.draw(context);
  }
}
