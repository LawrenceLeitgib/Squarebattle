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
      y: 5
    },
    sizeMissle = 8,
    livesMissle = 1,
    size = 50
  ) {
    super(game, position, speed);
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
  }
  update(deltaTime) {
    super.update(deltaTime);
    /*
    if (this.position.y > this.game.gameHeight / 2) {
      this.speed.y = 0;
    }
*/
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
    super.draw(context);
    /*
    context.fillStyle = "black";
    context.textAlign = "center";
    context.font = "15px Arial";
    context.fillText(
      this.lives,
      this.position.x + this.width / 2,
      this.position.y + this.height / 2 + (5 * 15) / 16
    );
    */
  }
}
