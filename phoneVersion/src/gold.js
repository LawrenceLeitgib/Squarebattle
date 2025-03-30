class Gold {
  constructor(game, enemy, moneyValue, size) {
    this.game = game;
    this.size = size;
    this.moneyValue = moneyValue;

    this.iniPosition = {
      x: enemy.position.x + enemy.width / 2  + getRandomNumberBetween(-30, 30),
      y: enemy.position.y + enemy.height / 2+ getRandomNumberBetween(-30, 30),
    };

    /*
    this.iniPosition = {
      x: enemy.position.x + enemy.width / 2  + getRandomNumberBetween(450, 5000),
      y: enemy.position.y + enemy.height / 2+ getRandomNumberBetween(450, 5000),
    };
    */
    this.position = {
      x: this.iniPosition.x,
      y: this.iniPosition.y,
    };
    this.speed = {
      x: enemy.speed.x,
      y: enemy.speed.y,
    };

    this.width = this.size;
    this.height = this.size;
    this.speedAll = 12;
    this.markedForDeletion = false;


    this.destination = {
      x: this.game.goldPosX+this.game.goldSize/2,
      y: this.game.goldPosY+this.game.goldSize/2,
    };
    this.count = 0
    this.deltaY = this.destination.y - this.position.y - this.height / 2;
    this.deltaX = this.destination.x - this.position.x - this.width / 2;
    this.angle = Math.atan(this.deltaY / this.deltaX);
    if (this.deltaX == 0 && this.deltaY < 0) {
      this.angle = (-3 * Math.PI) / 2;
    }
  }

  draw(context) {
    showGoldCoin(
      context,
      this.game,
      this.position.x,
      this.position.y,
      this.size
    );
  }
  update(deltaTime) {
    this.angle = Math.atan(this.deltaY / this.deltaX);
    if (this.deltaX == 0 && this.deltaY < 0) {
      this.angle = (-3 * Math.PI) / 2;
    }
    if (this.deltaY >= 0 && this.deltaX >= 0) {
      this.speed = {
        x: this.speedAll * Math.cos(this.angle),
        y: this.speedAll * Math.sin(this.angle),
      };
    } else if (this.deltaY >= 0 && this.deltaX <= 0) {
      this.speed = {
        x: -this.speedAll * Math.cos(this.angle),
        y: -this.speedAll * Math.sin(this.angle),
      };
    } else if (this.deltaY <= 0 && this.deltaX <= 0) {
      this.speed = {
        x: -this.speedAll * Math.cos(this.angle),
        y: -this.speedAll * Math.sin(this.angle),
      };
    } else if (this.deltaY <= 0 && this.deltaX >= 0) {
      this.speed = {
        x: this.speedAll * Math.cos(this.angle),
        y: this.speedAll * Math.sin(this.angle),
      };
    }

    this.position.y += this.speed.y;
    this.position.x += this.speed.x;

    this.count+=deltaTime
    if (this.position.y<=0 ||this.count>=4000) {
      this.game.money += 1;
      this.markedForDeletion = true;
    }
    else if (this.iniPosition.y<=0){
        this.game.money += 1;
        this.markedForDeletion = true;
    }
    else if (this.iniPosition.x<=this.game.goldPosX){
      if (this.position.x>=this.game.goldPosX) {
        this.game.money += 1;
        this.markedForDeletion = true;
      }
    }
    else if (this.iniPosition.x>=this.game.goldPosX){
      if (this.position.x<=this.game.goldPosX) {
        this.game.money += 1;
        this.markedForDeletion = true;
      }
    }

  }
}
