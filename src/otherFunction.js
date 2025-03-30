//Function to get the mouse position
function getMousePos(canvas, event) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top,
  };
}

//Function to check whether a point is inside a rectangle
function isInside(pos, rect) {
  return (
    pos.x > rect.x &&
    pos.x < rect.x + rect.width &&
    pos.y < rect.y + rect.height &&
    pos.y > rect.y
  );
}

function creatCode(game) {
  let code = "";
  code += "$!!!/|\\";
  for (const property in game.save) {
    if (property == "helpers") {
      code += game.save[property].length;
    } else {
      code += game.save[property];
    }
    code += "/|\\";
  }
  code += "|||$";
  return code;
}

function lineBreaker(word,num){
  let stringLength = Math.round(word.length/num,0);
  let newString="";
  let index=0;
  for(var i=0;i<num;i++){
    newString+=word.substring(index,index+stringLength)
    index=index+stringLength
    if(i==num-1){
      newString+=word.substring(index,word.length,-1);
    }
    newString+="<br>"
  }
  return newString
}
//console.log(lineBreaker("33363636386b4b2627386b4b22272727n386b4b26272727386b4b2427386b4b24386b4b26386b4b27386b4b25386b4b6b6b6b33",3));

const cipher = (salt) => {
  const textToChars = (text) => text.split("").map((c) => c.charCodeAt(0));
  const byteHex = (n) => ("0" + Number(n).toString(16)).substr(-2);
  const applySaltToChar = (code) =>
    textToChars(salt).reduce((a, b) => a ^ b, code);

  return (text) =>
    text.split("").map(textToChars).map(applySaltToChar).map(byteHex).join("");
};

const decipher = (salt) => {
  const textToChars = (text) => text.split("").map((c) => c.charCodeAt(0));
  const applySaltToChar = (code) =>
    textToChars(salt).reduce((a, b) => a ^ b, code);
  return (encoded) =>
    encoded
      .match(/.{1,2}/g)
      .map((hex) => parseInt(hex, 16))
      .map(applySaltToChar)
      .map((charCode) => String.fromCharCode(charCode))
      .join("");
};
const codeCipher = cipher(
  "somthingelseverycomplicatedthatnobodywillfindbecausenobodycareofthecodeofacame"
);
const myDecipher = decipher(
  "somthingelseverycomplicatedthatnobodywillfindbecausenobodycareofthecodeofacame"
);
let codenul="$!!!/|\\10/|\\5000/|\\1000/|\\30/|\\3/|\\1/|\\0/|\\2/|\\|||$"



function veryfyingCode(game, code) {
  code2 = creatCode(game);
  var codeChiphered = codeCipher(code2);
  var codeDechiphered = myDecipher(codeChiphered);
  var firstTest = false;
  if (
    code.charAt(code.length - 1) == "$" &&
    code.substring(code.length - 4, code.length - 1) == "|||" &&
    code.charAt(0) == "$" &&
    code.substring(1, 4) == "!!!"

  ) {
    firstTest = true;

  }
  var secondTest = false
  var secondTestCountT=0
  if(firstTest){
    for (var i = 0; i < code.length; i++) {
      if(code.substring(i, i+3)=="/|\\"){
        secondTestCountT+=1
      }

    }
    if (secondTestCountT == 9){
      secondTest=true
    }
  }
  //console.log(code)


  if (firstTest&&secondTest) {
    return true;

  } else {
    return false;
  }
}


function getRandomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function drawRectRotated(context, startx, starty, width, height, angle) {
  context.beginPath();
  posx = startx - (width * Math.cos(angle)) / 2;
  posy = starty + (width * Math.sin(angle)) / 2;
  let x2 = posx + width * Math.cos(angle);
  let y2 = posy - width * Math.sin(angle);
  let x3 = x2 + height * Math.sin(angle);
  let y3 = y2 + height * Math.cos(angle);
  let x4 = x3 - width * Math.cos(angle);
  let y4 = y3 + width * Math.sin(angle);
  context.moveTo(posx, posy);
  context.lineTo(x2, y2);
  context.lineTo(x3, y3);
  context.lineTo(x4, y4);
  context.lineTo(posx, posy);
  context.fill();
}
function drawRectRotatedMove(
  context,
  startx,
  starty,
  width,
  height,
  angle,
  thatNumber
) {
  drawRectRotated(
    context,
    startx,
    starty,
    width - thatNumber * 2,
    height,
    angle
  );
}
function getRectRotated(context, startx, starty, width, height, angle) {
  posx = startx - (width * Math.cos(angle)) / 2;
  posy = starty + (width * Math.sin(angle)) / 2;
  let x2 = posx + width * Math.cos(angle);
  let y2 = posy - width * Math.sin(angle);
  let x3 = x2 + height * Math.sin(angle);
  let y3 = y2 + height * Math.cos(angle);
  let x4 = x3 - width * Math.cos(angle);
  let y4 = y3 + width * Math.sin(angle);
  return [
    x4 + (width * Math.cos(angle)) / 2,
    y4 - (width * Math.sin(angle)) / 2,
  ];
}
function showGoldCoin(context, game, posX, posY, size = game.goldSize) {
  if (game.goldCount < 200 / game.goldRotationSpeed) {
    context.drawImage(game.gold1, posX, posY, size, size);
  } else if (game.goldCount < 400 / game.goldRotationSpeed) {
    context.drawImage(game.gold2, posX, posY, size, size);
  } else if (game.goldCount < 600 / game.goldRotationSpeed) {
    context.drawImage(game.gold3, posX, posY, size, size);
  } else if (game.goldCount < 800 / game.goldRotationSpeed) {
    context.drawImage(game.gold4, posX, posY, size, size);
  } else if (game.goldCount < 1000 / game.goldRotationSpeed) {
    context.drawImage(game.gold3, posX, posY, size, size);
  } else if (game.goldCount < 1200 / game.goldRotationSpeed) {
    context.drawImage(game.gold2, posX, posY, size, size);
  }
}

function drakenAColor(color, darkerNum) {
  let char = "";
  let newColor = "rgb(";
  let number = "";
  let numberInt = 0;
  for (var i = 0; i < color.length; i++) {
    char = color.charAt(i);
    if (char >= "0" && char <= "9") {
      number += char;
    } else if (char == ",") {
      numberInt = parseInt(number);
      numberInt -= darkerNum;
      if (numberInt < 0) {
        numberInt = 0;
      }
      newColor += numberInt;
      newColor += ",";
      number = "";
      numberInt = 0;
    } else if (char == ")") {
      numberInt = parseInt(number);
      numberInt -= darkerNum;
      if (numberInt < 0) {
        numberInt = 0;
      }
      newColor += numberInt;
      number = "";
      numberInt = 0;
    }
  }
  newColor += ")";
  return newColor;
}
//console.log(drakenAColor("r gb( 134 ,   46  ,    255  )", 45));

function drawEnemy(context, game, enemy) {
  darkColor = drakenAColor(enemy.color, 45);
  let sizeOfTheThing = 10;
  context.fillStyle = darkColor;
  context.fillRect(
    enemy.position.x,
    enemy.position.y,
    enemy.width,
    enemy.height
  );

  context.fillStyle = enemy.color;
  context.fillRect(
    enemy.position.x + enemy.width / sizeOfTheThing,
    enemy.position.y + enemy.height / sizeOfTheThing,
    enemy.width - (enemy.width / sizeOfTheThing) * 2,
    enemy.height - (enemy.height / sizeOfTheThing) * 2
  );
  /*
  context.fillStyle = drakenAColor(enemy.color, -45);
  context.fillRect(
    enemy.position.x + enemy.width / sizeOfTheThing*2,
    enemy.position.y + enemy.height / sizeOfTheThing*2,
    enemy.width- enemy.width / sizeOfTheThing*4,
    enemy.height- enemy.height / sizeOfTheThing*4
  );
*/
  context.fillStyle = "rgb(255, 0, 0)";
  context.fillRect(
    enemy.position.x,
    enemy.position.y,
    (enemy.width / enemy.maxLives) * enemy.lives,
    enemy.height / 10
  );
}


//The rectangle should have x,y,width,height properties

//Binding the click event on the canvas
