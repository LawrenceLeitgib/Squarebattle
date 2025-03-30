//declaring xpos and ypos
let xPos = 0;
let yPos = 0;

//re getting canvas from gameScreen becuase it's more easy this way
let canvas = document.getElementById("gameScreen");
/*
//geting the postion of the mouse relative to the canvvas
canvas.addEventListener("mousemove", function (e) {
  var cRect = canvas.getBoundingClientRect(); // Gets CSS pos, and width/height
  xPos = Math.round(e.clientX - cRect.left); // Subtract the 'left' of the canvas
  yPos = Math.round(e.clientY - cRect.top); // from the X/Y positions to make
});
*/
document.addEventListener("mousemove", onMouseUpdate, false);
function onMouseUpdate(e) {
  var cRect = canvas.getBoundingClientRect();
  xPos = Math.round(e.clientX - cRect.left);
  yPos = Math.round(e.clientY - cRect.top);
}

const GAMESTATE = {
  PAUSED: 0,
  RUNNING: 1,
  MENU: 2,
  GAMEOVER: 3,
  LEVELWON: 4,
  GAMEWON: 5,
  LEVELWONSPECIAL: 6,
  CHECKPOINT: 7,
  OPTION: 8,
  SHOP: 9,
};

class Game {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.mousePosition = {
      x: xPos,
      y: yPos,
    };
    this.gamestate = GAMESTATE.MENU;
    this.spaceShip = new SpaceShip(this);
    this.misslesLives = 1;
    this.missles = new LauchMissle(this, GAMESTATE);
    this.basicEnemys = [];
    new InputHandler(this.spaceShip, this, this.missles);
    this.helpers = [];

