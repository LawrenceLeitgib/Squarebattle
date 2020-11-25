class Missle {
  constructor(game, lives, addingMissleNumber = 0, numMissiles = 1,numY=0) {
    this.gameHeight = game.gameHeight;
    this.gameWidth = game.gameWidth;
    this.width = 8;
    this.height = 8;
    this.game = game;
    this.markedForDeletion = false;
    this.color = "rgb(255, 100, 0)";
    this.lives = lives;
    this.numY =numY

    this.mousePosition = this.game.mousePosition;
    this.deltaY = this.game.spaceShip.position.y - this.mousePosition.y;
    this.deltaX =
      this.game.spaceShip.position.x +
      this.game.spaceShip.width / 2 -
      this.mousePosition.x;
    this.totalSpeed = 13;
    this.speed = {
      x: 0,
      y: this.totalSpeed
    };
    this.angle = Math.atan(this.deltaY / this.deltaX);
    if (this.deltaY >= 0 && this.deltaX >= 0) {
      this.speed = {
        x: -this.totalSpeed * Math.cos(this.angle),
        y: -this.totalSpeed * Math.sin(this.angle)
      };
    } else if (this.deltaY >= 0 && this.deltaX <= 0) {
      this.speed = {
        x: this.totalSpeed * Math.cos(this.angle),
        y: this.totalSpeed * Math.sin(this.angle)
      };
    } else if (this.deltaY <= 0 && this.deltaX <= 0) {
      this.speed = {
        x: this.totalSpeed * Math.cos(this.angle),
        y: this.totalSpeed * Math.sin(this.angle)
      };
    } else if (this.deltaY <= 0 && this.deltaX >= 0) {
      this.speed = {
        x: -this.totalSpeed * Math.cos(this.angle),
        y: -this.totalSpeed * Math.sin(this.angle)
      };
    }
    this.addingMissleNumber = addingMissleNumber;
    this.position = {
      x:
        this.game.spaceShip.position.x +
        this.game.spaceShip.width / 2 -
        this.width / 2,
      y: this.game.spaceShip.position.y - this.height
    };
    this.numMissiles = numMissiles;
    if (this.numMissiles === 1) {
      this.position = {
        x: this.position.x,
        y: this.position.y
      };
    } else if (numMissiles>=1 && numMissiles<=5) {
      this.position = {
        x: this.position.x + this.addingMissleNumber,
        y: this.position.y
      };
    } else{
      this.position = {
        x: this.position.x + this.addingMissleNumber,
        y: this.position.y +this.numY
      };
    }
  }

  update(deltaTime) {
    this.position.y += this.speed.y;
    this.position.x += this.speed.x;
    if (this.position.y <= -5) this.markedForDeletion = true;
    if (this.position.y >= this.gameHeight + 5) this.markedForDeletion = true;
    if (this.position.x <= -5) this.markedForDeletion = true;
    if (this.position.x >= this.gameWidth + 5) this.markedForDeletion = true;

    if (this.lives <= 0) {
      this.markedForDeletion = true;
    }
    /*
    this.game.basicEnemys.forEach((object) => {
      if (detectionCollision(this, object)) {
        object.markedForDeletion = true;
        this.markedForDeletion = true;
      }
    });
  */
  }
  draw(context) {
    context.fillStyle = this.color;
    context.fillRect(this.position.x, this.position.y, this.width, this.height);
    //context.fillText("X: " + xPos + ", Y: " + yPos, 200, 200);
  }
}
