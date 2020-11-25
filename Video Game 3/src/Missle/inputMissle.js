class InputHandlerMissle {
  constructor(missles, game) {
    document.addEventListener("keydown", (event) => {
      switch (event.keyCode) {
        case 32:
          missles.creatMissle();
          break;
        default:
          break;
      }
    });
    document.addEventListener("keyup", (event) => {
      switch (event.keyCode) {
        case 32:
          missles.StopCreatMissle();
          break;
        default:
          break;
      }
    });
  }
}
