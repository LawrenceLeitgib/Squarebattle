class Shield {
  constructor(game, position, shieldTime, speedY) {
    this.image = document.getElementById("image_shield");
    this.game = game;
    this.position = {
      x: position.x,
      y: position.y
    };
    this.width = 70;
    this.height = 70;
    this.speed = {
      x: 0,
      y: speedY
    };
    this.shieldTime = shieldTime;
    this.markedForDeletion = false;
  }

  draw(context) {
    context.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
    context.fillStyle = "white";
    context.textAlign = "center";
    context.font = "15px Arial";
    context.fillText(
      this.shieldTime / 1000 + "s",
      this.position.x + this.width / 2,
      this.position.y + this.height / 2 + (5 * 15) / 16
    );
  }
  update(deltaTime) {
    this.position.y += this.speed.y;
    this.position.x += this.speed.x;
    if (this.position.y + this.height > this.game.gameHeight) {
      this.markedForDeletion = true;
    }
    if (detectionCollision(this, this.game.spaceShip)) {
      this.game.haveShield = true;
      this.game.shieldTime = this.shieldTime;
      this.markedForDeletion = true;
    }
  }
}
