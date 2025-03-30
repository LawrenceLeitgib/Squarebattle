

class BasicEnemyLevel5 extends BasicEnemy {
  constructor(
    game,
    position,
    speed,
    lives,
    time,
    color,
    money = 1,
    speedMissle = 10,
    sizeMissle = 8,
    livesMissle = 1,
    timeBeforCOD=500,
    goldSize=20,
  ) {
    super(game, position, speed, lives, time);
    this.goldSize = goldSize
    this.game = game;
    this.position = position;
    this.game.missles = game.missles;
    this.maxLives = lives;
    this.lives = this.maxLives;
    this.width = 50;
    this.height = 50;
    this.speed = speed;
    this.speedMissle = speedMissle;
    this.sizeMissle = sizeMissle;
    this.livesMissle = livesMissle;
    this.markedForDeletion = false;
    this.color = color;
    this.count = 0;
    this.time = time;
    this.timeBeforCOD=timeBeforCOD
    this.missles = new LauchMissleEnemyLevel3(
      this.game,
      GAMESTATE,
      this,
      this.speedMissle,
      this.sizeMissle,
      this.livesMissle,
      this.color,
      this.timeBeforCOD

    );
    this.money = money;
    this.destination = {
      x: this.game.spaceShip.position.x + this.game.spaceShip.width / 2,
      y: this.game.spaceShip.position.y + this.game.spaceShip.height / 2,
    };
    this.deltaY = this.destination.y - this.position.x + this.width / 2;
    this.deltaX = this.destination.x - this.position.x + this.height / 2;
    this.angle = Math.atan(this.deltaY / this.deltaX);
  }
  update(deltaTime) {
    super.update(deltaTime);
    this.missles.missles.forEach((object) => object.update(deltaTime));
    this.missles.missles = this.missles.missles.filter(
      (object) => !object.markedForDeletion
    );
    this.count += deltaTime;
    if (this.count >= this.time) {
      this.missles.creatMissle();
      this.count = 0;
    }
    this.destination = {
      x: this.game.spaceShip.position.x + this.game.spaceShip.width / 2,
      y: this.game.spaceShip.position.y + this.game.spaceShip.height / 2,
    };
    this.deltaY = this.destination.y - (this.position.y + this.height / 2);
    this.deltaX = this.destination.x - (this.position.x + this.height / 2);
    this.angle = Math.atan(this.deltaY / this.deltaX);
    //console.log(Math.abs(this.angle))
    if (this.deltaX == 0 && this.deltaY < 0) {
      this.angle = -3*Math.PI/2;
    }
    if (this.deltaY >= 0 && this.deltaX >= 0)
      this.angle2 = Math.PI / 2 - this.angle;
    else if (this.deltaY >= 0 && this.deltaX <= 0)
      this.angle2 = -Math.PI / 2 - this.angle;
    else if (this.deltaY <= 0 && this.deltaX <= 0)
      this.angle2 = Math.PI + Math.PI / 2 - this.angle;
    else if (this.deltaY <= 0 && this.deltaX >= 0)
      this.angle2 = -this.angle + Math.PI / 2;

    /*
    if (this.deltaY >= 0 && this.deltaX >= 0) this.angle3 = Math.PI / 2-this.angle;
    else if (this.deltaY >= 0 && this.deltaX <= 0) this.angle3 =  -Math.PI / 2-this.angle;
    else if (this.deltaY <= 0 && this.deltaX <= 0) this.angle3 = Math.PI+Math.PI / 2-this.angle;
    else if (this.deltaY <= 0 && this.deltaX >= 0) this.angle3 = -this.angle+ Math.PI/2
    console.log(this.angle3)
    */
  }
  draw(context) {
    this.missles.missles.forEach((object) => object.draw(context));
    context.fillStyle = "rgb(115, 103, 79)";
    drawRectRotated(
      context,
      this.position.x + this.width / 2,
      this.position.y + this.height / 2,
      this.sizeMissle,
      this.width * 0.8,
      this.angle2
    );
    let pos = getRectRotated(
      context,
      this.position.x + this.width / 2,
      this.position.y + this.height / 2,
      this.sizeMissle,
      this.width * 0.8-1,
      this.angle2
    );
    let x4 = pos[0];
    let y4 = pos[1];
    drawRectRotated(
      context,
      x4,
      y4,
      this.sizeMissle * 1.5,
      this.width / 10,
      this.angle2
    );
    super.draw(context);
  }
}
