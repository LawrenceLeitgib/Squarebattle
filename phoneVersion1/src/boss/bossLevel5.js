class BossLevel5 extends BasicEnemy {
  constructor(
    game,
    position,
    speed,
    lives,
    color,
    money = 1,
    width = 40,
    height = 40,
    sizeLaszer = 15,
    damageLaszerTimePerSecond = 30,
    damageLaszerPerTime = 20,
    colorLaszer = "rgb(0, 98, 255)",
    timeBeforeChangeOfDirection = 2000,
    rotationSpeed = 0.03,
    timeBeforeChangeOfRotation = 4000,
    positionOfLive = 40,
    timeShowing=2000,
    timeNotshowing=3000,
    goldSize = 20
  ) {
    super(game, position, speed, lives, color);
    this.goldSize = goldSize;
    this.game = game;
    this.position = position;
    this.timeShowing=timeShowing;
    this.timeNotshowing=timeNotshowing;
    this.game.missles = game.missles;
    this.width = width;
    this.height = height;
    this.Aspeed = speed;
    this.timeBeforeChangeOfRotation = timeBeforeChangeOfRotation;
    this.countBR = 0;
    this.newTime = timeBeforeChangeOfRotation;
    this.rotationSpeed = rotationSpeed;
    this.newRotSpeed = rotationSpeed;
    this.showLaszer = false;
    this.countShowLaszer = 0;
    this.markedForDeletion = false;
    this.color = color;
    this.colorLaszer = colorLaszer;
    this.damageCount = 0;
    this.sizeLaszer = sizeLaszer;
    this.damageLaszerTimePerSecond = 1000 / damageLaszerTimePerSecond;
    this.damageLaszerPerTime = damageLaszerPerTime;
    this.maxLives = lives;
    this.lives = this.maxLives;
    this.count = 0;
    this.positionOfLive = positionOfLive;
    this.timeBeforeChangeOfDirection = timeBeforeChangeOfDirection;
    this.countBeeforeCOD = 2000;
    this.angle = 0;
    this.countDraw = 0;
    this.countDrawTime = 0;
    this.speed = {
      y: this.Aspeed * Math.sin(this.angle),
      x: this.Aspeed * Math.cos(this.angle),
    };
    this.money = money;
    this.limited = false;
    this.drawLaszerUpsideDown = false;
    this.rotAngle = 0;

    this.laszerRect1 = {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
    };
    this.laszerRect2 = {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
    };
    this.laszerRect3 = {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
    };
    this.laszerRect4 = {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
    };
    this.badGuy=true;
    this.normalType=true;


  }
  update(deltaTime) {
    this.countDrawTime += deltaTime;
    if (this.countDrawTime >= 100) {
      if (!this.drawLaszerUpsideDown) {
        this.countDrawTime = 0;
        this.countDraw += 1;
        if (this.countDraw >= 10) this.drawLaszerUpsideDown = true;
      }
      if (this.drawLaszerUpsideDown) {
        this.countDraw -= 1;
        this.countDrawTime = 0;
        if (this.countDraw <= 0) {
          this.drawLaszerUpsideDown = false;
        }
      }
    }
    if (this.showLaszer) {
      if (!this.game.haveShield) {
        if (
          detectionSideWay(
            this.laszerRect1,
            this.game.spaceShip,
            this.rotAngle,
            this
          ) ||
          detectionSideWay(
            this.laszerRect1,
            this.game.spaceShip,
            this.rotAngle + Math.PI / 2,
            this
          ) ||
          detectionSideWay(
            this.laszerRect1,
            this.game.spaceShip,
            this.rotAngle + Math.PI,
            this
          ) ||
          detectionSideWay(
            this.laszerRect1,
            this.game.spaceShip,
            this.rotAngle + (3 * Math.PI) / 2,
            this
          )
        ) {
          this.damageCount += deltaTime;
          if (this.damageCount >= this.damageLaszerTimePerSecond) {
            this.game.lives -= this.damageLaszerPerTime;
            this.damageCount = 0;
          }
        }
      }
    }
    this.countBeeforeCOD += deltaTime;

    if (this.countBeeforeCOD >= this.timeBeforeChangeOfDirection) {
      this.angle = getRandomNumberBetween(0, 2 * Math.PI);
      this.countBeeforeCOD = 0;
      this.speed = {
        y: this.Aspeed * Math.sin(this.angle),
        x: this.Aspeed * Math.cos(this.angle),
      };
    }

    if (this.position.y + this.height >= this.game.gameHeight) {
      this.speed.y = -this.speed.y;
      this.position.y = this.game.gameHeight - this.height - 1;
    }

    if (this.position.y <= 0) {
      this.speed.y = -this.speed.y;
      this.position.y = 1;
    }
    if (this.limited) {
      if (this.position.y > this.game.gameHeight / 2) {
        this.speed.y = 0;
        this.position.y = this.game.gameHeight / 2;
      }
    }
    super.update(deltaTime);
    this.laszerRect1 = {
      x: this.position.x + this.width / 2,
      y: this.position.y + this.height / 2,
      width: this.sizeLaszer,
      height: 200000,
    };
    this.countBR += deltaTime;
    if (this.countBR >= this.newTime) {
      this.rotationSpeed = -this.rotationSpeed;
      this.newRotSpeed = this.rotationSpeed;
      //this.newRotSpeed=getRandomNumberBetween(100, 150)*this.rotationSpeed/100
      //this.newTime=this.timeBeforeChangeOfRotation*getRandomNumberBetween(20, 200)/100
      this.countBR = 0;
    }
    this.countShowLaszer+=deltaTime
    if(this.countShowLaszer>=this.timeShowing){
      this.showLaszer=true
      if(this.countShowLaszer>=this.timeNotshowing){
        this.showLaszer=false
        this.countShowLaszer=0

      }
    }

    this.rotAngle += this.newRotSpeed;
  }

  draw(context) {
    context.fillStyle = this.colorLaszer;
    //this.rotAngle=.01
    if (this.showLaszer) {
      drawRectRotated(
        context,
        this.laszerRect1.x,
        this.laszerRect1.y,
        this.laszerRect1.width,
        this.laszerRect1.height,
        this.rotAngle
      );

      drawRectRotated(
        context,
        this.laszerRect1.x,
        this.laszerRect1.y,
        this.laszerRect1.width,
        this.laszerRect1.height,
        this.rotAngle + Math.PI / 2
      );
      drawRectRotated(
        context,
        this.laszerRect1.x,
        this.laszerRect1.y,
        this.laszerRect1.width,
        this.laszerRect1.height,
        this.rotAngle + Math.PI
      );
      drawRectRotated(
        context,
        this.laszerRect1.x,
        this.laszerRect1.y,
        this.laszerRect1.width,
        this.laszerRect1.height,
        this.rotAngle + (3 * Math.PI) / 2
      );
      context.fillStyle = drakenAColor(this.colorLaszer,100);
      drawRectRotatedMove(
        context,
        this.laszerRect1.x,
        this.laszerRect1.y,
        this.laszerRect1.width,
        this.laszerRect1.height,
        this.rotAngle,
        this.countDraw
      )
      drawRectRotatedMove(
        context,
        this.laszerRect1.x,
        this.laszerRect1.y,
        this.laszerRect1.width,
        this.laszerRect1.height,
        this.rotAngle+Math.PI/2,
        this.countDraw
      )
      drawRectRotatedMove(
        context,
        this.laszerRect1.x,
        this.laszerRect1.y,
        this.laszerRect1.width,
        this.laszerRect1.height,
        this.rotAngle+Math.PI,
        this.countDraw
      )
      drawRectRotatedMove(
        context,
        this.laszerRect1.x,
        this.laszerRect1.y,
        this.laszerRect1.width,
        this.laszerRect1.height,
        this.rotAngle+3*Math.PI/2,
        this.countDraw
      )
    }
    /*
    fillRectN(this.laszerRect1, context);
    fillRectN(this.laszerRect2, context);
    fillRectN(this.laszerRect3, context);
    fillRectN(this.laszerRect4, context);
    context.fillStyle = drakenAColor(this.colorLaszer, 100);
    fillRectLW(this.laszerRect1, context, this.countDraw);
    fillRectLW(this.laszerRect4, context, this.countDraw);
    fillRectLH(this.laszerRect2, context, this.countDraw);
    fillRectLH(this.laszerRect3, context, this.countDraw);
    */

    super.draw(context);

    context.fillStyle = "rgb(56, 5, 2)";
    context.fillRect(
      this.game.gameWidth / 4,
      this.positionOfLive,
      this.game.gameWidth / 2,
      30
    );
    context.fillStyle = "rgb(255, 0, 0)";
    context.fillRect(
      this.game.gameWidth / 4,
      this.positionOfLive,
      (this.game.gameWidth / 2 / this.maxLives) * this.lives,
      30
    );
  }
}
