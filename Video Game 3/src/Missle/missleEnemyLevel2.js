class MissleEnemyLevel2 extends MissleEnemy {
  constructor(game, position, speed, size, lives, color = "rgb(48, 118, 230)") {
    super(game);
    this.game = game;
    this.lives = lives;
    this.speedAll = speed;
    this.size = size;
    this.width = this.size;
    this.height = this.size;
    this.markedForDeletion = false;
    this.destination = {
      x: this.game.spaceShip.position.x + this.game.spaceShip.width / 2,
      y: this.game.spaceShip.position.y + this.game.spaceShip.height / 2
    };
    //this.laucherPostion = laucherPostion;
    this.color = color;
    this.position = position;
    this.deltaY = this.destination.y - this.position.y;
    this.deltaX = this.destination.x - this.position.x;
    this.angle = Math.atan(this.deltaY / this.deltaX);
    this.speed = {
      x: 0,
      y: this.speedAll
    };
    if (this.deltaY >= 0 && this.deltaX >= 0) {
      this.speed = {
        x: this.speedAll * Math.cos(this.angle),
        y: this.speedAll * Math.sin(this.angle)
      };
    } else if (this.deltaY >= 0 && this.deltaX <= 0) {
      this.speed = {
        x: -this.speedAll * Math.cos(this.angle),
        y: -this.speedAll * Math.sin(this.angle)
      };
    } else if (this.deltaY <= 0 && this.deltaX <= 0) {
      this.speed = {
        x: -this.speedAll * Math.cos(this.angle),
        y: -this.speedAll * Math.sin(this.angle)
      };
    } else if (this.deltaY <= 0 && this.deltaX >= 0) {
      this.speed = {
        x: this.speedAll * Math.cos(this.angle),
        y: this.speedAll * Math.sin(this.angle)
      };
    }
  }
  update(deltaTime) {
    super.update(deltaTime);
  }
  draw(context) {
    super.draw(context);
  }
}
