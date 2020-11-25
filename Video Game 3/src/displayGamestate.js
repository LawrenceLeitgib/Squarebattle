function displayGamestate(context, gamestate, GAMESTATE, game) {
  if (gamestate === GAMESTATE.MENU) {
    context.rect(0, 0, game.gameWidth, game.gameHeight);
    context.fillStyle = "rgba(0, 100, 255, 1)";
    context.fill();

    context.font = "40px Arial";
    context.fillStyle = "black";
    context.textAlign = "center";
    /*
    context.fillText(
      "I still need to find a name",
      game.gameWidth / 2,
      game.gameHeight / 4
    );
    */
    var rect = {
      x: game.gameWidth / 2 - 100,
      y: game.gameHeight / 2 - 30,
      width: 200,
      height: 50
    };

    var rect2 = {
      x: game.gameWidth / 2 - 100,
      y: game.gameHeight / 2 + 30,
      width: 200,
      height: 50
    };

    context.fillStyle = "rgba(0, 255, 255, 1)";
    context.fillRect(rect.x, rect.y, rect.width, rect.height);
    context.fillRect(rect2.x, rect2.y, rect2.width, rect2.height);
    context.fillStyle = "rgba(0, 0, 0, 1)";
    context.font = "18px Arial";
    context.fillText("Start", game.gameWidth / 2, game.gameHeight / 2);
    context.fillText("Game Rule", game.gameWidth / 2, game.gameHeight / 2 + 60);

    game.spaceShip.draw(context);
  }
  if (gamestate === GAMESTATE.PAUSED) {
    context.rect(0, 0, game.gameWidth, game.gameHeight);
    context.fillStyle = "rgba(100, 0, 0, 0.5)";
    context.fill();

    context.font = "40px Arial";
    context.fillStyle = "white";
    context.textAlign = "center";
    /*
    context.fillText(
      "The Game is Paused",
      game.gameWidth / 2,
      game.gameHeight / 4
    );
    */
    rect = {
      x: game.gameWidth / 2 - 100,
      y: game.gameHeight / 2 - 30,
      width: 200,
      height: 50
    };

    rect2 = {
      x: game.gameWidth / 2 - 100,
      y: game.gameHeight / 2 + 30,
      width: 200,
      height: 50
    };
    let rectshop = {
      x: game.gameWidth / 2 - 100,
      y: game.gameHeight / 2 + 90,
      width: 200,
      height: 50
    };

    context.fillStyle = "rgba(0, 255, 255, 1)";
    context.fillRect(rect.x, rect.y, rect.width, rect.height);
    context.fillRect(rect2.x, rect2.y, rect2.width, rect2.height);
    context.fillRect(rectshop.x, rectshop.y, rectshop.width, rectshop.height);
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
    context.rect(0, 0, game.gameWidth, game.gameHeight);
    context.fillStyle = "rgba(100, 0, 0, 0.5)";
    context.fill();

    let rect3 = {
      x: 10,
      y: 10,
      width: 70,
      height: 20
    };
    context.fillStyle = "rgba(166, 118, 5, 1)";
    context.fillRect(rect3.x, rect3.y, rect3.width, rect3.height);
    context.fillStyle = "rgb(0, 0, 0)";
    context.font = "16px Arial";
    context.fillText("Back", 45, 25);

    context.font = "40px Arial";
    context.fillStyle = "white";
    context.textAlign = "center";
    context.fillText("Game rule", game.gameWidth / 2, game.gameHeight / 4);
    context.font = "20px Arial";
    context.fillText(
      "Use w,a,s,d or the arrows to move",
      game.gameWidth / 2,
      game.gameHeight / 4 + 100
    );
    context.fillText(
      "Use Shift to slow down (like in minecraft)",
      game.gameWidth / 2,
      game.gameHeight / 4 + 130
    );
    context.fillText(
      "Click spacebar or left click to lauch missiles",
      game.gameWidth / 2,
      game.gameHeight / 4 + 160
    );
    context.fillText(
      "use esc to pause and unpause the game",
      game.gameWidth / 2,
      game.gameHeight / 4 + 190
    );
    context.fillText(
      "you lost 3 hp every time an ennemy",
      game.gameWidth / 2,
      game.gameHeight / 4 + 220
    );
    context.fillText(
      "go passe the bottom of the game",
      game.gameWidth / 2,
      game.gameHeight / 4 + 250
    );
    context.fillText(
      "checkpoint every 5 levels",
      game.gameWidth / 2,
      game.gameHeight / 4 + 280
    );
    context.fillText(
      "shield only work for enemy bullet (not collision)",
      game.gameWidth / 2,
      game.gameHeight / 4 + 310
    );
    context.fillText(
      "you can go in the shop anytime to buy stuff",
      game.gameWidth / 2,
      game.gameHeight / 4 + 340
    );
  }
  if (gamestate === GAMESTATE.SHOP) {
    let shop1 = {
      x: 50,
      y: 100,
      width: 200,
      height: 40
    };
    let shop2 = {
      x: 50,
      y: 150,
      width: 200,
      height: 40
    };
    let shop3 = {
      x: 50,
      y: 200,
      width: 200,
      height: 40
    };
    let shop4 = {
      x: 50,
      y: 250,
      width: 200,
      height: 40
    };
    let shop5 = {
      x: 50,
      y: 300,
      width: 200,
      height: 40
    };
    let buy1 = {
      x: shop1.x + shop1.width + 10,
      y: 100,
      width: 100,
      height: 40
    };

    let buy2 = {
      x: shop2.x + shop2.width + 10,
      y: 150,
      width: 100,
      height: 40
    };
    let buy1a = {
      x: buy1.x + buy1.width + 10,
      y: 100,
      width: 100,
      height: 40
    };
    let buy2a = {
      x: buy2.x + buy2.width + 10,
      y: 150,
      width: 100,
      height: 40
    };
    let buy3 = {
      x: shop3.x + shop3.width + 10,
      y: 200,
      width: 100,
      height: 40
    };
    let buy4 = {
      x: shop4.x + shop4.width + 10,
      y: 250,
      width: 100,
      height: 40
    };
    let buy5 = {
      x: shop5.x + shop5.width + 10,
      y: 300,
      width: 100,
      height: 40
    };
    let rect3 = {
      x: 10,
      y: 10,
      width: 70,
      height: 20
    };

    context.rect(0, 0, game.gameWidth, game.gameHeight);
    context.fillStyle = "rgba(51, 26, 2, 1)";
    context.fill();
    context.fillStyle = "rgba(166, 118, 5, 1)";

    context.fillRect(rect3.x, rect3.y, rect3.width, rect3.height);
    context.fillStyle = "rgb(0, 0, 0)";
    context.font = "16px Arial";
    context.fillText("Back", 45, 25);

    context.fillStyle = "rgba(56, 125, 118, 1)";
    context.fillRect(shop1.x, shop1.y, shop1.width, shop1.height);
    context.fillRect(shop2.x, shop2.y, shop2.width, shop2.height);
    context.fillRect(shop3.x, shop3.y, shop3.width, shop3.height);
    context.fillRect(shop4.x, shop4.y, shop4.width, shop4.height);
    context.fillRect(shop5.x, shop5.y, shop5.width, shop5.height);

    context.fillRect(buy1.x, buy1.y, buy1.width, buy1.height);
    context.fillRect(buy2.x, buy2.y, buy2.width, buy2.height);
    context.fillRect(buy1a.x, buy1a.y, buy1a.width, buy1a.height);
    context.fillRect(buy2a.x, buy2a.y, buy2a.width, buy2a.height);
    context.fillRect(buy3.x, buy3.y, buy3.width, buy3.height);
    context.fillRect(buy4.x, buy4.y, buy4.width, buy4.height);
    context.fillRect(buy5.x, buy5.y, buy5.width, buy5.height);

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
      "Helper: " + 0,
      shop5.x + 5,
      shop5.y + shop5.height / 2 + 5
    );

    context.font = "13px Arial";
    context.textAlign = "center";
    context.fillText(
      "+1 HP: ",
      buy1.x + buy1.width / 2,
      buy1.y + buy1.height / 2
    );
    context.fillText(
      "+0.1 Damage ",
      buy2.x + buy2.width / 2,
      buy2.y + buy2.height / 2
    );
    context.fillText(
      "+10 HP: ",
      buy1a.x + buy1a.width / 2,
      buy1a.y + buy1a.height / 2
    );
    context.fillText(
      "+1 Damage ",
      buy2a.x + buy2a.width / 2,
      buy2a.y + buy2a.height / 2
    );
    context.fillText(
      "+1 missle",
      buy3.x + buy3.width / 2,
      buy3.y + buy3.height / 2
    );
    context.fillText(
      "+0.1% regen: ",
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
      "cost: 20",
      buy1.x + buy1.width / 2,
      buy1.y + buy1.height / 2 + 15
    );
    context.fillText(
      "cost:40 ",
      buy2.x + buy1.width / 2,
      buy2.y + buy2.height / 2 + 15
    );
    context.fillText(
      "cost: 200",
      buy1a.x + buy1a.width / 2,
      buy1a.y + buy1a.height / 2 + 15
    );
    context.fillText(
      "cost:400 ",
      buy2a.x + buy2a.width / 2,
      buy2a.y + buy2a.height / 2 + 15
    );
    context.fillText(
      "cost: " + game.addintionalCostNumBullet * game.missles.MissileNumber,
      buy3.x + buy3.width / 2,
      buy3.y + buy3.height / 2 + 15
    );
    context.fillText(
      "cost: " + game.addintionalCostRegen *(game.spaceShip.regenerationPourecent+0.1)*10,
      buy4.x + buy4.width / 2,
      buy4.y + buy4.height / 2 + 15
    );
    context.fillText(
      "cost: 3000",
      buy5.x + buy5.width / 2,
      buy5.y + buy5.height / 2 + 15
    );
    context.textAlign = "center";
  }
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
      "Press the spacebar to the restart the game",
      game.gameWidth / 2,
      game.gameHeight / 2 + 50
    );
  }
  if (gamestate === GAMESTATE.GAMEWON) {
    context.rect(0, 0, game.gameWidth, game.gameHeight);
    context.fillStyle = "rgba(100, 100, 100, .5)";
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
      "Press enter to the restart the game",
      game.gameWidth / 2,
      game.gameHeight / 2 + 50
    );
  }
  if (gamestate === GAMESTATE.LEVELWON) {
    context.rect(0, 0, game.gameWidth, game.gameHeight);
    context.fillStyle = "rgba(0, 255, 0, .5)";
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
      context.fillText(
        "You unlocked a checkpoint at level " + (game.currentLevel + 1),
        game.gameWidth / 2,
        250
      );
    }
    context.font = "18px Arial";
    rect = {
      x: game.gameWidth / 2 - 100,
      y: game.gameHeight / 2 - 30,
      width: 200,
      height: 50
    };

    rect2 = {
      x: game.gameWidth / 2 - 100,
      y: game.gameHeight / 2 + 30,
      width: 200,
      height: 50
    };
    let rectshop = {
      x: game.gameWidth / 2 - 100,
      y: game.gameHeight / 2 + 90,
      width: 200,
      height: 50
    };

    context.fillStyle = "rgba(0, 255, 255, 1)";
    context.fillRect(rect.x, rect.y, rect.width, rect.height);
    context.fillRect(rect2.x, rect2.y, rect2.width, rect2.height);
    context.fillRect(rectshop.x, rectshop.y, rectshop.width, rectshop.height);
    context.fillStyle = "rgba(0, 0, 0, 1)";
    context.font = "18px Arial";
    context.fillText("Continue", game.gameWidth / 2, game.gameHeight / 2);
    context.fillText("Game Rule", game.gameWidth / 2, game.gameHeight / 2 + 60);
    context.fillText(
      "Upgrade & Shop",
      game.gameWidth / 2,
      game.gameHeight / 2 + 120
    );
    context.fillText(
      'or Press the "c" to the continue the game',
      game.gameWidth / 2,
      game.gameHeight / 2 + 250
    );
  }
  if (gamestate === GAMESTATE.CHECKPOINT) {
    context.rect(0, 0, game.gameWidth, game.gameHeight);
    context.fillStyle = "rgba(0, 255, 0, .5)";
    context.fill();

    context.font = "30px Arial";
    context.fillStyle = "black";
    context.textAlign = "center";
    context.fillText(
      "You have a checkpoint at level: " + (game.checkPointLevel + 1),
      game.gameWidth / 2,
      150
    );
    context.font = "18px Arial";
    rect = {
      x: game.gameWidth / 2 - 100,
      y: game.gameHeight / 2 - 30,
      width: 200,
      height: 50
    };

    rect2 = {
      x: game.gameWidth / 2 - 100,
      y: game.gameHeight / 2 + 30,
      width: 200,
      height: 50
    };
    let rectshop = {
      x: game.gameWidth / 2 - 100,
      y: game.gameHeight / 2 + 90,
      width: 200,
      height: 50
    };

    context.fillStyle = "rgba(0, 255, 255, 1)";
    context.fillRect(rect.x, rect.y, rect.width, rect.height);
    context.fillRect(rect2.x, rect2.y, rect2.width, rect2.height);
    context.fillRect(rectshop.x, rectshop.y, rectshop.width, rectshop.height);
    context.fillStyle = "rgba(0, 0, 0, 1)";
    context.font = "18px Arial";
    context.fillText("Continue", game.gameWidth / 2, game.gameHeight / 2);
    context.fillText("Game Rule", game.gameWidth / 2, game.gameHeight / 2 + 60);
    context.fillText(
      "Upgrade & Shop",
      game.gameWidth / 2,
      game.gameHeight / 2 + 120
    );
    context.fillText(
      'or Press the "c" to the continue the game',
      game.gameWidth / 2,
      game.gameHeight - 100
    );
  }
}
