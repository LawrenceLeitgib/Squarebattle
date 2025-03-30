

class BossLevel3 extends BossLevel2 {
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
    timeBeforeTeleportion = 1000,
    timeDuringTeleportion = 500,
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
    this.missles = new LauchMissleEnemyLevel2(
      this.game,
      GAMESTATE,
      this,
      this.speedMissle,
      this.sizeMissle,
      this.livesMissle,
      "rgb(171, 127, 5)"
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
    this.teleportationCount = 0
    this.timeBeforeTeleportion =timeBeforeTeleportion
    this.timeDuringTeleportion =timeDuringTeleportion
    this.limited = false;
    this.badGuy=true

  }
  update(deltaTime) {
    this.teleportationCount +=deltaTime
    if(this.teleportationCount>=this.timeBeforeTeleportion){
      if (this.teleportationCount>=this.timeBeforeTeleportion+this.timeDuringTeleportion){
          this.teleportationCount=0
          this.missles.missles=[]
          this.position.x = getRandomNumberBetween(10, this.game.gameWidth-this.width-10);
          this.position.y = getRandomNumberBetween(10, this.game.gameHeight-this.height-10);
      }
      return;
    }
    super.update(deltaTime);
  }

  draw(context) {
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
    if(this.teleportationCount>=this.timeBeforeTeleportion){
      return;
    }
    super.draw(context);
  }
}
