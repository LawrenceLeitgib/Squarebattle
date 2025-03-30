const GAMESTATE = {
  PAUSED: 0,
  RUNNING: 1,
  MENU: 2,
  GAMEMARKED: 3
};

class Game {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.gamestate = GAMESTATE.MENU;
    this.paddle = new Paddle(this, "left",150,20);
    this.paddle2 = new Paddle(this, "right",150,20);
    this.ball = new Ball(this, GAMESTATE);
    this.leftCount = 0;
    this.rightCount = 0;
    this.gameObject = [];
    new InputHandler(this.paddle, this, "left");
    new InputHandler(this.paddle2, this, "right");
  }
  start() {
    if (
      this.gamestate !== GAMESTATE.MENU &&
      this.gamestate !== GAMESTATE.GAMEMARKED
    )
      return;
    //this.ball.resetLeft();
    this.gameObject = [this.ball, this.paddle, this.paddle2];
    this.gamestate = GAMESTATE.RUNNING;
  }

  update(deltaTime) {
    if (
      this.gamestate === GAMESTATE.PAUSED ||
      this.gamestate === GAMESTATE.MENU ||
      this.gamestate === GAMESTATE.GAMEMARKED
    ) {
      return;
    }
    this.gameObject.forEach((object) => object.update(deltaTime));
  }

  draw(context) {
    if (this.gamestate === GAMESTATE.PAUSED) {
      context.rect(0, 0, this.gameWidth, this.gameHeight);
      context.fillStyle = "rgba(0, 0, 0, 0.5)";
      context.fill();

      context.font = "40px Arial";
      context.fillStyle = "black";
      context.textAlign = "center";
      context.fillText(
        "The Game is Paused",
        this.gameWidth / 2,
        this.gameHeight / 2
      );
    }

    if (this.gamestate === GAMESTATE.MENU) {
      context.rect(0, 0, this.gameWidth, this.gameHeight);
      context.fillStyle = "rgba(0, 100, 255, .8)";
      context.fill();

      context.font = "40px Arial";
      context.fillStyle = "black";
      context.textAlign = "center";
      context.fillText(
        "Press the spacebar to the start the game",
        this.gameWidth / 2,
        this.gameHeight / 2
      );
    }

    if (this.gamestate === GAMESTATE.GAMEMARKED) {
      context.rect(0, 0, this.gameWidth, this.gameHeight);
      context.fillStyle = "rgba(100, 100, 100, .6)";
      context.fill();

      context.font = "100px Arial";
      context.fillStyle = "black";
      context.textAlign = "center";
      context.fillText(
        this.leftCount + " - " + this.rightCount,
        this.gameWidth / 2,
        this.gameHeight / 2
      );
      context.font = "40px Arial";
      context.fillText(
        "click on  the space bar to continue the game",
        this.gameWidth / 2,
        this.gameHeight / 2 + 70
      );
    }

    this.gameObject.forEach((object) => object.draw(context));
  }

  togglePause() {
    if (this.gamestate === GAMESTATE.PAUSED) {
      this.gamestate = GAMESTATE.RUNNING;
    } else if (this.gamestate === GAMESTATE.RUNNING) {
      this.gamestate = GAMESTATE.PAUSED;
    }
  }
}
