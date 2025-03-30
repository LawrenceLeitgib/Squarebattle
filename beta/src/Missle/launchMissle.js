/*let audioMissles = new Audio("assets/audio/misslesAudio.m4a");
audioMissles.volume=1
*/
class LauchMissle {
  constructor(game, GAMESTATE) {
    this.game = game;
    this.missles = [];
    this.GAMESTATE = GAMESTATE;
    this.time = 1000 / 6;
    this.count = 0;
    this.count2 = 0;
    this.counting2 = false;
    this.time2 = 1000 / 100;
    this.creatMissile = false;
    this.MissileNumber = 1;
    this.addingMissileNumber = 6;
    this.addingMissileNumber2 = 14;
    this.MissileNumberVertical = 1;
    this.addingMissileNumberVertical = 10;
    this.creatMissile = true;
    this.BWN=1;
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

    if (this.game.gamestate === this.GAMESTATE.RUNNING) {
      //soundTest.play();
      if (this.creatMissile && this.count >= this.time) {
        if(this.game.soundOn){
        var audio = new Audio("assets/audio/misslesAudio.mp3");
        audio.volume=.5;
        audio.play();
      }

        /*
        if(audioMissles.ended){
          audioMissles.currentTime=0
        }
        audioMissles.play();
*/
        if (this.MissileNumber === 1 ) {
          this.missles.push(new Missle(this.game, this.game.misslesLives));
        } else if (this.MissileNumber === 2 ) {
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
          );
        } else if (this.MissileNumber === 3 ) {
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
          );
        } else if (this.MissileNumber === 4 ) {
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
        } else if (this.MissileNumber >= 5 ) {
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
            new Missle(this.game, this.game.misslesLives, 0, this.MissileNumber)
          );
        }
        this.counting2 = true;
        this.count = 0;
      }
      if (this.count2 >= this.time2) {
        if (this.MissileNumber === 6) {
          this.missles.push(new Missle(this.game, this.game.misslesLives));
        } else if (this.MissileNumber === 7) {
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
          );
        } else if (this.MissileNumber === 8) {
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
          );
        } else if (this.MissileNumber === 9) {
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
        } else if (this.MissileNumber === 10) {
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
            new Missle(this.game, this.game.misslesLives, 0, this.MissileNumber)
          );
        }
        this.counting2 = false;
        this.count2 = 0;
      }
    }
    if (this.counting2) this.count2 += deltaTime;
    this.count += deltaTime;
  }
  draw(context) {
    this.missles.forEach((object) => object.draw(context));

    context.font = "20px Arial";
  }
}
