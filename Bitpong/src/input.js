class InputHandler {
  constructor(paddle, game, xPostion) {
    if (xPostion == "left") {
      document.addEventListener("keydown", (event) => {
        switch (event.keyCode) {
          case 87:
            paddle.moveUp();
            break;
          case 83:
            paddle.moveDown();
            break;
          default:
            break;
          case 27:
            game.togglePause();
            break;
          case 32:
            game.start();
            break;
        }
      });

      document.addEventListener("keyup", (event) => {
        switch (event.keyCode) {
          case 87:
            if (paddle.speed < 0) {
              paddle.stop();
            }
            break;
          case 83:
            if (paddle.speed > 0) {
              paddle.stop();
            }
            break;
          default:
            break;
        }
      });
    }

    if (xPostion == "right") {
      document.addEventListener("keydown", (event) => {
        switch (event.keyCode) {
          case 38:
            paddle.moveUp();
            break;
          case 40:
            paddle.moveDown();
            break;
          default:
            break;
        }
      });

      document.addEventListener("keyup", (event) => {
        switch (event.keyCode) {
          case 38:
            if (paddle.speed < 0) {
              paddle.stop();
            }
            break;
          case 40:
            if (paddle.speed > 0) {
              paddle.stop();
            }
            break;
          default:
            break;
        }
      });
    }
  }
}
