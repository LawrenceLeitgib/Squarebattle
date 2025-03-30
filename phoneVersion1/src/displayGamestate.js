function borderOfRect(rect, context) {
  context.fillRect(rect.x - 3, rect.y - 3, rect.width + 6, rect.height + 6);
}

function fillRectN(rect, context) {
  context.fillRect(rect.x, rect.y, rect.width, rect.height);
}
function fillRectLW(rect, context, countDraw) {
  context.fillRect(
    rect.x + 1 + countDraw,
    rect.y,
    rect.width - 2 - countDraw * 2,
    rect.height
  );
}
function fillRectLH(rect, context, countDraw) {
  context.fillRect(
    rect.x,
    rect.y + 1 + countDraw,
    rect.width,
    rect.height - 2 - countDraw * 2
  );
}
function fillRectB(rect, context, color1, color2) {
  if (isInside(game.mousePosition, rect)) {
    context.fillStyle = color1;
    borderOfRect(rect, context);
  }
  context.fillStyle = color2;
  fillRectN(rect, context);
}
function fillRectB2(rect, context, color1, color2, game) {
  if (
    (isInside(game.touchPosition, rect) && game.touchDown) ||
    isInside(game.mousePosition, rect)
  ) {
    context.fillStyle = color1;
    borderOfRect(rect, context);
  }
  context.fillStyle = color2;
  fillRectN(rect, context);
}
function fillTriangle(x1, y1, x2, y2, x3, y3) {
  context.beginPath();
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.lineTo(x3, y3);
  context.lineTo(x1, y1);
  context.fill();
}
function fillcircleTriangle(x1, y1, x2, y2, x3, y3, r) {
  context.beginPath();
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.arcTo(x1, y1, x3, y3, r);
  context.lineTo(x1, y1);
  context.fill();
}
function fillRectM(rect, context, color1, color2, color3, money, game) {
  if (game.money >= money) {
    fillRectB(rect, context, color1, color2);
  } else {
    fillRectB(rect, context, color3, color2);
    context.fillStyle = "rgba(56, 56, 56,.7)";
    fillRectN(rect, context);
  }
}

let regularRectColor = "rgba(0, 255, 255, 1)";
//let regularShopColor = "rgba(71, 179, 168)";
let regularShopColor = "rgba(14, 118, 171)";
let regularBorderColor = "rgba(255,223,0, 1)";
let oldColorThatIWIllNeverUseAgain = "rgba(56, 125, 118, 1)";
let notEnoughMoneyColor = "rgba(255, 18, 0,1)";

let soundImage = document.getElementById("sound");
let musicImage = document.getElementById("music");