    new InputHandlerMissle(this.missles, this);
    this.gameObject = [];
    this.levels = [
      level1,
      level2,
      level3,
      level4,
      level5,
      level6,
      level7,
      level8,
      level9,
      level10,
      level11,
      level12,
      level13,
      level14,
      level15,
      level16,
      level17,
      level18,
      level19,
      level20,
      level21,
      level22,
      level23,
      level24,
      level25,
      level26,
      level27,
      level28,
      level29,
      level30,
    ];
    this.currentLevel = 0;
    this.maxLives = 20;
    this.lives = this.maxLives;
    this.clickDown = false;
    this.checkPointLevel = 0;
    this.haveShield = false;
    this.shieldTime = 0;
    this.save = {
      maxLives: 20,
      MissileNumber: 1,
      misslesLives: 1,
      regenerationPourecent: 0,
      money: 0,
      HelperNumber: 0,
    };
    this.lastGameState = GAMESTATE.MENU;
    this.money = 0;
    this.addintionalCostNumBullet = 400;
    this.addintionalCostRegen = 100;
    this.buyCount = 0;
    this.buyTime = 300;
    this.addingHelperNumber = 5;
    this.goldCount = 0;
    this.goldRotationSpeed = 1.8;
    this.goldSize = 24;
    this.goldPosY = 0;
    this.goldPosX = 150 - this.goldSize;
    this.gold1 = document.getElementById("gold1");
    this.gold2 = document.getElementById("gold2");
    this.gold3 = document.getElementById("gold3");
    this.gold4 = document.getElementById("gold4");
    this.goldCoins = [];
    let rectBack = {
      x: 10,
      y: 60,
      width: 70,
      height: 20,
    };
  }
  ClickDown() {
    this.clickDown = true;
  }
  clickUp() {
    this.clickDown = false;
  }
  start() {
    if (this.gamestate === GAMESTATE.RUNNING) return;
    if (
      this.gamestate === GAMESTATE.MENU ||
      this.gamestate === GAMESTATE.GAMEOVER
    ) {
      this.gameObject = [this.missles, this.spaceShip];
      this.missles.missles = [];
      this.gamestate = GAMESTATE.RUNNING;
      this.spaceShip.position = {
        x: this.gameWidth / 2 - this.spaceShip.width / 2,
        y: this.gameHeight - this.spaceShip.height,
      };
      this.currentLevel = 0;
      this.spaceShip.regenerationPourecent = 0;
      this.misslesLives = 1;
      this.maxLives = 20;
      this.missles.MissileNumber = 1;
      this.basicEnemys = buildLevl(this, this.levels[this.currentLevel]);
      this.lives = this.maxLives;
      this.money = 1000000000;
      this.helpers = [];
    }
  }
  start2() {
    if (this.gamestate === GAMESTATE.RUNNING) return;
    if (this.gamestate === GAMESTATE.LEVELWON) {
      if (this.currentLevel % 5 === 0) {
        this.checkPointLevel = this.currentLevel;
        this.save.maxLives = this.maxLives;
        this.save.MissileNumber = this.missles.MissileNumber;
        this.save.misslesLives = this.misslesLives;
        this.save.regenerationPourecent = this.spaceShip.regenerationPourecent;
        this.save.money = this.money;
        this.save.helpers = this.helpers;
        this.lives = this.maxLives;
        this.missles.missles = [];
      }
      this.gamestate = GAMESTATE.RUNNING;
      this.spaceShip.position = {
        x: this.gameWidth / 2 - this.spaceShip.width / 2,
        y: this.gameHeight - this.spaceShip.height,
      };
      this.basicEnemys = buildLevl(this, this.levels[this.currentLevel]);
    }
  }
  start3() {
    if (this.gamestate === GAMESTATE.RUNNING) return;
    if (this.gamestate === GAMESTATE.GAMEWON) {
      this.gameObject = [this.missles, this.spaceShip];
      this.gamestate = GAMESTATE.RUNNING;
      this.spaceShip.position = {
        x: this.gameWidth / 2 - this.spaceShip.width / 2,
        y: this.gameHeight - this.spaceShip.height,
      };
      this.spaceShip.regenerationPourecent = 0;
      this.currentLevel = 0;
      this.missles.missles = [];
      this.basicEnemys = buildLevl(this, this.levels[this.currentLevel]);
      this.misslesLives = 1;
      this.maxLives = 20;
      this.missles.MissileNumber = 1;
      this.lives = this.maxLives;
      this.money = 1000000000;
      this.helpers = [];
    }
  }
  startCheckpoint() {
    if (this.gamestate === GAMESTATE.RUNNING) return;
    if (this.gamestate === GAMESTATE.CHECKPOINT) {
      this.spaceShip.regenerationPourecent = this.save.regenerationPourecent;
      this.misslesLives = this.save.misslesLives;
      this.maxLives = this.save.maxLives;
      this.helpers = this.save.helpers;
      this.missles.MissileNumber = this.save.MissileNumber;
      this.money = this.save.money;
      this.currentLevel = this.checkPointLevel;
      this.lives = this.maxLives;
      this.missles.missles = [];

      this.basicEnemys = buildLevl(this, this.levels[this.currentLevel]);
      this.gamestate = GAMESTATE.RUNNING;
    }
  }

  update(deltaTime) {
    this.mousePosition = {
      x: xPos,
      y: yPos,
    };
    if (this.lives <= 0) {
      this.gamestate = GAMESTATE.GAMEOVER;
      this.haveShield = false;
      this.lives = 0;
      this.goldCoins.length=[]
      this.spaceShip.position = {
        x: this.gameWidth / 2 - this.spaceShip.width / 2,
        y: this.gameHeight - this.spaceShip.height,
      };
      this.missles.missles = [];
      if (this.currentLevel >= 5) {
        this.gamestate = GAMESTATE.CHECKPOINT;
      }
    }
    this.goldCount += deltaTime;
    if (
      this.gamestate === GAMESTATE.GAMEOVER ||
      this.gamestate === GAMESTATE.GAMEWON
    ) {
      return;
    }
    if (this.gamestate === GAMESTATE.CHECKPOINT) {
      let rect = {
        x: this.gameWidth / 2 - 100,
        y: this.gameHeight / 2 - 30,
        width: 200,
        height: 50,
      };

      let rect2 = {
        x: this.gameWidth / 2 - 100,
        y: this.gameHeight / 2 + 30,
        width: 200,
        height: 50,
      };
      let rectshop = {
        x: this.gameWidth / 2 - 100,
        y: this.gameHeight / 2 + 90,
        width: 200,
        height: 50,
      };
      this.spaceShip.regenerationPourecent = this.save.regenerationPourecent;
      this.misslesLives = this.save.misslesLives;
      this.maxLives = this.save.maxLives;
      this.missles.MissileNumber = this.save.MissileNumber;
      this.money = this.save.money;
      this.currentLevel = this.checkPointLevel;
      this.lives = this.maxLives;
      this.basicEnemys = buildLevl(this, this.levels[this.currentLevel]);
      if (isInside(this.mousePosition, rect) && this.clickDown) {
        this.gamestate = GAMESTATE.RUNNING;
      } else if (isInside(this.mousePosition, rect2) && this.clickDown) {
        this.lastGameState = GAMESTATE.CHECKPOINT;
        this.gamestate = GAMESTATE.OPTION;
      } else if (isInside(this.mousePosition, rectshop) && this.clickDown) {
        this.lastGameState = GAMESTATE.CHECKPOINT;
        this.gamestate = GAMESTATE.SHOP;
      }

      return;
    }
    if (this.gamestate === GAMESTATE.MENU) {
      let rect = {
        x: this.gameWidth / 2 - 100,
        y: this.gameHeight / 2 - 30,
        width: 200,
        height: 50,
      };
      var rect2 = {
        x: this.gameWidth / 2 - 100,
        y: this.gameHeight / 2 + 30,
        width: 200,
        height: 50,
      };
      if (isInside(this.mousePosition, rect) && this.clickDown) {
        this.start();
      } else if (isInside(this.mousePosition, rect2) && this.clickDown) {
        this.lastGameState = GAMESTATE.MENU;
        this.gamestate = GAMESTATE.OPTION;
      }
      return;
    }
    if (this.gamestate === GAMESTATE.OPTION) {
      if (isInside(this.mousePosition, rectBack) && this.clickDown) {
        this.gamestate = this.lastGameState;
      }
      return;
    }
    if (this.gamestate === GAMESTATE.PAUSED) {
      var rect = {
        x: this.gameWidth / 2 - 100,
        y: this.gameHeight / 2 - 30,
        width: 200,
        height: 50,
      };

      var rect2 = {
        x: this.gameWidth / 2 - 100,
        y: this.gameHeight / 2 + 30,
        width: 200,
        height: 50,
      };
      let rectshop = {
        x: this.gameWidth / 2 - 100,
        y: this.gameHeight / 2 + 90,
        width: 200,
        height: 50,
      };
      if (isInside(this.mousePosition, rect) && this.clickDown) {
        this.togglePause();
      } else if (isInside(this.mousePosition, rect2) && this.clickDown) {
        this.lastGameState = GAMESTATE.PAUSED;
        this.gamestate = GAMESTATE.OPTION;
      } else if (isInside(this.mousePosition, rectshop) && this.clickDown) {
        this.lastGameState = GAMESTATE.PAUSED;
        this.gamestate = GAMESTATE.SHOP;
      }
      return;
    }
    if (this.gamestate === GAMESTATE.LEVELWON) {
      rect = {
        x: this.gameWidth / 2 - 100,
        y: this.gameHeight / 2 - 30,
        width: 200,
        height: 50,
      };

      rect2 = {
        x: this.gameWidth / 2 - 100,
        y: this.gameHeight / 2 + 30,
        width: 200,
        height: 50,
      };
      let rectshop = {
        x: this.gameWidth / 2 - 100,
        y: this.gameHeight / 2 + 90,
        width: 200,
        height: 50,
      };

      if (isInside(this.mousePosition, rect) && this.clickDown) {
        this.lastGameState = GAMESTATE.LEVELWON;
        this.start2();
      } else if (isInside(this.mousePosition, rect2) && this.clickDown) {
        this.lastGameState = GAMESTATE.LEVELWON;
        this.gamestate = GAMESTATE.OPTION;
      } else if (isInside(this.mousePosition, rectshop) && this.clickDown) {
        this.lastGameState = GAMESTATE.LEVELWON;
        this.gamestate = GAMESTATE.SHOP;
      }
      return;
    }
    if (this.gamestate === GAMESTATE.SHOP) {
      let shop1 = {
        x: 50,
        y: 100,
        width: 200,
        height: 40,
      };
      let shop2 = {
        x: 50,
        y: 150,
        width: 200,
        height: 40,
      };
      let shop3 = {
        x: 50,
        y: 200,
        width: 200,
        height: 40,
      };
      let shop4 = {
        x: 50,
        y: 250,
        width: 200,
        height: 40,
      };
      let shop5 = {
        x: 50,
        y: 300,
        width: 200,
        height: 40,
      };
      let buy1 = {
        x: shop1.x + shop1.width + 10,
        y: 100,
        width: 100,
        height: 40,
      };
      let buy2 = {
        x: shop2.x + shop2.width + 10,
        y: 150,
        width: 100,
        height: 40,
      };
      let buy1a = {
        x: buy1.x + buy1.width + 10,
        y: 100,
        width: 100,
        height: 40,
      };
      let buy2a = {
        x: buy2.x + buy2.width + 10,
        y: 150,
        width: 100,
        height: 40,
      };
      let buy3 = {
        x: shop3.x + shop3.width + 10,
        y: 200,
        width: 100,
        height: 40,
      };
      let buy4 = {
        x: shop4.x + shop4.width + 10,
        y: 250,
        width: 100,
        height: 40,
      };
      let buy5 = {
        x: shop5.x + shop5.width + 10,
        y: 300,
        width: 100,
        height: 40,
      };
      this.buyCount += deltaTime;

      if (isInside(this.mousePosition, rectBack) && this.clickDown) {
        this.gamestate = this.lastGameState;
        this.lastGameState = GAMESTATE.SHOP;
      }
      if (this.buyCount >= this.buyTime) {
        if (
          isInside(this.mousePosition, buy1) &&
          this.clickDown &&
          this.money >= 20
        ) {
          this.buyCount = 0;
          this.money -= 20;
          this.maxLives += 1;
          this.lives += 1;
        }
        if (
          isInside(this.mousePosition, buy2) &&
          this.clickDown &&
          this.money >= 40
        ) {
          this.buyCount = 0;
          this.money -= 40;
          this.misslesLives += 0.1;
        }
        if (
          isInside(this.mousePosition, buy1a) &&
          this.clickDown &&
          this.money >= 200
        ) {
          this.buyCount = 0;
          this.money -= 200;
          this.maxLives += 10;
          this.lives += 10;
        }
        if (
          isInside(this.mousePosition, buy2a) &&
          this.clickDown &&
          this.money >= 400
        ) {
          this.buyCount = 0;
          this.money -= 400;
          this.misslesLives += 1;
        }
        if (
          isInside(this.mousePosition, buy3) &&
          this.clickDown &&
          this.money >=
            this.addintionalCostNumBullet * this.missles.MissileNumber &&
          this.missles.MissileNumber < 10
        ) {
          this.buyCount = 0;
          this.money -=
            this.addintionalCostNumBullet * this.missles.MissileNumber;
          this.missles.MissileNumber += 1;
        }
        if (
          isInside(this.mousePosition, buy4) &&
          this.clickDown &&
          this.money >=
            this.addintionalCostRegen *
              (this.spaceShip.regenerationPourecent + 0.1) *
              10
        ) {
          this.buyCount = 0;
          this.money -=
            this.addintionalCostRegen *
            (this.spaceShip.regenerationPourecent + 0.1) *
            10;
          this.spaceShip.regenerationPourecent += 0.1;
        }
        if (
          isInside(this.mousePosition, buy5) &&
          this.clickDown &&
          this.money >= 1000 * Math.pow(5, this.helpers.length + 1)
        ) {
          this.money -= 1000 * Math.pow(5, this.helpers.length + 1);
          console.log(game.helpers.length);
          if (this.helpers.length === 0) {
            this.helpers.push(
              new Helper(
                this,
                { x: 0, y: this.gameHeight - 70 - 40 },
                { x: 3, y: 0 },
                100,
                "rgb(26, 163, 47)",
                300
              )
            );
          } else {
            let addindHelperPosNum = 0;
            let speedHelperNum = 1;
            if (this.helpers[this.helpers.length - 1].speed.x > 0) {
              addindHelperPosNum = -70;
              speedHelperNum = 1;
            } else {
              addindHelperPosNum = 70;
              speedHelperNum = -1;
            }

            let xPosHelper =
              this.helpers[this.helpers.length - 1].position.x +
              addindHelperPosNum;
            this.helpers.push(
              new Helper(
                this,
                { x: xPosHelper, y: this.gameHeight - 70 - 40 },
                { x: 3 * speedHelperNum, y: 0 },
                100,
                "rgb(26, 163, 47)",
                300
              )
            );
          }
          this.buyCount = 0;
        }
      }
      return;
    }
    [
      ...this.gameObject,
      ...this.basicEnemys,
      ...this.helpers,
      ...this.goldCoins,
    ].forEach((object) => object.update(deltaTime));
    this.gameObject = this.gameObject.filter(
      (object) => !object.markedForDeletion
    );
    this.basicEnemys = this.basicEnemys.filter(
      (basicEnemys) => !basicEnemys.markedForDeletion
    );
    this.goldCoins = this.goldCoins.filter(
      (goldCoins) => !goldCoins.markedForDeletion
    );
    if (this.basicEnemys.length === 0 && this.goldCoins.length===0) {
      this.missles.missles = [];
      this.currentLevel++;
      this.haveShield = false;
      if (this.currentLevel + 1 > this.levels.length) {
        this.gamestate = GAMESTATE.GAMEWON;
        this.currentLevel = 0;
      } else {
        this.gamestate = GAMESTATE.LEVELWON;
        let countForHelperPos2 = 0;
        this.helpers.forEach((object) => {
          object.markedForTempDeletion = false;
          object.lives = object.maxLives;
          object.position.x = countForHelperPos2;
          object.speed.x = Math.abs(object.speed.x);
          countForHelperPos2 += 70;
        });
      }
    }
  }
  draw(context) {
    [
      ...this.gameObject,
      ...this.basicEnemys,
      ...this.helpers,
      ...this.goldCoins,
    ].forEach((object) => object.draw(context));
    displayGamestate(context, this.gamestate, GAMESTATE, this);
    context.fillStyle = "rgba(255, 255, 255, .5)";
    context.fillRect(this.gameWidth - 150, 0, 150, 25);
    context.fillRect(this.gameWidth - 150, 30, 150, 25);
    context.fillRect(0, 0, 150, 25);
    context.fillRect(this.gameWidth / 2 - 60, 0, 120, 25);

    context.font = "20px Arial";
    context.fillStyle = "black";
    context.textAlign = "center";
    context.textAlign = "left";
    context.fillText(
      "HP: " + Math.round(this.lives * 100) / 100.0 + "/" + this.maxLives,
      this.gameWidth - 140,
      20
    );
    context.fillText(
      "Damage: " + Math.round(this.misslesLives * 10) / 10,
      this.gameWidth - 140,
      50
    );
    context.fillText("Gold: " + Math.round(this.money), 5, 20);
    if (this.goldCount >= 1200 / this.goldRotationSpeed) this.goldCount = 0;
    showGoldCoin(context, this, this.goldPosX, this.goldPosY);

    context.textAlign = "center";
    context.fillText(
      "Level: " + (this.currentLevel + 1),
      this.gameWidth / 2,
      20
    );
  }

  togglePause() {
    if (this.gamestate === GAMESTATE.PAUSED) {
      this.gamestate = GAMESTATE.RUNNING;
      this.lastGameState = GAMESTATE.PAUSED;
    } else if (this.gamestate === GAMESTATE.RUNNING) {
      this.gamestate = GAMESTATE.PAUSED;
      this.lastGameState = GAMESTATE.RUNNING;
    }
  }
}
