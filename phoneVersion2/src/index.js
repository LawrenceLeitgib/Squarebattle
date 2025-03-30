let context = canvas.getContext("2d");


//canvas.width  = window.innerWidth;
//canvas.height = window.innerHeight;
//const GAME_WIDTH = canvas.width;
//const GAME_HEIGTH = canvas.height;

const GAME_WIDTH = 500;
const GAME_HEIGTH = 695;

//console.log(window.innerHeight)
let NEW_GAME_HEIGHT = window.innerHeight-180
let NEW_GAME_WIDTH =GAME_WIDTH/GAME_HEIGTH*NEW_GAME_HEIGHT
let ratio =NEW_GAME_WIDTH/GAME_WIDTH

let ratioGame =GAME_WIDTH/GAME_HEIGTH
let ratioWindow = (window.innerWidth-20)/(window.innerHeight-180)

canvas.height=NEW_GAME_HEIGHT
canvas.width=NEW_GAME_WIDTH

let game = new Game(GAME_WIDTH, GAME_HEIGTH,ratio);

let context2 = canvas2.getContext("2d");

context.save();


let accumulator = 0;
const step = 1000 / 60;
let lastTime = 0;
function gameLoop(timestamp) {
  ratioGame =GAME_WIDTH/GAME_HEIGTH
  ratioWindow = (window.innerWidth-20)/(window.innerHeight-180)
  if(ratioWindow>=ratioGame){
    NEW_GAME_HEIGHT = window.innerHeight-180
    NEW_GAME_WIDTH =GAME_WIDTH/GAME_HEIGTH*NEW_GAME_HEIGHT
    ratio =NEW_GAME_WIDTH/GAME_WIDTH
    game.ratio =ratio
    canvas.height=NEW_GAME_HEIGHT
    canvas.width=NEW_GAME_WIDTH
  } else{
    NEW_GAME_WIDTH = window.innerWidth-20
    NEW_GAME_HEIGHT =GAME_HEIGTH/GAME_WIDTH*NEW_GAME_WIDTH
    ratio =NEW_GAME_WIDTH/GAME_WIDTH
    game.ratio =ratio
    canvas.height=NEW_GAME_HEIGHT
    canvas.width=NEW_GAME_WIDTH
  }
  context.scale(ratio,ratio);
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;
  context.clearRect(0, 0, GAME_WIDTH, GAME_HEIGTH);
  context2.clearRect(0, 0, 200, 200);
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
  game.draw(context,context2);
  context.restore();
  context.save();

  //console.log(2)
  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
