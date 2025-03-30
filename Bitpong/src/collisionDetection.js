function dectionCollision(ball, gameObject) {
  let leftOfBall = ball.position.x;
  let rightOfBall = ball.position.x + ball.size;

  let rightOfObecject = gameObject.position.x + gameObject.width;
  let topOfObject = gameObject.position.y;
  let bottomOfObject = gameObject.position.y + gameObject.height;
  let leftOfObject = gameObject.position.x;

  if (
    leftOfBall <= rightOfObecject &&
    rightOfBall >= leftOfObject &&
    ball.position.y + ball.size / 2 >= topOfObject &&
    ball.position.y + ball.size / 2 <= bottomOfObject
  ) {
    return true;
  } else {
    return false;
  }
}
