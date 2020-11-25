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
