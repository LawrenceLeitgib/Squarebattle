function detectionCollision(missle, gameObject) {
  let leftOfMissle = missle.position.x;
  let rightOfMissle = missle.position.x + missle.width;
  let topOfMissle = missle.position.y;
  let bottomOfMissle = missle.position.y + missle.height;

  let rightOfObecject = gameObject.position.x + gameObject.width;
  let topOfObject = gameObject.position.y;
  let bottomOfObject = gameObject.position.y + gameObject.height;
  let leftOfObject = gameObject.position.x;

  if (
    leftOfMissle <= rightOfObecject &&
    rightOfMissle >= leftOfObject &&
    topOfMissle <= bottomOfObject &&
    bottomOfMissle >= topOfObject
  ) {
    return true;
  } else {
    return false;
  }
}
function detectionCollisionEnemy(enemy, spaceShip) {
  let distance = 40;
  let r = Math.cos(Math.PI / 4);
  let leftOfenemy = enemy.position.x;
  let rightOfenemy = enemy.position.x + enemy.width;
  let topOfenemy = enemy.position.y;
  let bottomOfenemy = enemy.position.y + enemy.height;

  let rightOfspaceShip = spaceShip.position.x + spaceShip.width;
  let topOfspaceShip = spaceShip.position.y;
  let bottomOfspaceShip = spaceShip.position.y + spaceShip.height;
  let leftOfspaceShip = spaceShip.position.x;
  //let middleOfTopOfspaceShip = spaceShip.position.x + spaceShip.width / 2;
  //let middleOfLeftOfspaceShip = spaceShip.position.y + spaceShip.height / 2;

  let bottom = false;
  let top = false;
  let right = false;
  let left = false;

  if (
    topOfspaceShip <= bottomOfenemy &&
    topOfspaceShip >=
      bottomOfenemy -
        enemy.height /
          2 /* &&
    middleOfTopOfspaceShip >= leftOfenemy &&
    middleOfTopOfspaceShip <= rightOfenemy */
  ) {
    top = true;
  }
  if (
    bottomOfspaceShip >= topOfenemy &&
    bottomOfspaceShip <=
      topOfenemy +
        enemy.height /
          2 /* &&
    middleOfTopOfspaceShip >= leftOfenemy &&
    middleOfTopOfspaceShip <= rightOfenemy */
  ) {
    bottom = true;
  }
  if (
    leftOfspaceShip <= rightOfenemy &&
    leftOfspaceShip >=
      rightOfenemy -
        enemy.width /
          2 /*&&
    middleOfLeftOfspaceShip <= bottomOfenemy &&
    middleOfLeftOfspaceShip >= topOfenemy */
  ) {
    left = true;
  }
  if (
    rightOfspaceShip >= leftOfenemy &&
    rightOfspaceShip <=
      leftOfenemy +
        enemy.width /
          2 /* &&
    middleOfLeftOfspaceShip <= bottomOfenemy &&
    middleOfLeftOfspaceShip >= topOfenemy */
  ) {
    right = true;
  }

  if (top && left) {
    spaceShip.position.x += r * distance;
    spaceShip.position.y += r * distance;
  } else if (top && right) {
    spaceShip.position.x -= r * distance;
    spaceShip.position.y += r * distance;
  } else if (bottom && left) {
    spaceShip.position.x += r * distance;
    spaceShip.position.y -= r * distance;
  } else if (bottom && right) {
    spaceShip.position.x -= r * distance;
    spaceShip.position.y -= r * distance;
  } else if (top) spaceShip.position.y += distance;
  else if (bottom) spaceShip.position.y -= distance;
  else if (right) spaceShip.position.x -= distance;
  else if (left) spaceShip.position.x += distance;
}

