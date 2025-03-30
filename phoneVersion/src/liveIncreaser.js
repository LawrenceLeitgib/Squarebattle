class LiveIncreaser {
  constructor(game, postion, liveAdded, speedY) {
    this.game = game;
    this.liveAdded = liveAdded;
    this.width = 50;
    this.height = 50;
    this.markedForDeletion = false;
    this.position = {
      x: postion.x,
      y: postion.y,
    };
    this.speed = {
      x: 0,
      y: speedY,
    };
    this.markedForDeletion = false;
    this.color = "rgb(0, 255, 0)";
    this.firstRect = {
      x: this.position.x + (3 * this.width) / 8,
      y: this.position.y + this.height / 8,
      width: this.width / 4,
      height: (3 * this.height) / 4,
    };
    this.secondRect = {
      x:   this.position.x + this.width / 8,
      y: this.position.y + (3 * this.height) / 8,
      width: (3 * this.width) / 4,
      height:   this.height / 4,
    };
    this.badGuy=false

  }
  update() {
    this.firstRect = {
      x: this.position.x + (3 * this.width) / 8,
      y: this.position.y + this.height / 8,
      width: this.width / 4,
      height: (3 * this.height) / 4,
    };
    this.secondRect = {
      x:   this.position.x + this.width / 8,
      y: this.position.y + (3 * this.height) / 8,
      width: (3 * this.width) / 4,
      height:   this.height / 4,
    };
    this.position.y += this.speed.y;
    this.position.x += this.speed.x;
    if (this.position.y + this.height > this.game.gameHeight) {
      this.markedForDeletion = true;
    }
    if (detectionCollision(this, this.game.spaceShip)) {
      this.game.lives += this.liveAdded;
      this.markedForDeletion = true;
    }

    if (this.game.lives >= this.game.maxLives) {
      this.game.lives = this.game.maxLives;
    }
  }
  draw(context) {

    context.fillStyle = this.color;
    context.fillRect(this.position.x, this.position.y, this.width, this.height);
    context.fillStyle = "rgb(255, 255, 255)";
    context.fillRect(
      this.firstRect.x,
      this.firstRect.y,
      this.firstRect.width,
      this.firstRect.height
    );

    context.fillRect(
      this.secondRect.x,
      this.secondRect.y,
      this.secondRect.width,
      this.secondRect.height
    );
    context.fillStyle = "black";
    context.textAlign = "center";
    context.font = "11px Arial";
    context.fillText(
      "+"+this.liveAdded +" HP",
      this.secondRect.x+this.secondRect.width/2,
      this.secondRect.y+this.secondRect.height/2+4
    );
  }
}
