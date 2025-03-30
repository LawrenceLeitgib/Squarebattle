class MissleEnemyLevel3 extends MissleEnemy {
  constructor(
    game,
    position,
    speed,
    size,
    lives,
    color = "rgb(48, 118, 230)",
    timeBeforCOD=500,
    angleOfchange = 0
  ) {
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
      y: this.game.spaceShip.position.y + this.game.spaceShip.height / 2,
    };
    this.color = color;
    this.BWN=1;
    this.position = position;
    this.angleOfchange = angleOfchange;
    this.countBeforCOD = 0;
    this.timeBeforCOD = timeBeforCOD;
    this.deltaY = this.destination.y - this.position.y - this.width / 2;
    this.deltaX = this.destination.x - this.position.x - this.height / 2;
    this.angle = Math.atan(this.deltaY / this.deltaX);
    if (this.deltaX == 0 && this.deltaY < 0) {
      this.angle = (-3 * Math.PI) / 2;
    }
    this.angle += (Math.PI / 180) * this.angleOfchange;
    this.speed = {
      x: 0,
      y: this.speedAll,
    };
    if (this.deltaY >= 0 && this.deltaX >= 0) {
      this.speed = {
        x: this.speedAll * Math.cos(this.angle),
        y: this.speedAll * Math.sin(this.angle),
      };
    } else if (this.deltaY >= 0 && this.deltaX <= 0) {
      this.speed = {
        x: -this.speedAll * Math.cos(this.angle),
        y: -this.speedAll * Math.sin(this.angle),
      };
    } else if (this.deltaY <= 0 && this.deltaX <= 0) {
      this.speed = {
        x: -this.speedAll * Math.cos(this.angle),
        y: -this.speedAll * Math.sin(this.angle),
      };
    } else if (this.deltaY <= 0 && this.deltaX >= 0) {
      this.speed = {
        x: this.speedAll * Math.cos(this.angle),
        y: this.speedAll * Math.sin(this.angle),
      };
    }
  }
  update(deltaTime) {
    this.countBeforCOD+=deltaTime
    if (this.countBeforCOD >= this.timeBeforCOD) {
      this.destination = {
        x: this.game.spaceShip.position.x + this.game.spaceShip.width / 2,
        y: this.game.spaceShip.position.y + this.game.spaceShip.height / 2,
      };
      this.deltaY = this.destination.y - this.position.y - this.width / 2;
      this.deltaX = this.destination.x - this.position.x - this.height / 2;
      this.angle = Math.atan(this.deltaY / this.deltaX);
      this.countBeforCOD = 0;
    }


    if (this.deltaX == 0 && this.deltaY < 0) {
      this.angle = (-3 * Math.PI) / 2;
    }
    this.angle += (Math.PI / 180) * this.angleOfchange;
    if (this.deltaY >= 0 && this.deltaX >= 0) {
      this.speed = {
        x: this.speedAll * Math.cos(this.angle),
        y: this.speedAll * Math.sin(this.angle),
      };
    } else if (this.deltaY >= 0 && this.deltaX <= 0) {
      this.speed = {
        x: -this.speedAll * Math.cos(this.angle),
        y: -this.speedAll * Math.sin(this.angle),
      };
    } else if (this.deltaY <= 0 && this.deltaX <= 0) {
      this.speed = {
        x: -this.speedAll * Math.cos(this.angle),
        y: -this.speedAll * Math.sin(this.angle),
      };
    } else if (this.deltaY <= 0 && this.deltaX >= 0) {
      this.speed = {
        x: this.speedAll * Math.cos(this.angle),
        y: this.speedAll * Math.sin(this.angle),
      };
    }
    super.update(deltaTime);
  }
  draw(context) {
    super.draw(context);
  }
}
