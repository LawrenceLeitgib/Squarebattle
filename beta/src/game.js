//declaring xpos and ypos
let xPos = 0;
let yPos = 0;

let backgroundMusic = new Audio("assets/audio/backgroundMusic.mp3");
backgroundMusic.volume=.1

let whenYouDie = new Audio("assets/audio/WhenYouDie.mp3")
//re getting canvas from gameScreen becuase it's more easy this way
let canvas = document.getElementById("gameScreen");
let inputBox = document.getElementById("inputBox");

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
  SAUVGARD: 10,
};

class Game {
  constructor(gameWidth, gameHeight, ratio) {
    this.ratio = ratio;
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.mousePosition = {
      x: xPos / this.ratio,
      y: yPos / this.ratio,
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
      level31,
      level32,
      level33,
      level34,
      level35,
      level36,
      level37,
      level38,
      level39,
      level40,
      level41,
      level42,
      level43,
      level44,
      level45,
      level46,
      level47,
      level48,
      level49,
      level50,
    ];
    this.currentLevel = 0;
    this.maxLives = 20;
    this.lives = this.maxLives;
    this.clickDown = false;
    this.haveShield = false;
    this.shieldTime = 0;
    this.save = {
      checkPointLevel: 0,
      money: 0,
      maxLives: 20,
      misslesLives: 1,
      MissileNumber: 1,
      regenerationPourecent: 0,
      helpers: [],
      BWN: 1,
    };
    this.lastGameState = GAMESTATE.MENU;
    this.money = 0;
    this.addintionalCostNumBullet = 400;
    this.addintionalCostRegen = 100;
    this.buyCount = 0;
    this.buyTime = 150;
    this.pauseTime = 300;
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
    this.countForSaugarde = 0;
    this.firstTimeDying=true;
    this.soundOn=true;
  }
  ClickDown() {
    this.clickDown = true;
  }
  clickUp() {
    this.clickDown = false;
  }
  start() {
    if (
      this.gamestate === GAMESTATE.MENU ||
      this.gamestate === GAMESTATE.GAMEOVER
    ) {

      this.gameObject = [this.missles, this.spaceShip];
      if(this.soundOn)backgroundMusic.play();
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
      this.money = 0;
      this.helpers = [];
      this.missles.BWN=1;
      this.firstTimeDying=true;
    }
  }
  start2() {
    if (
      this.gamestate === GAMESTATE.LEVELWON ||
      this.gamestate === GAMESTATE.CHECKPOINT
    ) {
      if (this.currentLevel % 5 === 0) {
        this.lives = this.maxLives;
        this.missles.missles = [];
      }
      this.gamestate = GAMESTATE.RUNNING;
      this.spaceShip.position = {
        x: this.gameWidth / 2 - this.spaceShip.width / 2,
        y: this.gameHeight - this.spaceShip.height,
      };
      this.basicEnemys = buildLevl(this, this.levels[this.currentLevel]);
      this.firstTimeDying=true;
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
      this.money = 0;
      this.missles.BWN=1;
      this.firstTimeDying=true;
      this.helpers = [];
    }
  }
  startCheckpoint() {
    if (this.gamestate === GAMESTATE.RUNNING) return;
    if (this.gamestate === GAMESTATE.SAUVGARD) {
      this.gameObject = [this.missles, this.spaceShip];
      this.spaceShip.position = {
        x: this.gameWidth / 2 - this.spaceShip.width / 2,
        y: this.gameHeight - this.spaceShip.height,
      };
      this.spaceShip.regenerationPourecent = this.save.regenerationPourecent;
      this.misslesLives = this.save.misslesLives;
      this.maxLives = this.save.maxLives;
      this.missles.MissileNumber = this.save.MissileNumber;
      this.money = this.save.money;
      this.currentLevel = this.save.checkPointLevel;
      this.lives = this.maxLives;
      this.helpers = [];
      this.save.helpers.forEach((item, i) => {
        this.helpers.push(item);
      });
      this.missles.BWN = this.save.BWN;
      this.missles.missles = [];
      this.firstTimeDying=true;

      this.basicEnemys = buildLevl(this, this.levels[this.currentLevel]);
      this.gamestate = GAMESTATE.RUNNING;
    }
  }

