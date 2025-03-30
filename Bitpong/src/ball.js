class Ball {
  constructor(game, GAMESTATE) {
    this.image = document.getElementById("image_ball");
    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;
    this.game = game;
    this.size = 100;
    this.GAMESTATE = GAMESTATE;
    this.speed = {
      x: 6,
      y: 0
    };
    this.position = { x: 70, y: this.gameHeight / 2 };
  }

  resetLeft() {
    this.speed = {
      x: 6,
      y: 0
    };
    this.size=100;

    this.position = {
      x: this.game.paddle.position.x + 40+this.size,
      y: this.gameHeight / 2
    };
  }

  resetRight() {
    this.speed = {
      x: -6,
      y: 0
    };
    this.size=100;
    this.position = {
      x: this.game.paddle2.position.x - 40-this.size,
      y: this.gameHeight / 2
    };
  }

  draw(context) {
    context.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.size,
      this.size
    );
  }
  update(deltaTime) {
    //console.log(this.game.paddle.position.y);
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;

    //check for left and right if hit wall
    if (this.position.x > this.gameWidth - this.size + 16) {
      this.resetRight();
      this.game.leftCount++;
      this.game.gamestate = this.GAMESTATE.GAMEMARKED;
    }

    if (this.position.x < -16) {
      this.resetLeft();
      this.game.rightCount++;
      this.game.gamestate = this.GAMESTATE.GAMEMARKED;
    }

    //check for top and bottom if hit wall
    if (this.position.y > this.gameHeight - this.size || this.position.y < 0) {
      this.speed.y = -this.speed.y;
    }

    if (dectionCollision(this, this.game.paddle)) {
      this.speed.x = -this.speed.x;
      this.position.x = this.game.paddle.position.x + this.game.paddle.width;
      this.speed.y = this.speed.y + this.game.paddle.speed / 3;
      this.speed.x += 0.75;
      this.size/=1.15;
    }
    if (dectionCollision(this, this.game.paddle2)) {
      this.speed.x = -this.speed.x;
      this.position.x = this.game.paddle2.position.x - this.size;
      this.speed.y = this.speed.y + this.game.paddle2.speed / 3;
      this.speed.x -= 0.75;
      this.size/=1.15;
    }
  }
}
