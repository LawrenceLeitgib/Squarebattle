class BasicEnemyLevel4 extends BasicEnemy {
  constructor(
    game,
    position,
    speed,
    lives,
    color,
    money = 1,
    sizeLaszer = 14,
    damageLaszerTimePerSecond = 10,
    damageLaszerPerTime = 1,
    type = 1,
    colorLaszer = "rgb(200,0,0)",
    size = 50,
    goldSize = 20
  ) {
    super(game, position, speed);
    this.goldSize = goldSize;
    this.game = game;
    this.position = position;
    this.sizeLaszer = sizeLaszer;
    this.width = size;
    this.height = size;
    this.speed = speed;
    this.markedForDeletion = false;
    this.color = color;
    this.colorLaszer = colorLaszer;
    this.maxLives = lives;
    this.lives = this.maxLives;
    this.damageCount = 0;
    this.damageLaszerTimePerSecond = 1000 / damageLaszerTimePerSecond;
    this.damageLaszerPerTime = damageLaszerPerTime;
    this.money = money;
    this.laszerRect = {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
    };
    this.countDraw = 0;
    this.countDrawTime = 0;
    this.type = type;
    this.badGuy = true;
    this.normalType=true;

  }

  update(deltaTime) {
    super.update(deltaTime);
    if(this.position.y +this.height>=0){

    this.countDrawTime += deltaTime;
    if (this.countDrawTime >= 100) {
      this.countDrawTime = 0;
      this.countDraw += 1;
      if (this.countDraw >= 10) this.countDraw = 0;
    }
    if (this.type == 1) {
      this.laszerRect = {
        x: this.position.x + this.width / 2 - this.sizeLaszer / 2,
        y: this.position.y + this.height,
        width: this.sizeLaszer,
        height: this.game.gameHeight,
      };
    } else if (this.type == 2) {
      this.laszerRect = {
        x: this.position.x + this.width,
        y: this.position.y + this.height / 2 - this.sizeLaszer / 2,
        width: this.game.gameWidth,
        height: this.sizeLaszer,
      };
    } else if (this.type == 3) {
      this.laszerRect = {
        x: 0,
        y: this.position.y + this.height / 2 - this.sizeLaszer / 2,
        width: this.position.x,
        height: this.sizeLaszer,
      };
    }
    if (this.position.y + this.height >= 0) {
      if (!this.game.haveShield) {
        if (detectionCollisionLaszer(this.laszerRect, this.game.spaceShip)) {
          this.damageCount += deltaTime;
          if (this.damageCount >= this.damageLaszerTimePerSecond) {
            this.game.lives -= this.damageLaszerPerTime;
            this.damageCount = 0;
          }
        }
      }
      this.game.helpers.forEach((object) => {
        if (detectionCollisionLaszer(this.laszerRect, object)) {
          object.innertCountForLaszer+=deltaTime
          if (object.innertCountForLaszer >= this.damageLaszerTimePerSecond) {
            object.lives -= this.damageLaszerPerTime;
            object.innertCountForLaszer = 0;
          }
        }
      });
    }
  }
  }
  draw(context) {

    if (this.position.y + this.height >= 0) {
      context.fillStyle = this.colorLaszer;
      context.fillRect(
        this.laszerRect.x,
        this.laszerRect.y,
        this.laszerRect.width,
        this.laszerRect.height
      );
      if (this.type == 1) {
        context.fillStyle = drakenAColor(this.colorLaszer, 100);
        context.fillRect(
          this.laszerRect.x + 1 + this.countDraw,
          this.laszerRect.y,
          this.laszerRect.width - 2 - this.countDraw * 2,
          this.laszerRect.height
        );
      }
      if (this.type == 2 || this.type == 3) {
        context.fillStyle = drakenAColor(this.colorLaszer, 100);
        context.fillRect(
          this.laszerRect.x,
          this.laszerRect.y + 1 + this.countDraw,
          this.laszerRect.width,
          this.laszerRect.height - 2 - this.countDraw * 2
        );
      }
    }
    super.draw(context);

}
}