  SetSaveData(code) {
    let char = "";
    let number = "";
    let numberInt = 0;
    let numberDouble = 0;
    var secondTestCount = 0;

    for (var i = 0; i < code.length; i++) {
      char = code.charAt(i);
      if (code.substring(i, i + 3) == "/|\\") {
        secondTestCount += 1;
      }
      if ((char >= "0" && char <= "9") || char == ".") {
        number += char;

        if (code.charAt(i + 1) == "/") {
          //console.log(number);
          if (secondTestCount == 1) {
            numberInt = parseInt(number);
            this.save.checkPointLevel = numberInt;
          }
          if (secondTestCount == 2) {
            numberInt = parseInt(number);
            this.save.money = numberInt;
          }
          if (secondTestCount == 3) {
            numberInt = parseInt(number);
            this.save.maxLives = numberInt;
          }
          if (secondTestCount == 4) {
            numberDouble = parseFloat(number);
            this.save.misslesLives = numberDouble;
          }
          if (secondTestCount == 5) {
            numberInt = parseInt(number);
            this.save.MissileNumber = numberInt;
          }
          if (secondTestCount == 6) {
            numberDouble = parseFloat(number);
            this.save.regenerationPourecent = numberDouble;
          }
          if (secondTestCount == 7) {
            numberInt = parseInt(number);
            this.save.helpers = [];
            for (var j = 0; j < numberInt; j++) {
              this.save.helpers.push(
                new Helper(
                  this,
                  { x: 0, y: this.gameHeight - 70 - 40 },
                  { x: 3, y: 0 },
                  1000,
                  "rgb(26, 163, 47)",
                  300
                )
              );
            }
            let countForHelperPos2 = 70 * (this.save.helpers.length - 1);
            this.save.helpers.forEach((object) => {
              object.markedForTempDeletion = false;
              object.lives = object.maxLives;
              object.position.x = countForHelperPos2;
              object.speed.x = Math.abs(object.speed.x);
              countForHelperPos2 -= 70;
            });
          }
          if (secondTestCount == 8) {
            numberInt = parseInt(number);
            this.save.BWN = numberInt;
          }

          number = "";
        }
      }
    }
  }

