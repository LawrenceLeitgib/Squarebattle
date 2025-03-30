class BasicEnemy {
  constructor(game, position, speed, live, color, money = 1,goldSize=20) {
    this.goldSize = goldSize
    this.game = game;
    this.width = 50;
    this.height = 50;
    this.position = {
      x: position.x,
      y: position.y,
    };
    this.speed = {
      x: speed.x,
      y: speed.y,
    };
    this.markedForDeletion = false;
    this.color = color;
    this.maxLives = live;
    this.lives = this.maxLives;
    this.deltaLives = 0;
    this.money = money;
    this.badGuy=true;
    this.normalType=true;
  }
  update(deltaTime) {
    this.position.y += this.speed.y;
    this.position.x += this.speed.x;
    if(this.position.y +this.height>=0){
    if (this.position.y + this.height > this.game.gameHeight + 20) {
      this.lives=0
      this.game.lives-=1
    }

    if (detectionCollision(this, this.game.spaceShip)) {
      this.game.lives--;
      this.lives--;
      if(this.game.soundOn){
      (new Audio("assets/audio/WhenYouAreHit.mp3")).play();
    }
      detectionCollisionEnemy(this, this.game.spaceShip);
    }
    //we need to add 2 "missles" because the first one is from the object from the
    //class LaunchMissle and the second on is from the array missles
    //inside that class
    this.game.missles.missles.forEach((object) => {
      if (detectionCollision(this, object)) {
        this.deltaLives = this.lives;
        this.lives -= object.lives;
        //(new Audio("assets/audio/WhenEnemyAreHit.mp3")).play();
        if (this.lives <= 0) {
          this.lives = 0;
          object.lives -= this.deltaLives;
        } else {
          object.lives = 0;
        }
      }
    });
    this.game.helpers.forEach((object) =>
      object.missles.forEach((object) => {
        if (detectionCollision(this, object)) {
          this.deltaLives = this.lives;
          this.lives -= object.lives;
          if (this.lives <= 0) {
            this.lives = 0;
            object.lives -= this.deltaLives;
          } else {
            object.lives = 0;
          }
        }
      })
    );
    if (this.lives <= 0) {
      if(this.normalType){
      this.markedForDeletion = true;
      //(new Audio("assets/audio/WhenEnemyDie.mp3")).play();
      for(var i=0;i<this.money;i++){
      this.game.goldCoins.push(new Gold(this.game, this, this.money,this.goldSize))
    }
  }
}
}
    if (this.position.x <= 0) {
      this.speed.x = -this.speed.x;
      this.position.x =1
    }
    if (this.position.x + this.width >= this.game.gameWidth) {
      this.speed.x = -this.speed.x;
      this.position.x =this.game.gameWidth-1-this.width
    }

  }

  draw(context) {
    drawEnemy(context, this.game, this)
  }
}
