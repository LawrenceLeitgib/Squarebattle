
class BasicEnemyLevel2 extends BasicEnemy {
  constructor(
    game,
    position,
    speed,
    lives,
    time,
    color,
    money = 1,
    speedMissle = {
      x: 0,
      y: 5,
    },
    sizeMissle = 8,
    livesMissle = 1,
    size = 50,
    goldSize=20
  ) {
    super(game, position, speed);
    this.goldSize = goldSize
    this.sizeMissle = sizeMissle;
    this.livesMissle = livesMissle;
    this.game = game;
    this.position = position;
    this.game.missles = game.missles;
    this.width = size;
    this.height = size;
    this.speed = speed;
    this.markedForDeletion = false;
    this.color = color;
    this.maxLives = lives;
    this.lives = this.maxLives;
    this.count = 0;
    this.speedMissle = speedMissle;
    this.missles = new LauchMissleEnemy(
      this.game,
      GAMESTATE,
      this,
      this.speedMissle,
      this.sizeMissle,
      this.livesMissle,
      this.color
    );
    this.time = time;
    this.money = money;
    this.angle = 0;
    if (this.speedMissle.x > 0.01 ||this.speedMissle.x < -0.01) {
      this.angle = Math.atan(this.speedMissle.y / this.speedMissle.x);
    }
    this.badGuy=true

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
      this.angle
    );
    let pos = getRectRotated(
      context,
      this.position.x + this.width / 2,
      this.position.y + this.height / 2,
      this.sizeMissle,
      this.width * 0.8 - 1,
      this.angle
    );
    let x4 = pos[0];
    let y4 = pos[1];
    drawRectRotated(
      context,
      x4,
      y4,
      this.sizeMissle * 1.5,
      this.width / 10,
      this.angle
    );
    super.draw(context);
  }
}