  update(deltaTime) {
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
    var rect3 = {
      x: this.gameWidth / 2 - 100,
      y: this.gameHeight / 2 + 90,
      width: 200,
      height: 50,
    };
    var rectStartCheckpoint = {
      x: this.gameWidth / 2 - 100,
      y: this.gameHeight / 2 + 50,
      width: 200,
      height: 50,
    };
    var rectBack = {
      x: 10,
      y: 60,
      width: 70,
      height: 20,
    };
    var rectshop = {
      x: game.gameWidth / 2 - 100,
      y: game.gameHeight / 2 + 90,
      width: 200,
      height: 50,
    };
    var rectCopy1 = {
      x: game.gameWidth / 2 -150/2,
      y: 600,
      width: 150,
      height: 40,
    };
    var rectCopy2 = {
      x: game.gameWidth / 2 -150/2,
      y: 590,
      width: 150,
      height: 40,
    };
    var rectSound = {
      x: this.gameWidth-50,
      y: this.gameHeight-50,
      width: 40,
      height: 40,
    };

    this.mousePosition = {
      x: xPos / this.ratio,
      y: yPos / this.ratio,
    };
    if(backgroundMusic.ended){
      backgroundMusic.currentTime=0
      backgroundMusic.play()
    }

    if (this.lives <= 0) {
      this.gamestate = GAMESTATE.GAMEOVER;
      if(this.firstTimeDying){
        whenYouDie.play();
      }
      this.firstTimeDying=false;

      this.haveShield = false;
      this.lives = 0;
      this.goldCoins.length = [];
      this.spaceShip.position = {
        x: this.gameWidth / 2 - this.spaceShip.width / 2,
        y: this.gameHeight - this.spaceShip.height,
      };
      this.basicEnemys=[]
      this.helpers.forEach((object) => {
        object.missles=[]

      });

      this.missles.missles = [];
      if (this.currentLevel >= 5) {
        this.gamestate = GAMESTATE.CHECKPOINT;
        this.spaceShip.regenerationPourecent = this.save.regenerationPourecent;
        this.misslesLives = this.save.misslesLives;
        this.maxLives = this.save.maxLives;
        this.missles.MissileNumber = this.save.MissileNumber;
        this.money = this.save.money;
        this.currentLevel = this.save.checkPointLevel;
        this.lives = this.maxLives;
        this.helpers = [];
        this.save.helpers.forEach((item, i) => {
          this.helpers.push(item);
        });
        this.missles.BWN = this.save.BWN;
        let countForHelperPos2 = 70 * (this.helpers.length - 1);
        this.helpers.forEach((object) => {
          object.markedForTempDeletion = false;
          object.lives = object.maxLives;
          object.position.x = countForHelperPos2;
          object.speed.x = Math.abs(object.speed.x);
          countForHelperPos2 -= 70;
        });
      }
    }
    this.goldCount += deltaTime;
    this.buyCount += deltaTime;
    if(this.gamestate !== GAMESTATE.RUNNING){
    if(this.buyCount>=this.pauseTime){
    if (isInside(this.mousePosition, rectSound) && this.clickDown) {
      this.buyCount = 0;
      if (this.soundOn) {
        this.soundOn=false
        backgroundMusic.pause()


      } else if (!this.soundOn) {
        this.soundOn=true
        backgroundMusic.play()
      }
    }
  }
  }
    if (
      this.gamestate === GAMESTATE.GAMEOVER ||
      this.gamestate === GAMESTATE.GAMEWON
    ) {
      return;
    }
    if (this.gamestate === GAMESTATE.CHECKPOINT) {
      if (isInside(this.mousePosition, rect) && this.clickDown) {
        this.start2();
      } else if (isInside(this.mousePosition, rect2) && this.clickDown) {
        this.lastGameState = GAMESTATE.CHECKPOINT;
        this.gamestate = GAMESTATE.OPTION;
      } else if (isInside(this.mousePosition, rect3) && this.clickDown) {
        this.lastGameState = GAMESTATE.CHECKPOINT;
        this.gamestate = GAMESTATE.SHOP;
      }

      return;
    }
    if (this.gamestate === GAMESTATE.MENU) {
      if (isInside(this.mousePosition, rect) && this.clickDown) {
        this.start();
      } else if (isInside(this.mousePosition, rect2) && this.clickDown) {
        this.lastGameState = GAMESTATE.MENU;
        this.gamestate = GAMESTATE.OPTION;
      } else if (isInside(this.mousePosition, rect3) && this.clickDown) {
        this.lastGameState = GAMESTATE.MENU;
        this.gamestate = GAMESTATE.SAUVGARD;
      }
      return;
    }
    if (this.gamestate === GAMESTATE.OPTION) {
      if (isInside(this.mousePosition, rectBack) && this.clickDown) {
        this.gamestate = this.lastGameState;
      }
      if (isInside(this.mousePosition, rectCopy1) && this.clickDown) {
        try{
        var promise = navigator.clipboard.writeText(codeCipher(creatCode(game)))
      }catch (err) {
        alert("This button doesn't work for your computer. You can select and copy the code.");
        this.clickDown=false
        this.mousePosition.x=0
        this.mousePosition.y=0
      }
      }

      return;
    }
    if (this.gamestate === GAMESTATE.PAUSED) {
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
      if(this.currentLevel%5==0){
        rect = {
          x: game.gameWidth / 2 - 100,
          y: game.gameHeight / 2 - 90,
          width: 200,
          height: 50,
        };
        rect2 = {
          x: game.gameWidth / 2 - 100,
          y: game.gameHeight / 2 - 30,
          width: 200,
          height: 50,
        };
        rectshop = {
          x: game.gameWidth / 2 - 100,
          y: game.gameHeight / 2 + 30,
          width: 200,
          height: 50,
        };
        if (isInside(this.mousePosition, rectCopy1) && this.clickDown) {
          try{
            var promise = navigator.clipboard.writeText(codeCipher(creatCode(game)))
        }catch (err) {
          alert("This button doesn't work for your computer. You can select and copy the code.");
          this.clickDown=false
          this.mousePosition.x=0
          this.mousePosition.y=0
        }
        }
      }
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
      let shop6 = {
        x: 50,
        y: 350,
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
      let buy6 = {
        x: shop5.x + shop5.width + 10,
        y: 350,
        width: 100,
        height: 40,
      };

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
          this.money >= 1000 * Math.pow(5, this.helpers.length)
        ) {
          this.money -= 1000 * Math.pow(5, this.helpers.length);
          if (this.helpers.length === 0) {
            this.helpers.push(
              new Helper(
                this,
                { x: 0, y: this.gameHeight - 70 - 40 },
                { x: 3, y: 0 },
                1000,
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
                1000,
                "rgb(26, 163, 47)",
                300
              )
            );
          }
          this.buyCount = 0;
        }
        if (
          isInside(this.mousePosition, buy6) &&
          this.clickDown &&
          this.money >= 1000 * Math.pow(2, this.missles.BWN - 1)
        ) {
          this.buyCount = 0;
          this.money -= 1000 * Math.pow(2, this.missles.BWN - 1);
          this.missles.BWN += 1;
        }
      }
      return;
    }
    if (this.gamestate === GAMESTATE.SAUVGARD) {
      inputBox.style.display = "block";
      let codeWithLineBreak = inputBox.value;
      var code = "";
      for( var i = 0; i < codeWithLineBreak.length; i++ ){
      if( !(codeWithLineBreak[i] == '\n' || codeWithLineBreak[i] == '\r') )
        code += codeWithLineBreak[i];
      }
        if (code ==""){
        code="00";
      }
      const myDecipher = decipher(
        "somthingelseverycomplicatedthatnobodywillfindbecausenobodycareofthecodeofacame"
      );
      code = myDecipher(code);

      this.countForSaugarde += deltaTime;

      if (isInside(this.mousePosition, rectBack) && this.clickDown) {
        this.gamestate = this.lastGameState;
        inputBox.style.display = "none";
      }

      if (this.countForSaugarde > 300) {
        if (
          isInside(this.mousePosition, rectStartCheckpoint) &&
          this.clickDown
        ) {
          this.countForSaugarde = 0;
          if (veryfyingCode(this, code)) {
            this.SetSaveData(code);
            this.startCheckpoint();
            inputBox.style.display = "none";
          }
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
    if (this.basicEnemys.length === 0 && this.goldCoins.length === 0) {
      this.missles.missles = [];
      this.currentLevel += 1;
      this.haveShield = false;
      if (this.currentLevel % 5 == 0) {
        this.save.checkPointLevel = this.currentLevel;
        this.save.maxLives = this.maxLives;
        this.save.MissileNumber = this.missles.MissileNumber;
        this.save.misslesLives = this.misslesLives;
        this.save.regenerationPourecent = this.spaceShip.regenerationPourecent;
        this.save.money = this.money;
        this.save.BWN = this.missles.BWN;
        this.save.helpers = [];
        this.helpers.forEach((item, i) => {
          this.save.helpers.push(item);
        });
      }
      if (this.currentLevel + 1 > this.levels.length) {
        this.gamestate = GAMESTATE.GAMEWON;
        this.currentLevel = 0;
      } else {
        this.gamestate = GAMESTATE.LEVELWON;
        let countForHelperPos2 = 70 * (this.helpers.length - 1);
        this.helpers.forEach((object) => {
          object.markedForTempDeletion = false;
          object.lives = object.maxLives;
          object.position.x = countForHelperPos2;
          object.speed.x = Math.abs(object.speed.x);
          countForHelperPos2 -= 70;
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
    context.fillRect(this.gameWidth - 180, 0, 180, 25);
    context.fillRect(this.gameWidth - 180, 30, 180, 25);
    context.fillRect(0, 0, 150, 25);
    context.fillRect(this.gameWidth / 2 - 60, 0, 120, 25);

    context.font = "20px Arial";
    context.fillStyle = "black";
    context.textAlign = "center";
    context.textAlign = "left";
    context.fillText(
      "HP: " + Math.round(this.lives * 100) / 100.0 + "/" + this.maxLives,
      this.gameWidth - 150,
      20
    );
    context.fillText(
      "Damage: " + Math.round(this.misslesLives * 10) / 10,
      this.gameWidth - 150,
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
