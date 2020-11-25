class BasicEnemyLevel3 extends BasicEnemyLevel2 {
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
    livesMissle = 1
  ) {
    super(game, position, speed, lives, time);
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
    this.missles = new LauchMissleEnemyLevel2(
      this.game,
      GAMESTATE,
      this,
      this.speedMissle,
      this.sizeMissle,
      this.livesMissle,
      this.color
    );
    this.money = money;
  }
  update(deltaTime) {
    super.update(deltaTime);
  }
  draw(context) {
    super.draw(context);
  }
}