function detectionCollisionLaszer(laszer, gameObject) {
  let leftOfMissle = laszer.x;
  let rightOfMissle = laszer.x + laszer.width;
  let topOfMissle = laszer.y;
  let bottomOfMissle = laszer.y + laszer.height;

  let rightOfObecject = gameObject.position.x + gameObject.width;
  let topOfObject = gameObject.position.y;
  let bottomOfObject = gameObject.position.y + gameObject.height;
  let leftOfObject = gameObject.position.x;

  if (
    leftOfMissle <= rightOfObecject &&
    rightOfMissle >= leftOfObject &&
    topOfMissle <= bottomOfObject &&
    bottomOfMissle >= topOfObject
  ) {
    return true;
  } else {
    return false;
  }
}
function yPositionWithXY(x1, y1, x2, y2, x) {
  let slop1 = (y2 - y1) / (x2 - x1);
  let y = slop1 * (x - x1) + y1;
  return y;
}
function detectionSideWay(laszer, gameObject, angle,enemy) {
  let x1 = laszer.x - (laszer.width * Math.cos(angle)) / 2;
  let y1 = laszer.y + (laszer.width * Math.sin(angle)) / 2;
  let x2 = x1 + laszer.width * Math.cos(angle);
  let y2 = y1 - laszer.width * Math.sin(angle);
  let x3 = x2 + laszer.height * Math.sin(angle);
  let y3 = y2 + laszer.height * Math.cos(angle);
  let x4 = x3 - laszer.width * Math.cos(angle);
  let y4 = y3 + laszer.width * Math.sin(angle);
  /*
  let x=gameObject.position.x
  let slop1 = (y2-y1)/(x2-x1)
  let yCord1 = slpo1*(x-x1)+y1
  let slop2 = (y3-y2)/(x3-x2)
  let yCord2 = slpo2*(x-x2)+y2
  let slop2 = (y4-y3)/(x4-x3)
  let yCord2 = slpo3*(x-x3)+y3
  let slop2 = (y1-y4)/(x1-x4)
  let yCord2 = slpo4*(x-x4)+y4
  */
  let line1 = false;
  let line2 = false;
  let line3 = false;
  let line4 = false;

  if (x3 > enemy.position.x && y3 > enemy.position.y) {
    line1 =
      yPositionWithXY(
        x1,
        y1,
        x2,
        y2,
        gameObject.position.x + gameObject.width
      ) <=
      gameObject.position.y + gameObject.height;
    line2 =
      yPositionWithXY(x2, y2, x3, y3, gameObject.position.x) <=
      gameObject.position.y + gameObject.height;
    line3 =
      yPositionWithXY(x3, y3, x4, y4, gameObject.position.x) >=
      gameObject.position.y;
    line4 =
      yPositionWithXY(
        x1,
        y1,
        x4,
        y4,
        gameObject.position.x + gameObject.width
      ) >= gameObject.position.y;
  }
  if (x3 <= enemy.position.x && y3 >= enemy.position.y) {
    line1 =
      yPositionWithXY(x1, y1, x2, y2, gameObject.position.x) <=
      gameObject.position.y + gameObject.height;
    line2 =
      yPositionWithXY(x2, y2, x3, y3, gameObject.position.x) >=
      gameObject.position.y;
    line3 =
      yPositionWithXY(
        x3,
        y3,
        x4,
        y4,
        gameObject.position.x + gameObject.width
      ) >= gameObject.position.y;
    line4 =
      yPositionWithXY(
        x1,
        y1,
        x4,
        y4,
        gameObject.position.x + gameObject.width
      ) <=
      gameObject.position.y + +gameObject.height;
  }
  if (x3 < enemy.position.x && y3 < enemy.position.y) {
    line1 =
      yPositionWithXY(x1, y1, x2, y2, gameObject.position.x) >=
      gameObject.position.y + gameObject.height;
    line2 =
      yPositionWithXY(
        x2,
        y2,
        x3,
        y3,
        gameObject.position.x + gameObject.width
      ) >= gameObject.position.y;
    line3 =
      yPositionWithXY(
        x3,
        y3,
        x4,
        y4,
        gameObject.position.x + gameObject.width
      ) <= gameObject.position.y;
    line4 =
      yPositionWithXY(x1, y1, x4, y4, gameObject.position.x) <=
      gameObject.position.y + gameObject.height;
  }
  if (x3 > enemy.position.x && y3 < enemy.position.y) {
    line1 =
      yPositionWithXY(
        x1,
        y1,
        x2,
        y2,
        gameObject.position.x + gameObject.width
      ) >= gameObject.position.y;
    line2 =
      yPositionWithXY(
        x2,
        y2,
        x3,
        y3,
        gameObject.position.x + gameObject.width
      ) <=
      gameObject.position.y + gameObject.height;
    line3 =
      yPositionWithXY(
        x3,
        y3,
        x4,
        y4,
        gameObject.position.x + gameObject.width
      ) <= gameObject.position.y;
    line4 =
      yPositionWithXY(x1, y1, x4, y4, gameObject.position.x) >=
      gameObject.position.y;

  }

  if (line1 && line2 && line3 &&line4) {
    return true;
  } else {
    return false;
  }
}
