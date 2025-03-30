
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
    this.missles = []
    this.time = time;
    this.money = money;
    this.angle = 0;
    if (this.speedMissle.x > 0.01 ||this.speedMissle.x < -0.01) {
      this.angle = Math.atan(this.speedMissle.y / this.speedMissle.x);
    }
    this.badGuy=true;
    this.normalType=true;

  }
  update(deltaTime) {
    super.update(deltaTime);

    this.missles.forEach((object) => object.update(deltaTime));
    this.missles = this.missles.filter(
      (object) => !object.markedForDeletion
    );
    this.count += deltaTime;
    if (this.count >= this.time) {
      this.creatMissle();
      this.count = 0;
    }
  }
  draw(context) {
    this.missles.forEach((object) => object.draw(context));
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
  creatMissle() {
    if(this.position.y+this.height>=0){
    if (this.game.gamestate === GAMESTATE.RUNNING) {
      this.missles.push(
        new MissleEnemy(
          this.game,
          {
            x:
              this.position.x +
              this.width / 2 -
              this.sizeMissle / 2,
            y: this.position.y + this.height/2
          },
          this.speedMissle,
          this.sizeMissle,
          this.livesMissle,
          this.color
        )
      );
    }
  }}
}
