/*
to do:
-getting user input more efficent
-getting missle direction more efficient
-adding some object
*/


let context = canvas.getContext("2d");

const GAME_WIDTH = 500;
const GAME_HEIGTH = 700;

let game = new Game(GAME_WIDTH, GAME_HEIGTH);

let lastTime = 0;
function gameLoop(timestamp) {
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;
  context.clearRect(0, 0, GAME_WIDTH, GAME_HEIGTH);
  //console.log("deltaTime: ", deltaTime);
  //console.log("lastTime: ", lastTime);
  //console.log("timestamp: ", timestamp);
  game.update(deltaTime);
  game.draw(context);

  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
