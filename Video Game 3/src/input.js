class InputHandler {
  constructor(shapeship, game, missles) {
    document.addEventListener("keydown", (event) => {
      switch (event.keyCode) {
        case 87:
          shapeship.moveUp();
          break;
        case 83:
          shapeship.moveDown();
          break;
        case 65:
          shapeship.moveLeft();
          break;
        case 68:
          shapeship.moveRight();
          break;

        case 38:
          shapeship.moveUp();
          break;
        case 40:
          shapeship.moveDown();
          break;
        case 37:
          shapeship.moveLeft();
          break;
        case 39:
          shapeship.moveRight();
          break;

        case 27:
          game.togglePause();
          break;
        case 32:
          game.start();
          break;
        case 67:
          game.start2();
          game.startCheckpoint();
          break;
        case 13:
          game.start3();
          break;
        case 16:
          shapeship.slowDown();
          break;

        default:
          break;
      }
    });

    document.addEventListener("keyup", (event) => {
      switch (event.keyCode) {
        case 87:
          if (shapeship.speed.y < 0) {
            shapeship.stopY();
          }
          break;
        case 83:
          if (shapeship.speed.y > 0) {
            shapeship.stopY();
          }
          break;
        case 65:
          if (shapeship.speed.x < 0) {
            shapeship.stopX();
          }
          break;
        case 68:
          if (shapeship.speed.x > 0) {
            shapeship.stopX();
          }
          break;

        case 38:
          if (shapeship.speed.y < 0) {
            shapeship.stopY();
          }
          break;
        case 40:
          if (shapeship.speed.y > 0) {
            shapeship.stopY();
          }
          break;
        case 37:
          if (shapeship.speed.x < 0) {
            shapeship.stopX();
          }
          break;
        case 39:
          if (shapeship.speed.x > 0) {
            shapeship.stopX();
          }

          break;
        case 16:
          shapeship.stopSlowDown();
          break;
        default:
          break;
      }
    });
    document.addEventListener("mousedown", (e) => {
      missles.creatMissle();
      game.ClickDown();
    });
    document.addEventListener("mouseup", (e) => {
      missles.StopCreatMissle();
      game.clickUp();
    });
  }
}
