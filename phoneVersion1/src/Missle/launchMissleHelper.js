class LaunchMissleHelper extends LauchMissle {
  constructor(
    game,
    GAMESTATE,
    helper,
    speedMissle,
    sizeMissle,
    livesMissle,
    misslesColor
  ) {
    super(game, GAMESTATE);
    this.game = game;
    this.GAMESTATE = GAMESTATE;
    this.missles = [];
    this.helper = helper;
    this.speedMissle = speedMissle;
    this.sizeMissle = sizeMissle;
    this.livesMissle = livesMissle;
    this.misslesColor = misslesColor;
  }
  creatMissle() {
    if (this.game.gamestate === this.GAMESTATE.RUNNING) {
      this.missles.push(
        new MissleEnemy(
          this.game,
          {
            x:
              this.helper.position.x +
              this.helper.width / 2 -
              this.helper.sizeMissle / 2,
            y: this.helper.position.y
          },
          this.speedMissle,
          this.sizeMissle,
          this.livesMissle,
          this.misslesColor
        )
      );
    }
  }
  update(deltaTime) {
    super.update(deltaTime);
  }
  draw(context) {
    super.draw(context);
  }
}
