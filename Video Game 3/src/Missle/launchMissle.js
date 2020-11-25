class LauchMissle {
  constructor(game, GAMESTATE) {
    this.game = game;
    this.missles = [];
    this.GAMESTATE = GAMESTATE;
    this.time = 1000 / 6;
    this.count = 0;
    this.creatMissile = false;
    this.MissileNumber = 1;
    this.addingMissileNumber = 10;
    this.addingMissileNumber2 = 14;
    this.MissileNumberVertical = 1;
    this.addingMissileNumberVertical = 10;
  }

  creatMissle() {
    this.creatMissile = true;
  }
  StopCreatMissle() {
    this.creatMissile = false;
    this.count = this.time;
  }
  update(deltaTime) {
    this.missles.forEach((object) => object.update(deltaTime));
    this.missles = this.missles.filter((object) => !object.markedForDeletion);
    if (
      this.game.gamestate === this.GAMESTATE.LEVELWON ||
      this.game.gamestate === this.GAMESTATE.GAMEWON ||
      this.game.gamestate === this.GAMESTATE.GAMEOVER
    )
      this.missles = [];
    if (this.creatMissile && this.count >= this.time) {
      if (this.game.gamestate === this.GAMESTATE.RUNNING) {
        /*
         *
         *
         * to do:
         * make a loop to add vertical missile
         *
         */
        if (this.MissileNumber === 1) {
          this.missles.push(new Missle(this.game, this.game.misslesLives));}
        else if (this.MissileNumber === 2) {
          this.missles.push(
            new Missle(
              this.game,
              this.game.misslesLives,
              -this.addingMissileNumber,
              this.MissileNumber
            ),
            new Missle(
              this.game,
              this.game.misslesLives,
              this.addingMissileNumber,
              this.MissileNumber
            )
          );}
        else if (this.MissileNumber === 3) {
          this.missles.push(
            new Missle(
              this.game,
              this.game.misslesLives,
              -this.addingMissileNumber2,
              this.MissileNumber
            ),
            new Missle(
              this.game,
              this.game.misslesLives,
              this.addingMissileNumber2,
              this.MissileNumber
            ),
            new Missle(this.game, this.game.misslesLives, 0, this.MissileNumber)
          );}
        else if (this.MissileNumber === 4) {
          this.missles.push(
            new Missle(
              this.game,
              this.game.misslesLives,
              -this.addingMissileNumber,
              this.MissileNumber
            ),
            new Missle(
              this.game,
              this.game.misslesLives,
              this.addingMissileNumber,
              this.MissileNumber
            ),
            new Missle(
              this.game,
              this.game.misslesLives,
              -this.addingMissileNumber * 2,
              this.MissileNumber
            ),
            new Missle(
              this.game,
              this.game.misslesLives,
              this.addingMissileNumber * 2,
              this.MissileNumber
            )
          );
        }
        else if (this.MissileNumber === 5) {
          this.missles.push(
            new Missle(
              this.game,
              this.game.misslesLives,
              -this.addingMissileNumber,
              this.MissileNumber
            ),
            new Missle(
              this.game,
              this.game.misslesLives,
              this.addingMissileNumber,
              this.MissileNumber
            ),
            new Missle(
              this.game,
              this.game.misslesLives,
              -this.addingMissileNumber * 2,
              this.MissileNumber
            ),
            new Missle(
              this.game,
              this.game.misslesLives,
              this.addingMissileNumber * 2,
              this.MissileNumber
            ),
            new Missle(
              this.game,
              this.game.misslesLives,
              0,
              this.MissileNumber
            )
          );
        }
        else if (this.MissileNumber === 6) {
          this.missles.push(
            new Missle(
              this.game,
              this.game.misslesLives,
              -this.addingMissileNumber,
              this.MissileNumber
            ),
            new Missle(
              this.game,
              this.game.misslesLives,
              this.addingMissileNumber,
              this.MissileNumber
            ),
            new Missle(
              this.game,
              this.game.misslesLives,
              -this.addingMissileNumber * 2,
              this.MissileNumber
            ),
            new Missle(
              this.game,
              this.game.misslesLives,
              this.addingMissileNumber * 2,
              this.MissileNumber
            ),
            new Missle(
              this.game,
              this.game.misslesLives,
              0,
              this.MissileNumber
            ),
            new Missle(
              this.game,
              this.game.misslesLives,
              0,
              this.MissileNumber,
              this.addingMissileNumberVertical
            )
          );
        }
        else if (this.MissileNumber === 7) {
          this.missles.push(
            new Missle(
              this.game,
              this.game.misslesLives,
              -this.addingMissileNumber,
              this.MissileNumber
            ),
            new Missle(
              this.game,
              this.game.misslesLives,
              this.addingMissileNumber,
              this.MissileNumber
            ),
            new Missle(
              this.game,
              this.game.misslesLives,
              -this.addingMissileNumber * 2,
              this.MissileNumber
            ),
            new Missle(
              this.game,
              this.game.misslesLives,
              this.addingMissileNumber * 2,
              this.MissileNumber
            ),
            new Missle(
              this.game,
              this.game.misslesLives,
              0,
              this.MissileNumber
            ),
            new Missle(
              this.game,
              this.game.misslesLives,
              -this.addingMissileNumber,
              this.MissileNumber,
              this.addingMissileNumberVertical
            ),
            new Missle(
              this.game,
              this.game.misslesLives,
              this.addingMissileNumber,
              this.MissileNumber,
              this.addingMissileNumberVertical
            )
          );
        }
        else if (this.MissileNumber === 8) {
          this.missles.push(
            new Missle(
              this.game,
              this.game.misslesLives,
              -this.addingMissileNumber,
              this.MissileNumber
            ),
            new Missle(
              this.game,
              this.game.misslesLives,
              this.addingMissileNumber,
              this.MissileNumber
            ),
            new Missle(
              this.game,
              this.game.misslesLives,
              -this.addingMissileNumber * 2,
              this.MissileNumber
            ),
            new Missle(
              this.game,
              this.game.misslesLives,
              this.addingMissileNumber * 2,
              this.MissileNumber
            ),
            new Missle(
              this.game,
              this.game.misslesLives,
              0,
              this.MissileNumber
            ),
            new Missle(
              this.game,
              this.game.misslesLives,
              -this.addingMissileNumber,
              this.MissileNumber,
              this.addingMissileNumberVertical
            ),
            new Missle(
              this.game,
              this.game.misslesLives,
              this.addingMissileNumber,
              this.MissileNumber,
              this.addingMissileNumberVertical
            ),
            new Missle(
              this.game,
              this.game.misslesLives,
              0,
              this.MissileNumber,
              this.addingMissileNumberVertical
            )
          );
        }
        else if (this.MissileNumber === 9) {
          this.missles.push(
            new Missle(
              this.game,
              this.game.misslesLives,
              -this.addingMissileNumber,
              this.MissileNumber
            ),
            new Missle(
              this.game,
              this.game.misslesLives,
              this.addingMissileNumber,
              this.MissileNumber
            ),
            new Missle(
              this.game,
              this.game.misslesLives,
              -this.addingMissileNumber * 2,
              this.MissileNumber
            ),
            new Missle(
              this.game,
              this.game.misslesLives,
              this.addingMissileNumber * 2,
              this.MissileNumber
            ),
            new Missle(
              this.game,
              this.game.misslesLives,
              0,
              this.MissileNumber
            ),
            new Missle(
              this.game,
              this.game.misslesLives,
              -this.addingMissileNumber,
              this.MissileNumber,
              this.addingMissileNumberVertical
            ),
            new Missle(
              this.game,
              this.game.misslesLives,
              this.addingMissileNumber,
              this.MissileNumber,
              this.addingMissileNumberVertical
            ),
            new Missle(
              this.game,
              this.game.misslesLives,
              -this.addingMissileNumber*2,
              this.MissileNumber,
              this.addingMissileNumberVertical
            ),
            new Missle(
              this.game,
              this.game.misslesLives,
              this.addingMissileNumber*2,
              this.MissileNumber,
              this.addingMissileNumberVertical
            )
          );
        }
        else if (this.MissileNumber === 10) {
          this.missles.push(
            new Missle(
              this.game,
              this.game.misslesLives,
              -this.addingMissileNumber,
              this.MissileNumber
            ),
            new Missle(
              this.game,
              this.game.misslesLives,
              this.addingMissileNumber,
              this.MissileNumber
            ),
            new Missle(
              this.game,
              this.game.misslesLives,
              -this.addingMissileNumber * 2,
              this.MissileNumber
            ),
            new Missle(
              this.game,
              this.game.misslesLives,
              this.addingMissileNumber * 2,
              this.MissileNumber
            ),
            new Missle(
              this.game,
              this.game.misslesLives,
              0,
              this.MissileNumber
            ),
            new Missle(
              this.game,
              this.game.misslesLives,
              -this.addingMissileNumber,
              this.MissileNumber,
              this.addingMissileNumberVertical
            ),
            new Missle(
              this.game,
              this.game.misslesLives,
              this.addingMissileNumber,
              this.MissileNumber,
              this.addingMissileNumberVertical
            ),
            new Missle(
              this.game,
              this.game.misslesLives,
              -this.addingMissileNumber*2,
              this.MissileNumber,
              this.addingMissileNumberVertical
            ),
            new Missle(
              this.game,
              this.game.misslesLives,
              this.addingMissileNumber*2,
              this.MissileNumber,
              this.addingMissileNumberVertical
            ),
            new Missle(
              this.game,
              this.game.misslesLives,
              0,
              this.MissileNumber,
              this.addingMissileNumberVertical
            )
          );
        }


        this.count = 0;

      }
    }
    this.count += deltaTime;
  }
  draw(context) {
    this.missles.forEach((object) => object.draw(context));

    context.font = "20px Arial";
  }
}
