class Missle {
  constructor(game, lives, addingMissleNumber = 0, numMissiles = 1, numY = 0) {
    this.gameHeight = game.gameHeight;
    this.gameWidth = game.gameWidth;
    this.width = 8;
    this.height = 8;
    this.game = game;
    this.markedForDeletion = false;
    this.color = "rgb(222, 33, 33)";
    this.lives = lives;
    this.numY = numY;

    this.mousePosition = this.game.mousePosition;
    /*
    if(this.game.clickDown){
    this.deltaY =
      this.game.spaceShip.position.y +
      this.game.spaceShip.height / 2 -
      this.mousePosition.y;
    this.deltaX =
      this.game.spaceShip.position.x +
      this.game.spaceShip.width / 2 -
      this.mousePosition.x;
    }
    */
      this.deltaY=this.game.spaceShip.deltaY
      this.deltaX =this.game.spaceShip.deltaX

    this.totalSpeed = 40;
    this.speed = {
      x: 0,
      y: this.totalSpeed,
    };
    this.angle = Math.atan(this.deltaY / this.deltaX);
    if (this.deltaX == 0 && this.deltaY < 0) {
      this.angle = -3*Math.PI/2;
    } else {
      this.angle = Math.atan(this.deltaY / this.deltaX);
    }
    if (this.deltaY >= 0 && this.deltaX >= 0) {
      this.speed = {
        x: -this.totalSpeed * Math.cos(this.angle),
        y: -this.totalSpeed * Math.sin(this.angle),
      };
    } else if (this.deltaY >= 0 && this.deltaX <= 0) {
      this.speed = {
        x: this.totalSpeed * Math.cos(this.angle),
        y: this.totalSpeed * Math.sin(this.angle),
      };
    } else if (this.deltaY <= 0 && this.deltaX <= 0) {
      this.speed = {
        x: this.totalSpeed * Math.cos(this.angle),
        y: this.totalSpeed * Math.sin(this.angle),
      };
    } else if (this.deltaY <= 0 && this.deltaX >= 0) {
      this.speed = {
        x: -this.totalSpeed * Math.cos(this.angle),
        y: -this.totalSpeed * Math.sin(this.angle),
      };
    }
    this.addingMissleNumber = addingMissleNumber;
    this.position = {
      x:
        this.game.spaceShip.position.x +
        this.game.spaceShip.width / 2 -
        this.width / 2,
      y: this.game.spaceShip.position.y + this.game.spaceShip.height / 2 -this.height / 2,
    };

    this.numMissiles = numMissiles;
    if (this.numMissiles === 1) {
      this.position = {
        x: this.position.x,
        y: this.position.y,
      };
    } else if (numMissiles >= 1 && numMissiles <= 5) {
      this.position = {
        x: this.position.x + this.addingMissleNumber,
        y: this.position.y,
      };
    } else {
      this.position = {
        x: this.position.x + this.addingMissleNumber,
        y: this.position.y + this.numY,
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
  }
  draw(context) {
    context.fillStyle = this.color;
    context.beginPath();
    context.arc(
      this.position.x + this.width / 2,
      this.position.y + this.height / 2,
      this.width / 2,
      0,
      2 * Math.PI
    );
    context.fill();
    //context.fillRect(this.position.x, this.position.y, this.width, this.height);
    //context.fillText("X: " + xPos + ", Y: " + yPos, 200, 200);
  }
}
