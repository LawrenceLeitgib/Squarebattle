function drawSpaceShipCanon(game,spaceShip,context)
{
  context.fillStyle = "rgb(115, 103, 79)";
  if (game.missles.MissileNumber == 1) {
    drawRectRotated(
      context,
      spaceShip.position.x + spaceShip.width / 2,
      spaceShip.position.y + spaceShip.height / 2,
      8,
      spaceShip.width * 0.8,
      spaceShip.angle2
    );
    let pos = getRectRotated(
      context,
      spaceShip.position.x + spaceShip.width / 2,
      spaceShip.position.y + spaceShip.height / 2,
      8,
      spaceShip.width * 0.8 - 1,
      spaceShip.angle2
    );
    let x4 = pos[0];
    let y4 = pos[1];
    drawRectRotated(context, x4, y4, 8 * 1.5, spaceShip.width / 10, spaceShip.angle2);
  }
  /*



  */
  if (game.missles.MissileNumber == 2){
    drawRectRotated(
      context,
      spaceShip.position.x + spaceShip.width / 2-game.missles.addingMissileNumber,
      spaceShip.position.y + spaceShip.height / 2,
      8,
      spaceShip.width * 0.8,
      spaceShip.angle2
    );
    let pos = getRectRotated(
      context,
      spaceShip.position.x + spaceShip.width / 2-game.missles.addingMissileNumber,
      spaceShip.position.y + spaceShip.height / 2,
      8,
      spaceShip.width * 0.8 - 1,
      spaceShip.angle2
    );
    let x4 = pos[0];
    let y4 = pos[1];
    drawRectRotated(context, x4, y4, 8 * 1.5, spaceShip.width / 10, spaceShip.angle2);


    drawRectRotated(
      context,
      spaceShip.position.x + spaceShip.width / 2+game.missles.addingMissileNumber,
      spaceShip.position.y + spaceShip.height / 2,
      8,
      spaceShip.width * 0.8,
      spaceShip.angle2
    );
    pos = getRectRotated(
      context,
      spaceShip.position.x + spaceShip.width / 2+game.missles.addingMissileNumber,
      spaceShip.position.y + spaceShip.height / 2,
      8,
      spaceShip.width * 0.8 - 1,
      spaceShip.angle2
    );
    x4 = pos[0];
    y4 = pos[1];
    drawRectRotated(context, x4, y4, 8 * 1.5, spaceShip.width / 10, spaceShip.angle2);

  }
  /*




  */
  if (game.missles.MissileNumber == 3){
    drawRectRotated(
      context,
      spaceShip.position.x + spaceShip.width / 2-game.missles.addingMissileNumber2,
      spaceShip.position.y + spaceShip.height / 2,
      8,
      spaceShip.width * 0.8,
      spaceShip.angle2
    );
    let pos = getRectRotated(
      context,
      spaceShip.position.x + spaceShip.width / 2-game.missles.addingMissileNumber2,
      spaceShip.position.y + spaceShip.height / 2,
      8,
      spaceShip.width * 0.8 - 1,
      spaceShip.angle2
    );
    let x4 = pos[0];
    let y4 = pos[1];
    drawRectRotated(context, x4, y4, 8 * 1.5, spaceShip.width / 10, spaceShip.angle2);



    drawRectRotated(
      context,
      spaceShip.position.x + spaceShip.width / 2,
      spaceShip.position.y + spaceShip.height / 2,
      8,
      spaceShip.width * 0.8,
      spaceShip.angle2
    );
    pos = getRectRotated(
      context,
      spaceShip.position.x + spaceShip.width / 2,
      spaceShip.position.y + spaceShip.height / 2,
      8,
      spaceShip.width * 0.8 - 1,
      spaceShip.angle2
    );
    x4 = pos[0];
    y4 = pos[1];
    drawRectRotated(context, x4, y4, 8 * 1.5, spaceShip.width / 10, spaceShip.angle2);

    drawRectRotated(
      context,
      spaceShip.position.x + spaceShip.width / 2+game.missles.addingMissileNumber2,
      spaceShip.position.y + spaceShip.height / 2,
      8,
      spaceShip.width * 0.8,
      spaceShip.angle2
    );
    pos = getRectRotated(
      context,
      spaceShip.position.x + spaceShip.width / 2+game.missles.addingMissileNumber2,
      spaceShip.position.y + spaceShip.height / 2,
      8,
      spaceShip.width * 0.8 - 1,
      spaceShip.angle2
    );
    x4 = pos[0];
    y4 = pos[1];
    drawRectRotated(context, x4, y4, 8 * 1.5, spaceShip.width / 10, spaceShip.angle2);

  }

  /*



  */
  if (game.missles.MissileNumber == 4){
    drawRectRotated(
      context,
      spaceShip.position.x + spaceShip.width / 2-game.missles.addingMissileNumber2,
      spaceShip.position.y + spaceShip.height / 2,
      8,
      spaceShip.width * 0.8,
      spaceShip.angle2
    );
    let pos = getRectRotated(
      context,
      spaceShip.position.x + spaceShip.width / 2-game.missles.addingMissileNumber2,
      spaceShip.position.y + spaceShip.height / 2,
      8,
      spaceShip.width * 0.8 - 1,
      spaceShip.angle2
    );
    let x4 = pos[0];
    let y4 = pos[1];
    drawRectRotated(context, x4, y4, 8 * 1.5, spaceShip.width / 10, spaceShip.angle2);

    drawRectRotated(
      context,
      spaceShip.position.x + spaceShip.width / 2-game.missles.addingMissileNumber,
      spaceShip.position.y + spaceShip.height / 2,
      8,
      spaceShip.width * 0.8,
      spaceShip.angle2
    );
    pos = getRectRotated(
      context,
      spaceShip.position.x + spaceShip.width / 2-game.missles.addingMissileNumber,
      spaceShip.position.y + spaceShip.height / 2,
      8,
      spaceShip.width * 0.8 - 1,
      spaceShip.angle2
    );
    x4 = pos[0];
    y4 = pos[1];
    drawRectRotated(context, x4, y4, 8 * 1.5, spaceShip.width / 10, spaceShip.angle2);


    drawRectRotated(
      context,
      spaceShip.position.x + spaceShip.width / 2+game.missles.addingMissileNumber,
      spaceShip.position.y + spaceShip.height / 2,
      8,
      spaceShip.width * 0.8,
      spaceShip.angle2
    );
    pos = getRectRotated(
      context,
      spaceShip.position.x + spaceShip.width / 2+game.missles.addingMissileNumber,
      spaceShip.position.y + spaceShip.height / 2,
      8,
      spaceShip.width * 0.8 - 1,
      spaceShip.angle2
    );
    x4 = pos[0];
    y4 = pos[1];
    drawRectRotated(context, x4, y4, 8 * 1.5, spaceShip.width / 10, spaceShip.angle2);





    drawRectRotated(
      context,
      spaceShip.position.x + spaceShip.width / 2+game.missles.addingMissileNumber2,
      spaceShip.position.y + spaceShip.height / 2,
      8,
      spaceShip.width * 0.8,
      spaceShip.angle2
    );
    pos = getRectRotated(
      context,
      spaceShip.position.x + spaceShip.width / 2+game.missles.addingMissileNumber2,
      spaceShip.position.y + spaceShip.height / 2,
      8,
      spaceShip.width * 0.8 - 1,
      spaceShip.angle2
    );
    x4 = pos[0];
    y4 = pos[1];
    drawRectRotated(context, x4, y4, 8 * 1.5, spaceShip.width / 10, spaceShip.angle2);

  }

  /*



  */
  if (game.missles.MissileNumber >= 5){
    drawRectRotated(
      context,
      spaceShip.position.x + spaceShip.width / 2-game.missles.addingMissileNumber2,
      spaceShip.position.y + spaceShip.height / 2,
      8,
      spaceShip.width * 0.8,
      spaceShip.angle2
    );
    let pos = getRectRotated(
      context,
      spaceShip.position.x + spaceShip.width / 2-game.missles.addingMissileNumber2,
      spaceShip.position.y + spaceShip.height / 2,
      8,
      spaceShip.width * 0.8 - 1,
      spaceShip.angle2
    );
    let x4 = pos[0];
    let y4 = pos[1];
    drawRectRotated(context, x4, y4, 8 * 1.5, spaceShip.width / 10, spaceShip.angle2);

    drawRectRotated(
      context,
      spaceShip.position.x + spaceShip.width / 2-game.missles.addingMissileNumber,
      spaceShip.position.y + spaceShip.height / 2,
      8,
      spaceShip.width * 0.8,
      spaceShip.angle2
    );
    pos = getRectRotated(
      context,
      spaceShip.position.x + spaceShip.width / 2-game.missles.addingMissileNumber,
      spaceShip.position.y + spaceShip.height / 2,
      8,
      spaceShip.width * 0.8 - 1,
      spaceShip.angle2
    );
    x4 = pos[0];
    y4 = pos[1];
    drawRectRotated(context, x4, y4, 8 * 1.5, spaceShip.width / 10, spaceShip.angle2);

    drawRectRotated(
      context,
      spaceShip.position.x + spaceShip.width / 2,
      spaceShip.position.y + spaceShip.height / 2,
      8,
      spaceShip.width * 0.8,
      spaceShip.angle2
    );
    pos = getRectRotated(
      context,
      spaceShip.position.x + spaceShip.width / 2,
      spaceShip.position.y + spaceShip.height / 2,
      8,
      spaceShip.width * 0.8 - 1,
      spaceShip.angle2
    );
    x4 = pos[0];
    y4 = pos[1];
    drawRectRotated(context, x4, y4, 8 * 1.5, spaceShip.width / 10, spaceShip.angle2);
    drawRectRotated(
      context,
      spaceShip.position.x + spaceShip.width / 2+game.missles.addingMissileNumber,
      spaceShip.position.y + spaceShip.height / 2,
      8,
      spaceShip.width * 0.8,
      spaceShip.angle2
    );
    pos = getRectRotated(
      context,
      spaceShip.position.x + spaceShip.width / 2+game.missles.addingMissileNumber,
      spaceShip.position.y + spaceShip.height / 2,
      8,
      spaceShip.width * 0.8 - 1,
      spaceShip.angle2
    );
    x4 = pos[0];
    y4 = pos[1];
    drawRectRotated(context, x4, y4, 8 * 1.5, spaceShip.width / 10, spaceShip.angle2);





    drawRectRotated(
      context,
      spaceShip.position.x + spaceShip.width / 2+game.missles.addingMissileNumber2,
      spaceShip.position.y + spaceShip.height / 2,
      8,
      spaceShip.width * 0.8,
      spaceShip.angle2
    );
    pos = getRectRotated(
      context,
      spaceShip.position.x + spaceShip.width / 2+game.missles.addingMissileNumber2,
      spaceShip.position.y + spaceShip.height / 2,
      8,
      spaceShip.width * 0.8 - 1,
      spaceShip.angle2
    );
    x4 = pos[0];
    y4 = pos[1];
    drawRectRotated(context, x4, y4, 8 * 1.5, spaceShip.width / 10, spaceShip.angle2);

  }
}
