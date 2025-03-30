class BossLevel4 extends BossLevel2 {
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
    timeBeforeChangeOfDirection = 2000,
    positionOfLive = 40,
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

    this.missles = []
    this.time = time;
    this.positionOfLive = positionOfLive;
    this.timeBeforeChangeOfDirection = timeBeforeChangeOfDirection;
    this.countBeeforeCOD = 2000;
    this.angle = 0;
    this.speed = {
      y: this.Aspeed * Math.sin(this.angle),
      x: this.Aspeed * Math.cos(this.angle),
    };
    this.money = money;
    this.limited = false;
    this.badGuy=true;
    this.misslesColor="rgb(171, 127, 5)"
    this.normalType=true;


  }
  update(deltaTime) {

    super.update(deltaTime);
  }

  draw(context) {
    context.fillStyle = "rgb(115, 103, 79)";
    drawRectRotated(
      context,
      this.position.x + this.width / 2,
      this.position.y + this.height / 2,
      this.sizeMissle,
      this.width * 0.8,
      this.angle-Math.PI/180*30
    );
    let pos = getRectRotated(
      context,
      this.position.x + this.width / 2,
      this.position.y + this.height / 2,
      this.sizeMissle,
      this.width * 0.8-1,
      this.angle-Math.PI/180*30
    );
    let x4 = pos[0];
    let y4 = pos[1];
    drawRectRotated(
      context,
      x4,
      y4,
      this.sizeMissle * 1.5,
      this.width / 10,
      this.angle-Math.PI/180*30
    );
    drawRectRotated(
      context,
      this.position.x + this.width / 2,
      this.position.y + this.height / 2,
      this.sizeMissle,
      this.width * 0.8,
      this.angle+Math.PI/180*30
    );
    pos = getRectRotated(
      context,
      this.position.x + this.width / 2,
      this.position.y + this.height / 2,
      this.sizeMissle,
      this.width * 0.8-1,
      this.angle+Math.PI/180*30
    );
    x4 = pos[0];
    y4 = pos[1];
    drawRectRotated(
      context,
      x4,
      y4,
      this.sizeMissle * 1.5,
      this.width / 10,
      this.angle+Math.PI/180*30
    );
    super.draw(context);
  }
  creatMissle() {
    if (this.game.gamestate === GAMESTATE.RUNNING) {
      this.missles.push(
        new MissleEnemyLevel2(
          this.game,
          {
            x: this.position.x + this.width / 2 -this.sizeMissle/2,
            y: this.position.y + this.height/2 -this.sizeMissle/2
          },
          this.speedMissle,
          this.sizeMissle,
          this.livesMissle,
          this.misslesColor
        )
      );
      this.missles.push(
        new MissleEnemyLevel2(
          this.game,
          {
            x: this.position.x + this.width / 2 -this.sizeMissle/2,
            y: this.position.y + this.height/2 -this.sizeMissle/2
          },
          this.speedMissle,
          this.sizeMissle,
          this.livesMissle,
          this.misslesColor,
          30
        )
      );
      this.missles.push(
        new MissleEnemyLevel2(
          this.game,
          {
            x: this.position.x + this.width / 2 -this.sizeMissle/2,
            y: this.position.y + this.height/2 -this.sizeMissle/2
          },
          this.speedMissle,
          this.sizeMissle,
          this.livesMissle,
          this.misslesColor,
          -30
        )
      );
    }
  }
}
