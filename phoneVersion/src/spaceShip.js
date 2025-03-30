let canvas2 = document.getElementById("mouvingButton");
var touch1X;
var touch1Y;
var touchNew1X;
var touchNew1Y;
var touchNew2X;
var touchNew2Y;

let touch1 = false;
let inSqaure = false;

canvas2.addEventListener("touchstart", function (e) {
  var cRect = canvas2.getBoundingClientRect(); // Gets CSS pos, and width/height
  clientX = e.touches[0].clientX;
  clientY = e.touches[0].clientY;

  touchNew1X = Math.round(clientX - cRect.left);
  touchNew1Y = Math.round(clientY - cRect.top);
  if (
    touchNew1X >= -50 &&
    touchNew1X <= 250 &&
    touchNew1Y >= -50 &&
    touchNew1Y <= 250
  ) {
    touch1X = Math.round(clientX - cRect.left); // Subtract the 'left' of the canvas
    touch1Y = Math.round(clientY - cRect.top); // from the X/Y positions to make
  }
  if (e.touches.length >= 2) {
    clientX2 = e.touches[1].clientX;
    clientY2 = e.touches[1].clientY;

    touchNew2X = Math.round(clientX2 - cRect.left);
    touchNew2Y = Math.round(clientY2 - cRect.top);
    if (
      touchNew2X >= -50 &&
      touchNew2X <= 250 &&
      touchNew2Y >= -50 &&
      touchNew2Y <= 250
    ) {
      touch1X = Math.round(clientX2 - cRect.left); // Subtract the 'left' of the canvas
      touch1Y = Math.round(clientY2 - cRect.top); // from the X/Y positions to make
    }
  }
  touch1 = true;
});
canvas2.addEventListener("touchmove", function (e) {
  var cRect = canvas2.getBoundingClientRect(); // Gets CSS pos, and width/height
  clientX = e.touches[0].clientX;
  clientY = e.touches[0].clientY;

  touchNew1X = Math.round(clientX - cRect.left);
  touchNew1Y = Math.round(clientY - cRect.top);
  if (
    touchNew1X >= -50 &&
    touchNew1X <= 250 &&
    touchNew1Y >= -50 &&
    touchNew1Y <= 250
  ) {
    touch1X = Math.round(clientX - cRect.left); // Subtract the 'left' of the canvas
    touch1Y = Math.round(clientY - cRect.top); // from the X/Y positions to make
  }
  if (e.touches.length >= 2) {
    clientX2 = e.touches[1].clientX;
    clientY2 = e.touches[1].clientY;

    touchNew2X = Math.round(clientX2 - cRect.left);
    touchNew2Y = Math.round(clientY2 - cRect.top);
    if (
      touchNew2X >= -50 &&
      touchNew2X <= 250 &&
      touchNew2Y >= -50 &&
      touchNew2Y <= 250
    ) {
      touch1X = Math.round(clientX2 - cRect.left); // Subtract the 'left' of the canvas
      touch1Y = Math.round(clientY2 - cRect.top); // from the X/Y positions to make
    }
  }
});

canvas2.addEventListener("touchend", (e) => {
  touch1 = false;
});

