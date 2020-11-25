class LiveIncreaser {
  constructor(game, postion, liveAdded, speedY) {
    this.game = game;
    this.liveAdded = liveAdded;
    this.width = 50;
    this.height = 50;
    this.markedForDeletion = false;
    this.position = {
      x: postion.x,
      y: postion.y
    };
    this.speed = {
      x: 0,
      y: speedY
    };
    this.markedForDeletion = false;
    this.color = "rgb(0, 255, 0)";
  }
  update() {
    this.position.y += this.speed.y;
    this.position.x += this.speed.x;
    if (this.position.y + this.height > this.game.gameHeight) {
      this.markedForDeletion = true;
    }
    if (detectionCollision(this, this.game.spaceShip)) {
      this.game.lives += this.liveAdded;
      this.markedForDeletion = true;
    }

    if (this.game.lives >= this.game.maxLives) {
      this.game.lives = this.game.maxLives;
    }
  }
  draw(context) {
    context.fillStyle = this.color;
    context.fillRect(this.position.x, this.position.y, this.width, this.height);
    context.fillStyle = "rgb(255, 255, 255)";
    context.fillRect(
      this.position.x + (3 * this.width) / 8,
      this.position.y + this.height / 8,
      this.width / 4,
      (3 * this.height) / 4
    );

    context.fillRect(
      this.position.x + this.width / 8,
      this.position.y + (3 * this.height) / 8,
      (3 * this.width) / 4,
      this.height / 4
    );
    context.fillStyle = "black";
    context.textAlign = "center";
    context.font = "15px Arial";
    context.fillText(
      "+5",
      this.position.x + this.width / 2 - (5 * 15) / 16,
      this.position.y + this.height / 2 + (5 * 15) / 16
    );
  }
}
