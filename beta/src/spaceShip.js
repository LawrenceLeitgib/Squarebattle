//let audioMovement = new Audio("assets/audio/movement.mp3");
//audioMovement.volume=1;

class SpaceShip {
  constructor(game) {
    this.gameHeight = game.gameHeight;
    this.gameWidth = game.gameWidth;
    this.game = game;
    this.height = 40;
    this.width = 40;
    this.absMaxspeed = 10;
    this.speed = {
      x: 0,
      y: 0,
    };
    this.maxSpeed = {
      x: this.absMaxspeed,
      y: this.absMaxspeed,
    };
    this.position = {
      x: this.gameWidth / 2 - this.width / 2,
      y: this.gameHeight - this.height,
    };
    this.circleRad = 50;
    this.regenerationPourecent = 0;
    this.regenerationCount = 0;
    this.regenerationTime = 1000;
    this.mousePosition = this.game.mousePosition;
    this.deltaY = this.position.y - this.mousePosition.y;
    this.deltaX = this.position.x + this.width / 2 - this.mousePosition.x;
    this.angle = Math.atan(this.deltaY / this.deltaX);
    this.hitCount=0;
    this.hitTime=150;
  }

  moveDown() {
    this.speed.y = this.maxSpeed.y;
  }
  moveUp() {
    this.speed.y = -this.maxSpeed.y;
  }
  stopY() {
    this.speed.y = 0;
  }

  moveLeft() {
    this.speed.x = -this.maxSpeed.x;
  }
  moveRight() {
    this.speed.x = this.maxSpeed.x;
  }
  slowDown() {
    this.maxSpeed.x = this.absMaxspeed / 5;
    this.maxSpeed.y = this.absMaxspeed / 5;
    if (this.speed.x > 0) this.speed.x = this.maxSpeed.x;
    if (this.speed.x < 0) this.speed.x = -this.maxSpeed.x;
    if (this.speed.y > 0) this.speed.y = this.maxSpeed.y;
    if (this.speed.y < 0) this.speed.y = -this.maxSpeed.y;
  }
  stopSlowDown() {
    this.maxSpeed.x = this.absMaxspeed;
    this.maxSpeed.y = this.absMaxspeed;
    if (this.speed.x > 0) this.speed.x = this.maxSpeed.x;
    if (this.speed.x < 0) this.speed.x = -this.maxSpeed.x;
    if (this.speed.y > 0) this.speed.y = this.maxSpeed.y;
    if (this.speed.y < 0) this.speed.y = -this.maxSpeed.y;
  }
  stopX() {
    this.speed.x = 0;
  }

  draw(context) {
    drawSpaceShipCanon(this.game, this, context);
    context.fillStyle = "rgb(30, 176, 110)";
    context.fillRect(this.position.x, this.position.y, this.width, this.height);
    context.fillStyle = "rgb(255, 0, 0)";
    context.fillRect(
      this.position.x,
      this.position.y,
      this.width,
      this.height / 10
    );
    context.fillStyle = "rgb(0, 255, 50)";
    context.fillRect(
      this.position.x,
      this.position.y,
      (this.width / this.game.maxLives) * this.game.lives,
      this.height / 10
    );
    if (this.game.haveShield) {
      context.fillStyle = "rgba(0, 0, 255, .3)";
      context.beginPath();
      context.arc(
        this.position.x + this.width / 2,
        this.position.y + this.height / 2,
        this.circleRad,
        0,
        2 * Math.PI
      );
      context.fill();
      context.fillStyle = "rgb(0, 0, 0)";
      context.textAlign = "center";
      context.font = "15px Arial";
      context.fillText(
        Math.round(this.game.shieldTime / 100) / 10.0 + "s",
        this.position.x + this.width / 2,
        this.position.y + this.height / 2
      );
    }
  }
  update(deltaTime) {
    this.position.y += this.speed.y;
    this.position.x += this.speed.x;
    /*
    if(this.speed.y!=0 ||this.speed.x!=0){
      if(audioMovement.ended){
        audioMovement.currentTime=0
      }

      //audioMovement.play();

    }*/
    this.regenerationCount += deltaTime;
    if (this.regenerationCount >= this.regenerationTime) {
      //console.log(this.game.missles.missles)
      this.game.lives +=
        (this.game.maxLives / 100) * this.regenerationPourecent;
      if (this.game.lives >= this.game.maxLives) {
        this.game.lives = this.game.maxLives;
      }
      this.regenerationCount = 0;
    }
    this.hitCount+=deltaTime
    if (!this.game.haveShield) {
      this.game.basicEnemys.forEach((enemy) => {
        try {
          enemy.missles.forEach((missles) => {
            if (detectionCollision(this, missles)) {
              this.game.lives -= missles.lives;
              this.position.x+=(missles.speed.x*3*missles.lives*20/game.maxLives)/2
              this.position.y+=(missles.speed.y*3*missles.lives*20/game.maxLives)/2
              missles.lives = 0;
              if(this.hitCount>=this.hitTime){
                if(this.game.soundOn){
              (new Audio("assets/audio/WhenYouAreHit.mp3")).play();
              }
              this.hitCount=0;
            }

            }
          });
        } catch (err) {}
      });
    }
    if (this.position.y < 0) {
      this.position.y = 0;
      this.speed.y = 0;
    }
    if (this.position.y > this.gameHeight - this.height) {
      this.position.y = this.gameHeight - this.height;
      this.speed.y = 0;
    }

    if (this.position.x < 0) {
      this.position.x = 0;
      this.speed.x = 0;
    }
    if (this.position.x > this.gameWidth - this.width) {
      this.position.x = this.gameWidth - this.width;
      this.speed.x = 0;
    }
    if (this.game.shieldTime > 0) {
      this.game.shieldTime -= deltaTime;
    } else this.game.haveShield = false;
    this.mousePosition = this.game.mousePosition;
    this.deltaY = this.position.y + this.height / 2 - this.mousePosition.y;
    this.deltaX = this.position.x + this.width / 2 - this.mousePosition.x;
    if (this.deltaX == 0 && this.deltaY < 0) {
      this.angle = -3*Math.PI/2;
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
  }
}
