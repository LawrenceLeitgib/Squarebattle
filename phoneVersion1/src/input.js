class InputHandler {
  constructor(shapeship, game, missles) {
    document.addEventListener("keydown", (event) => {
      switch (event.keyCode) {
        case 27:
          game.togglePause();
          if (
            game.gamestate === GAMESTATE.SHOP ||
            game.gamestate === GAMESTATE.OPTION
          )
            game.gamestate = game.lastGameState;
          break;
        case 67:
          game.start2();
          game.startCheckpoint();
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
        case 16:
          shapeship.stopSlowDown();
          break;
        default:
          break;
      }
    });

    document.addEventListener("touchstart", (e) => {
      missles.creatMissle();
      game.ClickDown();
      game.start();
      game.start3();
      //console.log(e.touches.length);
    });
    document.addEventListener("touchend", (e) => {
      missles.StopCreatMissle();
      game.clickUp();
    });
  }
}
