

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
    livesMissle = 1,
    goldSize=20
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
    this.missles = []
    this.money = money;
    this.destination = {
      x: this.game.spaceShip.position.x + this.game.spaceShip.width / 2,
      y: this.game.spaceShip.position.y + this.game.spaceShip.height / 2,
    };
    this.deltaY = this.destination.y - this.position.x + this.width / 2;
    this.deltaX = this.destination.x - this.position.x + this.height / 2;
    this.angle = Math.atan(this.deltaY / this.deltaX);
    this.badGuy=true;
    this.normalType=true;


  }
  update(deltaTime) {
    super.update(deltaTime);

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
      this.angle = Math.PI / 2 - this.angle;
    else if (this.deltaY >= 0 && this.deltaX <= 0)
      this.angle = -Math.PI / 2 - this.angle;
    else if (this.deltaY <= 0 && this.deltaX <= 0)
      this.angle = Math.PI + Math.PI / 2 - this.angle;
    else if (this.deltaY <= 0 && this.deltaX >= 0)
      this.angle = -this.angle + Math.PI / 2;


  }
  draw(context) {
    super.draw(context);

  }
  creatMissle() {
    if(this.position.y+this.height>=0){

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
          this.color
        )
      );
    }}
  }
}
