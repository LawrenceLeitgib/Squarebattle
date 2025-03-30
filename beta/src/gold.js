function goldNoise(visible){
  if(visible){
  var audio = new Audio("assets/audio/MoneyAudio.mp3");
  audio.volume=.35;
  audio.play();
}
}
class Gold {
  constructor(game, enemy, moneyValue, size) {
    this.game = game;
    this.size = size;
    this.probability = 100/moneyValue
    this.visible=(Math.random() < 5/Math.pow(moneyValue,1/1.5))
    this.visibleSound=(Math.random() < 2/Math.pow(moneyValue,1/1.2))


    this.moneyValue = moneyValue;
    this.range =Math.round(Math.pow(moneyValue,1/6)*20)
    this.radPosition = getRandomNumberBetween(-this.range, this.range)
    this.anglePoistion = Math.random()*2*Math.PI
    this.iniPosition = {
      x: enemy.position.x + enemy.width / 2  +this.radPosition*Math.cos(this.anglePoistion) ,
      y: enemy.position.y + enemy.height / 2+ this.radPosition*Math.sin(this.anglePoistion),
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
    this.destinationSquare={
      x:this.game.goldPosX,
      y:this.game.goldPosY,
      width:this.game.goldSize,
      height:this.game.goldSize,
    }
    this.count = 0
    this.deltaY = this.destination.y - this.position.y - this.height / 2;
    this.deltaX = this.destination.x - this.position.x - this.width / 2;
    this.angle = Math.atan(this.deltaY / this.deltaX);
    if (this.deltaX == 0 && this.deltaY < 0) {
      this.angle = (-3 * Math.PI) / 2;
    }
  }

  draw(context) {
    if(this.visible){
      /*
    showGoldCoin(
      context,
      this.game,
      this.position.x,
      this.position.y,
      this.size
    );
    */
    context.drawImage(this.game.gold1, this.position.x, this.position.y, this.size, this.size);
  }
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
    detectionCollisionCub

    if(detectionCollisionCub(this.destinationSquare,this)||this.count>=4000){
      this.game.money += 1;
      this.markedForDeletion = true;
      if(this.game.soundOn){

      goldNoise(this.visibleSound)
    }
    }

  }
}
