let canvas = document.getElementById("gameScreen");
let context = canvas.getContext("2d");

const GAME_WIDTH = 1000;
const GAME_HEIGTH = 500;

let game = new Game(GAME_WIDTH, GAME_HEIGTH);

let lastTime = 0;

function gameLoop(timestamp) {
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;
  context.clearRect(0, 0, GAME_WIDTH, GAME_HEIGTH);

  game.update(deltaTime);
  game.draw(context);

  context.fillStyle = "rgb(0, 0, 0)";
  context.fillRect(GAME_WIDTH / 2, 0, 1, GAME_HEIGTH);

  context.font = "40px Arial";
  context.fillStyle = "black";
  context.textAlign = "center";
  context.fillText(
    game.leftCount + " - " + game.rightCount,
    GAME_WIDTH / 2,
    40
  );

  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);

/*
context.fillStyle = "rgb(0, 0, 255)";
for (var i = 0; i < canvas.width; i += 20) {
  for (var j = 0; j < canvas.height; j += 20) {
    context.fillRect(j, i, 20, 20);
  }

  //context.clearRect(0, 0, 1000, 500);
}
*/