class SpaceShip {
  constructor(game) {
    this.touch1 = {
      x: touch1X,
      y: touch1Y,
    };
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
    this.targetPosition = {
      x: 0,
      y: 0,
    };
    this.deltaY = this.position.y + this.height / 2 - this.targetPosition.y;
    this.deltaX = this.position.x + this.width / 2 - this.targetPosition.x;

    this.angle = Math.atan(this.deltaY / this.deltaX);
    this.rationsquare = 3;
    this.rectForTouchDown = {
      x: 0,
      y: 0,
      width: 150,
      height: 150,
    };
    this.smallRect = {
      x: this.rectForTouchDown.x + this.rectForTouchDown.width / 2 - 80 / 2,
      y: this.rectForTouchDown.y + this.rectForTouchDown.height / 2 - 80 / 2,
      width: 80,
      height: 80,
    };
    this.deltaXEnemy = 0;
    this.deltaYEnemy = 0;
    this.enemyDistance = 10000;
    this.countEnemy = 0;

    this.destinationP = {
      x: this.rectForTouchDown.x + this.rectForTouchDown.width / 2,
      y: this.rectForTouchDown.y + this.rectForTouchDown.height / 2,
    };

    this.deltaYP =
      this.destinationP.y - this.smallRect.y - this.smallRect.width / 2;
    this.deltaXP =
      this.destinationP.x - this.smallRect.x - this.smallRect.height / 2;
    this.angleP = Math.atan(this.deltaYP / this.deltaXP);
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

  draw(context, context2) {
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
    fillRectB(
      this.rectForTouchDown,
      context2,
      "rgba(158, 111, 0,0)",
      "rgba(6, 135, 209,0.5)",
      this.game
    );

    context2.fill();
    context2.fillStyle = "rgba(6, 135, 209,0.5)";
    context2.beginPath();
    context2.arc(
      this.smallRect.x + this.smallRect.width / 2,
      this.smallRect.y + this.smallRect.height / 2,
      this.smallRect.width / 2,
      0,
      2 * Math.PI
    );
    context2.fill();
  }
  update(deltaTime) {
    this.touch1 = {
      x: touch1X,
      y: touch1Y,
    };
    this.position.y += this.speed.y;
    this.position.x += this.speed.x;

    this.regenerationCount += deltaTime;
    if (this.regenerationCount >= this.regenerationTime) {
      this.game.lives +=
        (this.game.maxLives / 100) * this.regenerationPourecent;
      if (this.game.lives >= this.game.maxLives) {
        this.game.lives = this.game.maxLives;
      }
      this.regenerationCount = 0;
    }

    if (!this.game.haveShield) {
      this.game.basicEnemys.forEach((enemy) => {
        try {
          enemy.missles.missles.forEach((missles) => {
            if (detectionCollision(this, missles)) {
              this.game.lives -= missles.lives;
              this.position.x +=
                (missles.speed.x * 3 * missles.lives * 20) / game.maxLives;
              this.position.y +=
                (missles.speed.y * 3 * missles.lives * 20) / game.maxLives;
              missles.lives = 0;
            }
          });
        } catch (err) {}
      });
    }

    if (this.position.y <= 0) {
      this.position.y = 0;
      this.speed.y = 0;
    }
    if (this.position.y >= this.game.gameHeight - this.height) {
      this.position.y = this.game.gameHeight - this.height;
      this.speed.y = 0;
    }
    if (this.position.x <= 0) {
      this.position.x = 0;
      this.speed.x = 0;
    }
    if (this.position.x >= this.game.gameWidth - this.width) {
      this.position.x = this.game.gameWidth - this.width;
      this.speed.x = 0;
    }

    if (this.game.shieldTime > 0) {
      this.game.shieldTime -= deltaTime;
    } else this.game.haveShield = false;
    this.mousePosition = this.game.mousePosition;
    this.deltaXEnemy = 0;
    this.deltaYEnemy = 0;
    this.enemyDistance = 10000;
    this.countEnemy = 0;
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
        }
      }
    });
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

    if (this.smallRect.x <= 0) {
      this.smallRect.x = 0;
    }
    if (this.smallRect.y <= this.rectForTouchDown.y) {
      this.smallRect.y = this.rectForTouchDown.y;
    }
    if (
      this.smallRect.x + this.smallRect.width >=
      this.rectForTouchDown.width
    ) {
      this.smallRect.x = this.rectForTouchDown.width - this.smallRect.width;
    }
    if (this.smallRect.y + this.smallRect.height >= this.gameHeight) {
      this.smallRect.y = this.gameHeight - this.smallRect.height;
    }

    if (touch1) {
      this.smallRect.x = this.touch1.x - this.smallRect.width / 2;
      this.smallRect.y = this.touch1.y - this.smallRect.height / 2;
    } else {
      this.smallRect = {
        x: this.rectForTouchDown.x + this.rectForTouchDown.width / 2 - 80 / 2,
        y: this.rectForTouchDown.y + this.rectForTouchDown.height / 2 - 80 / 2,
        width: 80,
        height: 80,
      };
    }
    if (this.smallRect.x + this.smallRect.width / 2 <= 0) {
      this.smallRect.x = -this.smallRect.width / 2;
    }
    if (
      this.smallRect.x + this.smallRect.width / 2 >=
      this.rectForTouchDown.width
    ) {
      this.smallRect.x =
        -this.smallRect.width / 2 + this.rectForTouchDown.width;
    }
    if (this.smallRect.y + this.smallRect.height / 2 <= 0) {
      this.smallRect.y = -this.smallRect.height / 2;
    }
    if (
      this.smallRect.y + this.smallRect.height / 2 >=
      this.rectForTouchDown.height
    ) {
      this.smallRect.y =
        -this.smallRect.height / 2 + this.rectForTouchDown.height;
    }
    this.deltaYP =
      this.destinationP.y - this.smallRect.y - this.smallRect.height / 2;
    this.deltaXP =
      this.destinationP.x - this.smallRect.x - this.smallRect.width / 2;
    if (Math.abs(this.deltaYP) < 7) this.deltaYP = 0;
    if (Math.abs(this.deltaXP) < 7) this.deltaXP = 0;

    this.angleP = Math.atan(this.deltaYP / this.deltaXP);
    if (this.deltaXP == 0 && this.deltaYP <= 0) {
      this.angleP = (-3 * Math.PI) / 2;
    } else {
      this.angleP = Math.atan(this.deltaYP / this.deltaXP);
    }
    if (Math.abs(this.deltaXP) > 15 || Math.abs(this.deltaYP) > 15) {
    if (this.deltaYP >= 0 && this.deltaXP >= 0) {
      this.speed = {
        x: -this.absMaxspeed * Math.cos(this.angleP),
        y: -this.absMaxspeed * Math.sin(this.angleP),
      };
    } else if (this.deltaYP >= 0 && this.deltaXP <= 0) {
      this.speed = {
        x: this.absMaxspeed * Math.cos(this.angleP),
        y: this.absMaxspeed * Math.sin(this.angleP),
      };
    } else if (this.deltaYP <= 0 && this.deltaXP <= 0) {
      this.speed = {
        x: this.absMaxspeed * Math.cos(this.angleP),
        y: this.absMaxspeed * Math.sin(this.angleP),
      };
    } else if (this.deltaYP <= 0 && this.deltaXP >= 0) {
      this.speed = {
        x: -this.absMaxspeed * Math.cos(this.angleP),
        y: -this.absMaxspeed * Math.sin(this.angleP),
      };
    }
    /*
      if (
        this.position.x <= 0 ||
        this.position.x + this.width >= this.game.gameWidth
      ) {
        if (this.speed.y != 0) {
          this.speed.y =
            (this.speed.y / Math.abs(this.speed.y)) * this.absMaxspeed;
        }
      }

      if (
        this.position.y <= 0 ||
        this.position.y + this.height >= this.game.gameHeight
      ) {
        if (this.speed.x != 0) {
          this.speed.x =
            (this.speed.x / Math.abs(this.speed.x)) * this.absMaxspeed;
        }
      }
      */
    } else {
      this.speed = {
        x: 0,
        y: 0,
      };
    }

  }
}
