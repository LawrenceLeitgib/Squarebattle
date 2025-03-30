class LauchMissleEnemyLevel3 extends LauchMissleEnemyLevel2 {
  constructor(
    game,
    GAMESTATE,
    enemy,
    speedMissle,
    sizeMissle,
    livesMissle,
    misslesColor,
    timeBeforCOD
  ) {
    super(game, GAMESTATE);
    this.game = game;
    this.GAMESTATE = GAMESTATE;
    this.missles = [];
    this.enemy = enemy;
    this.speedMissle = speedMissle;
    this.sizeMissle = sizeMissle;
    this.livesMissle = livesMissle;
    this.misslesColor = misslesColor;
    this.timeBeforCOD=timeBeforCOD
  }
  creatMissle() {
    if (this.game.gamestate === this.GAMESTATE.RUNNING) {
      this.missles.push(
        new MissleEnemyLevel3(
          this.game,
          {
            x: this.enemy.position.x + this.enemy.width / 2 -this.sizeMissle/2,
            y: this.enemy.position.y + this.enemy.height/2 -this.sizeMissle/2
          },
          this.speedMissle,
          this.sizeMissle,
          this.livesMissle,
          this.misslesColor,
          this.timeBeforCOD
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
