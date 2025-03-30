function getRandomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

class BossLevel2 extends BossLevel1 {
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
    width = 40,
    height = 40,
    positionOfLive = 40,
    timeBeforeChangeOfDirection = 2000,
    goldSize=20
  ) {
    super(game, position, speed, lives, color);
    this.goldSize = goldSize
    this.game = game;
    this.position = position;
    this.game.missles = game.missles;
    this.width = width;
    this.height = height;
    this.Aspeed = speed;
    this.speedMissle = speedMissle;
    this.sizeMissle = sizeMissle;
    this.livesMissle = livesMissle;
    this.markedForDeletion = false;
    this.color = color;
    this.maxLives = lives;
    this.lives = this.maxLives;
    this.count = 0;
    this.missles = new LauchMissleEnemyLevel2(
      this.game,
      GAMESTATE,
      this,
      this.speedMissle,
      this.sizeMissle,
      this.livesMissle,
      this.color
    );
    this.time = time;
    this.positionOfLive = positionOfLive;
    this.timeBeforeChangeOfDirection = timeBeforeChangeOfDirection;
    this.countBeeforeCOD = 2000;
    this.angle = 0;
    this.speed = {
      y: this.Aspeed * Math.sin(this.angle),
      x: this.Aspeed * Math.cos(this.angle)
    };
    this.money = money;
    this.limited = false;
    this.badGuy=true

  }
  update(deltaTime) {
    this.countBeeforeCOD += deltaTime;

    if (this.countBeeforeCOD >= this.timeBeforeChangeOfDirection) {
      this.angle = getRandomNumberBetween(0, 2 * Math.PI);
      this.countBeeforeCOD = 0;
      this.speed = {
        y: this.Aspeed * Math.sin(this.angle),
        x: this.Aspeed * Math.cos(this.angle)
      };
    }

    if (this.position.y + this.height >= this.game.gameHeight) {
      this.speed.y = -this.speed.y;
      this.position.y = this.game.gameHeight-this.height-1
    }

    if (this.position.y <= 0) {
      this.speed.y = -this.speed.y;
      this.position.y=1
    }


    super.update(deltaTime);
  }

  draw(context) {
    super.draw(context);
  }
}
