class BossLevel1 extends BasicEnemyLevel3 {
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
    positionOfLive = 40
  ) {
    super(game, position, speed, lives, color);
    this.game = game;
    this.position = position;
    this.game.missles = game.missles;
    this.width = width;
    this.height = height;
    this.speed = speed;
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
    this.money = money;
    this.limited = true;
  }
  update(deltaTime) {
    if (this.limited) {
      if (this.position.y > this.game.gameHeight / 2) {
        this.speed.y = 0;
        this.position.y = this.game.gameHeight / 2;
      }
    }

    super.update(deltaTime);
  }

  draw(context) {
    super.draw(context);
    context.fillStyle = "rgb(56, 5, 2)";
    context.fillRect(
      this.game.gameWidth / 4,
      this.positionOfLive,
      this.game.gameWidth / 2,
      30
    );
    context.fillStyle = "rgb(255, 0, 0)";
    context.fillRect(
      this.game.gameWidth / 4,
      this.positionOfLive,
      (this.game.gameWidth / 2 / this.maxLives) * this.lives,
      30
    );
  }
}
