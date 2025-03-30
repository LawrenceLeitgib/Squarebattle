class LauchMissleEnemyLevel2 extends LauchMissleEnemy {
  constructor(
    game,
    GAMESTATE,
    enemy,
    speedMissle,
    sizeMissle,
    livesMissle,
    misslesColor
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
  }
  creatMissle() {
    if (this.game.gamestate === this.GAMESTATE.RUNNING) {
      this.missles.push(
        new MissleEnemyLevel2(
          this.game,
          {
            x: this.enemy.position.x + this.enemy.width / 2 -this.sizeMissle/2,
            y: this.enemy.position.y + this.enemy.height/2 -this.sizeMissle/2
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
