if (screen.width <= 800) {
  window.location = "http://squarebattle.com/phoneVersion/index.html";
}






window.addEventListener(
  "keydown",
  function (e) {
    // space and arrow keys
    if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
      e.preventDefault();
    }
  },
  false
);

//without www.

(function () {
  var k = function (action) {
    var eventObj = document.createEvent("Events");

    eventObj.initEvent("keydown", true, true);
    eventObj.keyCode = 75;
    eventObj.which = 75;

    document.body.dispatchEvent(eventObj);
  };

  var killSpaceBar = function (evt) {
    var target = evt.target || {},
      isInput =
        "INPUT" == target.tagName ||
        "TEXTAREA" == target.tagName ||
        "SELECT" == target.tagName ||
        "EMBED" == target.tagName;

    // if we’re an input or not a real target exit
    if (isInput || !target.tagName) return;

    // if we’re a fake input like the comments exit
    if (
      target &&
      target.getAttribute &&
      target.getAttribute("role") === "textbox"
    )
      return;

    // ignore the space and send a ‘k’ to pause
    if (evt.keyCode === 32) {
      evt.preventDefault();
      k();
    }
  };

  document.addEventListener("keydown", killSpaceBar, false);
})();

let context = canvas.getContext("2d");

const GAME_WIDTH = 500;
const GAME_HEIGTH = 695;

let NEW_GAME_HEIGHT = 695;
//console.log(window.innerHeight)
let NEW_GAME_WIDTH = (GAME_WIDTH / GAME_HEIGTH) * NEW_GAME_HEIGHT;

let ratio = NEW_GAME_WIDTH / GAME_WIDTH;

canvas.height = NEW_GAME_HEIGHT;
canvas.width = NEW_GAME_WIDTH;
context.save();

let game = new Game(GAME_WIDTH, GAME_HEIGTH, ratio);
context.scale(ratio, ratio);
//console.log(ratio)
let accumulator = 0;
const step = 1000 / 60;
let lastTime = 0;
function gameLoop(timestamp) {
  //NEW_GAME_HEIGHT = window.innerHeight - 30;
  NEW_GAME_HEIGHT = 695;
  NEW_GAME_WIDTH = (GAME_WIDTH / GAME_HEIGTH) * NEW_GAME_HEIGHT;
  ratio = NEW_GAME_WIDTH / GAME_WIDTH;
  game.ratio = ratio;
  canvas.height = NEW_GAME_HEIGHT;
  canvas.width = NEW_GAME_WIDTH;
  context.scale(ratio, ratio);
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;
  context.clearRect(0, 0, GAME_WIDTH, GAME_HEIGTH);
  accumulator += deltaTime;
  while (accumulator > step) {
    game.update(step);
    //console.log(1)
    accumulator -= step;
  }
  //console.log("accu", accumulator);
  //console.log("deltaTime: ", deltaTime);
  //console.log("lastTime: ", lastTime);
  //console.log("timestamp: ", timestamp);
  game.draw(context);
  context.restore();
  context.save();
  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
