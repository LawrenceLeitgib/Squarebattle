class BossLevel6 extends BossLevel2 {
  constructor(
    game,
    position,
    speed,
    lives,
    time,
    color,
    money = 1,
    speedMissle = 10,
    sizeMissle = 8,
    livesMissle = 1,
    width = 40,
    height = 40,
    positionOfLive = 40,
    timeBeforeChangeOfDirection = 2000,
    goldSize=20
  ) {
    super(game, position, speed, lives, color);
    this.goldSize = goldSize
    this.game = game;
    this.position = position;
    this.game.missles = game.missles;
    this.width = width;
    this.height = height;
    this.Aspeed = speed;
    this.speedMissle = speedMissle;
    this.sizeMissle = sizeMissle;
    this.livesMissle = livesMissle;
    this.markedForDeletion = false;
    this.color = color;
    this.maxLives = lives;
    this.lives = this.maxLives;
    this.count = 0;
    this.missles = []


    this.time = time;
    this.positionOfLive = positionOfLive;
    this.timeBeforeChangeOfDirection = timeBeforeChangeOfDirection;
    this.countBeeforeCOD = 2000;
    this.angle = 0;
    this.speed = {
      y: this.Aspeed * Math.sin(this.angle),
      x: this.Aspeed * Math.cos(this.angle)
    };
    this.money = money;
    this.limited = false;
    this.badGuy=true;
    this.normalType=false;



  }
  update(deltaTime) {

    if(this.lives<=0 && this.width>=40){
      var nPosition = this.position;
      var nSpeed = this.Aspeed;
      var nLives = this.maxLives;
      var newTime = this.time;
      var nColor = this.color;
      var nTime = this.time;
      var nMoney = this.money;
      var nSpeedMissle = this.speedMissle;
      var nSizeMissle=this.sizeMissle;
      var nLivesMissle=this.livesMissle;
      var nWidth = 3*this.width/4;
      var nHeight = 3*this.height/4;
      this.game.basicEnemys.push(new BossLevel6(
        this.game,
        {x:this.position.x+100,y:this.position.y+100},
        nSpeed,
        nLives,
        newTime,
        nColor,
        nMoney,
        nSpeedMissle,
        nSizeMissle,
        nLivesMissle,
        nWidth,
        nHeight
      ));
      this.game.basicEnemys.push(new BossLevel6(
        this.game,
        {x:this.position.x-100,y:this.position.y-100},
        nSpeed,
        nLives,
        newTime,
        nColor,
        nMoney,
        nSpeedMissle,
        nSizeMissle,
        nLivesMissle,
        nWidth,
        nHeight
      ));
      this.markedForDeletion=true
      for(var i=0;i<this.money/7;i++){
      this.game.goldCoins.push(new Gold(this.game, this, this.money/7,this.goldSize))
    }

    }else if(this.lives<=0){
      this.markedForDeletion=true
      for(var i=0;i<this.money/7;i++){
      this.game.goldCoins.push(new Gold(this.game, this, this.money/7,this.goldSize))
    }
    }
    super.update(deltaTime);

  }

  draw(context) {
    super.draw(context);
  }
}
