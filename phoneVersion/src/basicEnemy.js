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
    this.badGuy=true
  }
  update(deltaTime) {
    this.position.y += this.speed.y;
    this.position.x += this.speed.x;

    if (this.position.y + this.height > this.game.gameHeight + 5) {
      this.game.lives -= 3;
      this.markedForDeletion = true;
      for(var i=0;i<this.money;i++){
      this.game.goldCoins.push(new Gold(this.game, this, this.money,this.goldSize))
    }
  }
    if (detectionCollision(this, this.game.spaceShip)) {
      this.game.lives--;
      this.lives--;
      detectionCollisionEnemy(this, this.game.spaceShip);
    }
    //we need to add 2 "missles" because the first one is from the object from the
    //class LaunchMissle and the second on is from the array missles
    //inside that class
    this.game.missles.missles.forEach((object) => {
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
    });
    this.game.helpers.forEach((object) =>
      object.missles.missles.forEach((object) => {
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
      this.markedForDeletion = true;
      for(var i=0;i<this.money;i++){
      this.game.goldCoins.push(new Gold(this.game, this, this.money,this.goldSize))
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
    /*
    context.fillStyle = this.color;
    context.fillRect(this.position.x, this.position.y, this.width, this.height);
    context.fillStyle = "rgb(255, 0, 0)";
    context.fillRect(
      this.position.x,
      this.position.y,
      (this.width / this.maxLives) * this.lives,
      this.height / 10
    );
    */
    drawEnemy(context, this.game, this)
  }
}
