class Helper{
  constructor(game, position, speed, live, color,time,speedMissle = {x: 0,y: -5},sizeMissle = 10,livesMissle = 1,size = 50) {
    this.game = game;
    this.width = size;
    this.height = size;
    this.position = {
      x: position.x,
      y: position.y
    };
    this.speed = {
      x: speed.x,
      y: speed.y
    };
    this.markedForDeletion = false;
    this.color = color;
    this.maxLives = live;
    this.lives = this.maxLives;
    this.deltaLives = 0;
    this.speedMissle=speedMissle
    this.sizeMissle = sizeMissle
    this.livesMissle = livesMissle;
    this.time =time
    this.count=0

    this.missles = new LauchMissleEnemy(
      this.game,
      GAMESTATE,
      this,
      this.speedMissle,
      this.sizeMissle,
      this.livesMissle,
      this.color
    );

  }
  update(deltaTime) {
    this.position.y += this.speed.y;
    this.position.x += this.speed.x;
    if (this.position.y + this.height > this.game.gameHeight + 5) {
      this.markedForDeletion = true;
    }
    this.missles.missles.forEach((object) => object.update(deltaTime));
    this.missles.missles = this.missles.missles.filter(
      (object) => !object.markedForDeletion
    );
    this.count += deltaTime;
    if (this.count >= this.time) {
      this.missles.creatMissle();
      this.count = 0;
    }

    if (this.lives <= 0) {
      this.markedForDeletion = true;
    }
    if (this.position.x <= 0) {
      this.speed.x = -this.speed.x;
    }
    if (this.position.x + this.width >= this.game.gameWidth) {
      this.speed.x = -this.speed.x;
    }
    this.game.basicEnemys.forEach((enemy) => {
        try {
          enemy.missles.missles.forEach((missles) => {
            if (detectionCollision(this, missles)) {
              this.lives -= missles.lives;
              missles.lives = 0;
            }
          });
        } catch (err) {}
      });
  }

  draw(context) {
    context.fillStyle = this.color;
    context.fillRect(this.position.x, this.position.y, this.width, this.height);
    this.missles.missles.forEach((object) => object.draw(context));
    context.fillStyle = "rgb(255, 0, 0)";

    context.fillRect(
      this.position.x,
      this.position.y,
      this.width ,
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
}