let rectBack = {
  x: 10,
  y: 60,
  width: 70,
  height: 20,
};
function displayGamestate(context, gamestate, GAMESTATE, game) {
  let rect = {
    x: game.gameWidth / 2 - 100,
    y: game.gameHeight / 2 - 30,
    width: 200,
    height: 50,
  };
  let rect2 = {
    x: game.gameWidth / 2 - 100,
    y: game.gameHeight / 2 + 30,
    width: 200,
    height: 50,
  };
  let rectshop = {
    x: game.gameWidth / 2 - 100,
    y: game.gameHeight / 2 + 90,
    width: 200,
    height: 50,
  };
  var rectSound = {
      x: game.gameWidth-50,
      y: game.gameHeight-50,
      width: 40,
      height: 40,
    };
  var rectMusic = {
      x: game.gameWidth-50,
      y: game.gameHeight-100,
      width: 40,
      height: 40,
  };
  if (game.lives < game.maxLives / 2) {
    let differentP = 1 - game.lives / game.maxLives - 0.25;
    let color = "rgba(120, 0, 0," + differentP + ")";
    context.fillStyle = color;
    let radius = 50 + 200 * differentP;
    fillcircleTriangle(
      game.gameWidth,
      game.gameHeight,
      game.gameWidth,
      game.gameHeight - 50,
      game.gameWidth - 50,
      game.gameHeight,
      radius
    );
    fillcircleTriangle(
      0,
      game.gameHeight,
      0,
      game.gameHeight - 50,
      50,
      game.gameHeight,
      radius
    );
    fillcircleTriangle(0, 0, 0, 50, 50, 0, radius);
    fillcircleTriangle(game.gameWidth, 0, game.gameWidth, 50, 0, 0, radius);
    if (game.lives <= game.maxLives / 4) {
      let differentP2 = 1 - game.lives / (game.maxLives / 2) - 0.5;
      let color = "rgba(120, 0, 0," + differentP2 + ")";
      context.fillStyle = color;
      context.fillRect(0, 0, game.gameWidth, game.gameHeight);
    }
  }
  if (gamestate === GAMESTATE.MENU) {
    context.fillStyle = "rgba(0, 100, 255, 1)";
    context.fillRect(0, 0, game.gameWidth, game.gameHeight);

    context.font = "40px Arial";
    context.fillStyle = "black";
    context.textAlign = "center";

    context.fillText("Square Battle", game.gameWidth / 2, 150);
    context.font = "30px Arial";
    context.fillText("Made by Lawrence Leitgib", game.gameWidth / 2, 200);

    fillRectB(rect, context, regularBorderColor, regularRectColor);
    fillRectB(rect2, context, regularBorderColor, regularRectColor);
    context.fillStyle = "rgba(0, 0, 0, 1)";
    context.font = "18px Arial";
    context.fillText("Start", game.gameWidth / 2, game.gameHeight / 2);
    context.fillText("Game Rule", game.gameWidth / 2, game.gameHeight / 2 + 60);
    //game.spaceShip.draw(context);
  }

  if (gamestate === GAMESTATE.PAUSED) {
    context.fillStyle = "rgba(100, 0, 0, 0.3)";
    context.fillRect(0, 0, game.gameWidth, game.gameHeight);

    context.font = "40px Arial";
    context.fillStyle = "white";
    context.textAlign = "center";

    fillRectB(rect, context, regularBorderColor, regularRectColor);
    fillRectB(rect2, context, regularBorderColor, regularRectColor);
    fillRectB(rectshop, context, regularBorderColor, regularRectColor);
    showGoldCoin(
      context,
      game,
      rectshop.x + rectshop.width - game.goldSize - 5,
      rectshop.y + rectshop.height / 2 - game.goldSize / 2
    );
    context.fillStyle = "rgba(0, 0, 0, 1)";
    context.font = "18px Arial";
    context.fillText("Continue", game.gameWidth / 2, game.gameHeight / 2);
    context.fillText("Game Rule", game.gameWidth / 2, game.gameHeight / 2 + 60);
    context.fillText(
      "Upgrade & Shop",
      game.gameWidth / 2,
      game.gameHeight / 2 + 120
    );
  }
  if (gamestate === GAMESTATE.OPTION) {
    context.fillStyle = "rgba(163, 67, 47, 1)";
    context.fillRect(0, 0, game.gameWidth, game.gameHeight);

    fillRectB(rectBack, context, "rgba(255,223,0, 1)", "rgba(166, 118, 5, 1)");
    context.fillStyle = "rgb(0, 0, 0)";
    context.font = "16px Arial";
    context.textAlign = "center";
    context.fillText("Back", 45, 75);

    context.font = "40px Arial";
    context.fillStyle = "black";
    context.textAlign = "center";
    context.fillText("Game rule", game.gameWidth / 2, game.gameHeight / 6);
    context.textAlign = "left";
    context.font = "20px Arial";
    context.fillText(
      "-Use w,a,s,d or the arrows to move",
      10,
      game.gameHeight / 4 + 100 - 100
    );
    context.fillText(
      "-Use Shift to slow down (like in minecraft)",
      10,
      game.gameHeight / 4 + 130 - 100
    );
    context.fillText(
      "-Click spacebar or left click to lauch missiles",
      10,
      game.gameHeight / 4 + 160 - 100
    );
    context.fillText(
      "-use esc to pause and unpause the game",
      10,
      game.gameHeight / 4 + 190 - 100
    );
    context.fillText(
      "-you lost 3 hp every time an ennemy",
      10,
      game.gameHeight / 4 + 220 - 100
    );
    context.fillText(
      "go passe the bottom of the game",
      10,
      game.gameHeight / 4 + 250 - 100
    );
    context.fillText(
      "-checkpoint every 5 levels",
      10,
      game.gameHeight / 4 + 280 - 100
    );
    context.fillText(
      "-shield only work for enemy bullet (not collision)",
      10,
      game.gameHeight / 4 + 310 - 100
    );
    context.fillText(
      "-you can go in the shop anytime by pausing the game",
      10,
      game.gameHeight / 4 + 340 - 100
    );
  }
  if (gamestate === GAMESTATE.SHOP) {
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

    context.fillStyle = "rgba(51, 26, 2, 1)";
    context.fillRect(0, 0, game.gameWidth, game.gameHeight);
    fillRectB(rectBack, context, "rgba(255,223,0, 1)", "rgba(166, 118, 5, 1)");
    context.fillStyle = "rgb(0, 0, 0)";
    context.font = "16px Arial";
    context.textAlign = "center";
    context.fillText("Back", 45, 75);

    context.fillStyle = regularShopColor;
    fillRectN(shop1, context);
    fillRectN(shop2, context);
    fillRectN(shop3, context);
    fillRectN(shop4, context);
    fillRectN(shop5, context);
    fillRectM(
      buy1,
      context,
      regularBorderColor,
      regularShopColor,
      notEnoughMoneyColor,
      20,
      game
    );
    fillRectM(
      buy2,
      context,
      regularBorderColor,
      regularShopColor,
      notEnoughMoneyColor,
      40,
      game
    );
    fillRectM(
      buy1a,
      context,
      regularBorderColor,
      regularShopColor,
      notEnoughMoneyColor,
      200,
      game
    );
    fillRectM(
      buy2a,
      context,
      regularBorderColor,
      regularShopColor,
      notEnoughMoneyColor,
      400,
      game
    );
    fillRectM(
      buy3,
      context,
      regularBorderColor,
      regularShopColor,
      notEnoughMoneyColor,
      game.addintionalCostNumBullet * game.missles.MissileNumber,
      game
    );
    fillRectM(
      buy4,
      context,
      regularBorderColor,
      regularShopColor,
      notEnoughMoneyColor,
      Math.round(
        game.addintionalCostRegen *
          (game.spaceShip.regenerationPourecent + 0.1) *
          10
      ),
      game
    );
    fillRectM(
      buy5,
      context,
      regularBorderColor,
      regularShopColor,
      notEnoughMoneyColor,
      1000 * Math.pow(5, game.helpers.length),
      game
    );

    context.fillStyle = "rgba(0, 0, 0, 1)";
    context.font = "18px Arial";
    context.textAlign = "left";
    context.fillText(
      "Max HP: " + game.maxLives,
      shop1.x + 5,
      shop1.y + shop1.height / 2 + 5
    );
    context.fillText(
      "Damage: " + Math.round(game.misslesLives * 10) / 10,
      shop2.x + 5,
      shop2.y + shop2.height / 2 + 5
    );
    context.fillText(
      "Number of missles: " + game.missles.MissileNumber,
      shop3.x + 5,
      shop3.y + shop3.height / 2 + 5
    );
    context.fillText(
      "Regeneration: " +
        Math.round(game.spaceShip.regenerationPourecent * 10) / 10 +
        "%",
      shop4.x + 5,
      shop4.y + shop4.height / 2 + 5
    );
    context.fillText(
      "Helpers: " + game.helpers.length,
      shop5.x + 5,
      shop5.y + shop5.height / 2 + 5
    );

    context.font = "13px Arial";
    context.textAlign = "center";
    context.fillText(
      "+1 HP",
      buy1.x + buy1.width / 2,
      buy1.y + buy1.height / 2
    );
    context.fillText(
      "+0.1 Damage",
      buy2.x + buy2.width / 2,
      buy2.y + buy2.height / 2
    );
    context.fillText(
      "+10 HP",
      buy1a.x + buy1a.width / 2,
      buy1a.y + buy1a.height / 2
    );
    context.fillText(
      "+1 Damage",
      buy2a.x + buy2a.width / 2,
      buy2a.y + buy2a.height / 2
    );
    context.fillText(
      "+1 missle",
      buy3.x + buy3.width / 2,
      buy3.y + buy3.height / 2
    );
    context.fillText(
      "+0.1% regen",
      buy4.x + buy4.width / 2,
      buy4.y + buy4.height / 2
    );
    context.fillText(
      "+1 Helper: ",
      buy5.x + buy5.width / 2,
      buy5.y + buy5.height / 2
    );
    context.fillStyle = "rgba(232, 170, 26, 1)";
    context.fillText(
      "cost 20 gold",
      buy1.x + buy1.width / 2,
      buy1.y + buy1.height / 2 + 15
    );
    context.fillText(
      "cost 40 gold",
      buy2.x + buy1.width / 2,
      buy2.y + buy2.height / 2 + 15
    );
    context.fillText(
      "cost 200 gold",
      buy1a.x + buy1a.width / 2,
      buy1a.y + buy1a.height / 2 + 15
    );
    context.fillText(
      "cost 400 gold",
      buy2a.x + buy2a.width / 2,
      buy2a.y + buy2a.height / 2 + 15
    );
    context.fillText(
      "cost " +
        game.addintionalCostNumBullet * game.missles.MissileNumber +
        "gold",
      buy3.x + buy3.width / 2,
      buy3.y + buy3.height / 2 + 15
    );

    context.fillText(
      "cost " +
        (Math.round(
          game.addintionalCostRegen *
            (game.spaceShip.regenerationPourecent + 0.1) *
            10
        ) +
          " gold"),
      buy4.x + buy4.width / 2,
      buy4.y + buy4.height / 2 + 15
    );
    context.fillText(
      "cost " + 1000 * Math.pow(5, game.helpers.length ) + " gold",
      buy5.x + buy5.width / 2,
      buy5.y + buy5.height / 2 + 15
    );
    if (game.missles.MissileNumber >= 10) {
      context.fillStyle = "rgba(107, 107, 107, .7)";
      context.fillRect(
        buy3.x - 5,
        buy3.y - 5,
        buy3.width + 10,
        buy3.height + 10
      );
      context.textAlign = "center";
      context.fillStyle = "rgb(0,0,0)";
      context.font = "20px Arial";
      context.fillText(
        "MAX",
        buy3.x + buy3.width / 2,
        shop3.y + shop3.height / 2 + 10
      );
    }
    context.textAlign = "center";
  }
  if (gamestate === GAMESTATE.LEVELWON) {
    context.rect(0, 0, game.gameWidth, game.gameHeight);
    context.fillStyle = "rgba(0, 255, 0, .5)";
    if (game.currentLevel % 5 === 0) context.fillStyle = "rgba(255, 191, 0, 1)";
    context.fill();

    context.font = "40px Arial";
    context.fillStyle = "black";
    context.textAlign = "center";
    context.fillText(
      "LEVEl " + game.currentLevel + " COMPLETED",
      game.gameWidth / 2,
      200
    );
    context.font = "25px Arial";
    if (game.currentLevel % 5 === 0) {
      context.fillStyle = "red";
      context.fillText(
        "You unlocked a checkpoint at level " + (game.currentLevel + 1),
        game.gameWidth / 2,
        250
      );
    }
    context.fillStyle = "black";
    context.font = "18px Arial";
    if (game.currentLevel % 5 === 0) {
      fillRectB(rect, context, "rgba(120,100,0, 1)", regularRectColor);
      fillRectB(rect2, context, "rgba(120,100,0, 1)", regularRectColor);
      fillRectB(rectshop, context, "rgba(120,100,0, 1)", regularRectColor);
    } else {
      fillRectB(rect, context, regularBorderColor, regularRectColor);
      fillRectB(rect2, context, regularBorderColor, regularRectColor);
      fillRectB(rectshop, context, regularBorderColor, regularRectColor);
    }
    showGoldCoin(
      context,
      game,
      rectshop.x + rectshop.width - game.goldSize - 5,
      rectshop.y + rectshop.height / 2 - game.goldSize / 2
    );

    context.fillStyle = "rgba(0, 0, 0, 1)";
    context.font = "18px Arial";
    context.fillText("Continue", game.gameWidth / 2, game.gameHeight / 2);
    context.fillText("Game Rule", game.gameWidth / 2, game.gameHeight / 2 + 60);
    context.fillText(
      "Upgrade & Shop",
      game.gameWidth / 2,
      game.gameHeight / 2 + 120
    );
  }
  if (gamestate === GAMESTATE.CHECKPOINT) {
    context.rect(0, 0, game.gameWidth, game.gameHeight);
    context.fillStyle = "rgba(97, 0, 171, .5)";
    context.fill();

    context.font = "40px Arial";
    context.fillStyle = "black";
    context.textAlign = "center";
    context.fillText("YOU DIED", game.gameWidth / 2, 150);
    context.font = "30px Arial";
    context.fillText(
      "You have a checkpoint at level: " + (game.checkPointLevel + 1),
      game.gameWidth / 2,
      220
    );
    fillRectB(rect, context, regularBorderColor, regularRectColor);
    fillRectB(rect2, context, regularBorderColor, regularRectColor);
    fillRectB(rectshop, context, regularBorderColor, regularRectColor);
    context.fillStyle = "rgba(0, 0, 0, 1)";
    context.font = "18px Arial";
    context.fillText("Continue", game.gameWidth / 2, game.gameHeight / 2);
    context.fillText("Game Rule", game.gameWidth / 2, game.gameHeight / 2 + 60);
    context.fillText(
      "Upgrade & Shop",
      game.gameWidth / 2,
      game.gameHeight / 2 + 120
    );
    showGoldCoin(
      context,
      game,
      rectshop.x + rectshop.width - game.goldSize - 5,
      rectshop.y + rectshop.height / 2 - game.goldSize / 2
    );
  }
  if(gamestate !== GAMESTATE.RUNNING){
      context.fillStyle = "rgba(184, 107, 31, 1)";
      borderOfRect(rectSound,context);
      borderOfRect(rectMusic,context);
      context.fillStyle = "rgba(61, 31, 1, 1)";
      fillRectN(rectSound,context);
      fillRectN(rectMusic,context);
      context.drawImage(soundImage, rectSound.x, rectSound.y, rectSound.width, rectSound.height);
      context.drawImage(musicImage, rectMusic.x, rectMusic.y, rectMusic.width, rectMusic.height);

      if(!game.soundOn){
        context.fillStyle = "rgba(209, 33, 33, 1)";
        var lengthT=Math.sqrt(Math.pow(rectSound.height,2)+Math.pow(rectSound.width,2))
        drawRectRotated(context,rectSound.x , rectSound.y+rectSound.height, 10,lengthT , 3*Math.PI/4);

      }
      if(!game.musicOn){
        context.fillStyle = "rgba(209, 33, 33, 1)";
        var lengthT=Math.sqrt(Math.pow(rectMusic.height,2)+Math.pow(rectMusic.width,2))
        drawRectRotated(context,rectMusic.x , rectMusic.y+rectMusic.height, 10,lengthT , 3*Math.PI/4);

      }
    }
  /*






  */
  if (gamestate === GAMESTATE.GAMEOVER) {
    context.rect(0, 0, game.gameWidth, game.gameHeight);
    context.fillStyle = "rgba(100, 100, 100, .4)";
    context.fill();

    context.font = "40px Arial";
    context.fillStyle = "black";
    context.textAlign = "center";
    context.fillText("GAME OVER", game.gameWidth / 2, game.gameHeight / 2);
    context.font = "18px Arial";
    context.fillText(
      "touch to the restart the game",
      game.gameWidth / 2,
      game.gameHeight / 2 + 50
    );
  }
  if (gamestate === GAMESTATE.GAMEWON) {
    context.rect(0, 0, game.gameWidth, game.gameHeight);
    context.fillStyle = "rgba(255,223,0, .8)";
    context.fill();
    context.font = "40px Arial";
    context.fillStyle = "black";
    context.textAlign = "center";
    context.fillText(
      "YOU WON THE GAME",
      game.gameWidth / 2,
      game.gameHeight / 2
    );
    context.font = "18px Arial";
    context.fillText(
      "Touch to the restart the game",
      game.gameWidth / 2,
      game.gameHeight / 2 + 50
    );
  }
}
