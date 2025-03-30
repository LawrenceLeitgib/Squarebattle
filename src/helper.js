class Helper {
  constructor(
    game,
    position,
    speed,
    live,
    color,
    time,
    speedMissle = { x: 0, y: -5 },
    sizeMissle = 10,
    livesMissle = 50,
    size = 50
  ) {
    this.game = game;
    this.width = size;
    this.height = size;
    this.position = {
      x: position.x,
      y: position.y,
    };
    this.speed = {
      x: speed.x,
      y: speed.y,
    };
    this.markedForDeletion = false;
    this.markedForTempDeletion =false
    this.color = color;
    this.maxLives = live;
    this.lives = this.maxLives;
    this.deltaLives = 0;
    this.speedMissle = speedMissle;
    this.sizeMissle = sizeMissle;
    this.livesMissle = livesMissle;
    this.time = time;
    this.count = 0;
    this.missles = []
    this.deltaXEnemy = 0;
    this.deltaYEnemy = 0;
    this.enemyDistance = 10000;
    this.countEnemy = 0;
    this.targetPosition = {
      x: 0,
      y: 0,
    };
    this.deltaY = this.position.y + this.height / 2 - this.targetPosition.y;
    this.deltaX = this.position.x + this.width / 2 - this.targetPosition.x;
    this.angle = Math.atan(this.deltaY / this.deltaX);
    this.timeBeforCOT=500;
    this.countBeforCOT=0;
    this.targetLives=100;
    this.innertCountForLaszer =0;
  }
  update(deltaTime) {
    if(this.markedForTempDeletion)return;
    this.position.y += this.speed.y;
    this.position.x += this.speed.x;
    //this.position.x -= this.speed.x;
    this.missles.forEach((object) => object.update(deltaTime));
    this.missles = this.missles.filter(
      (object) => !object.markedForDeletion
    );
    this.count += deltaTime;

    this.deltaXEnemy = 0;
    this.deltaYEnemy = 0;
    this.enemyDistance = 10000;
    this.countEnemy = 0;
    this.countBeforCOT+=deltaTime
    this.game.basicEnemys.forEach((object) => {
      if (object.badGuy && object.position.y + object.height >= 0) {
        this.countEnemy += 1;
        this.deltaXEnemy =
          this.position.x +
          this.width / 2 -
          (object.position.x + object.width / 2);
        this.deltaYEnemy =
          this.position.y +
          this.height / 2 -
          (object.position.y + object.height / 2);
        if (
          Math.sqrt(
            Math.pow(this.deltaXEnemy, 2) + Math.pow(this.deltaYEnemy, 2)
          ) < this.enemyDistance
        ) {
          this.enemyDistance = Math.sqrt(
            Math.pow(this.deltaXEnemy, 2) + Math.pow(this.deltaYEnemy, 2)
          );
          this.targetPosition.x = object.position.x + object.width / 2;
          this.targetPosition.y = object.position.y + object.height / 2;
          this.targetLives=object.lives

        }

      }
    });
    if(this.countBeforCOT>=this.timeBeforCOT){
      this.countBeforCOT=0;
    }

    if (this.countEnemy == 0) {
      this.targetPosition.x = this.position.x + this.width / 2;
      this.targetPosition.y = this.position.y + this.height / 2 - 300;
    }
    this.deltaY = this.position.y + this.height / 2 - this.targetPosition.y;
    this.deltaX = this.position.x + this.width / 2 - this.targetPosition.x;


    if (this.deltaX == 0 && this.deltaY < 0) {
      this.angle = (-3 * Math.PI) / 2;
    } else {
      this.angle = Math.atan(this.deltaY / this.deltaX);
    }

    if (this.deltaY >= 0 && this.deltaX >= 0)
      this.angle2 = -Math.PI / 2 - this.angle;
    else if (this.deltaY >= 0 && this.deltaX <= 0)
      this.angle2 = Math.PI / 2 - this.angle;
    else if (this.deltaY <= 0 && this.deltaX <= 0)
      this.angle2 = -Math.PI - Math.PI / 2 - this.angle;
    else if (this.deltaY <= 0 && this.deltaX >= 0)
      this.angle2 = -this.angle - Math.PI / 2;

    if (this.count >= this.time) {
      this.creatMissle();
      this.count = 0;
    }
    if (this.lives <= 0) {
      this.markedForTempDeletion = true;
    }

    if (this.speed.x < 0) {
      if (this.position.x <= 0) {
        this.speed.x = -this.speed.x;
        this.position.x = 0;
      }
    }
    if (this.speed.x > 0) {
      if (this.position.x + this.width >= this.game.gameWidth) {
        this.position.x = this.game.gameWidth - this.width;
        this.speed.x = -this.speed.x;
      }
    }

    this.game.basicEnemys.forEach((enemy) => {
      try {
        enemy.missles.forEach((missles) => {
          if (detectionCollision(this, missles)) {
            this.lives -= missles.lives;
            missles.lives = 0;
          }
        });
      } catch (err) {}
    });
  }

  draw(context) {
    if(this.markedForTempDeletion)return;
    context.fillStyle = this.color;
    this.missles.forEach((object) => object.draw(context));
    context.fillStyle = "rgb(115, 103, 79)";
    drawRectRotated(
      context,
      this.position.x + this.width / 2,
      this.position.y + this.height / 2,
      8,
      this.width * 0.8,
      this.angle2
    );
    let pos = getRectRotated(
      context,
      this.position.x + this.width / 2,
      this.position.y + this.height / 2,
      8,
      this.width * 0.8 - 1,
      this.angle2
    );
    let x4 = pos[0];
    let y4 = pos[1];
    drawRectRotated(context, x4, y4, 8 * 1.5, this.width / 10,   this.angle2);
    context.fillStyle = this.color;
    context.fillRect(this.position.x, this.position.y, this.width, this.height);


    context.fillStyle = "rgb(255, 0, 0)";

    context.fillRect(
      this.position.x,
      this.position.y,
      this.width,
      this.height / 10
    );
    context.fillStyle = "rgb(0, 255, 255)";

    context.fillRect(
      this.position.x,
      this.position.y,
      (this.width / this.maxLives) * this.lives,
      this.height / 10
    );
  }
  creatMissle() {
    if (this.game.gamestate === GAMESTATE.RUNNING) {
      this.missles.push(
        new MissleHelper(
          this.game,
          this,
          this.livesMissle

        )
      );
    }
  }

}
