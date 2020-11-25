function buildLevl(game, levelComplet) {
  let levelstuff = [];
  let level = levelComplet.level;
  let speed = {
    x: levelComplet.speedX,
    y: levelComplet.speedY
  };
  let spedeLive = levelComplet.speedLive;

  level.forEach((row, rowIndex) => {
    row.forEach((stuff, brickIndex) => {
      if (stuff === 1.1) {
        let position = {
          x: 72 * brickIndex + 10,
          y: (-rowIndex + 1) * 50 * 1.1
        };
        let money = 2;
        levelstuff.push(
          new BasicEnemy(game, position, speed, 1, "rgb(191, 105, 0)", money)
        );
      }
      if (stuff === 1.2) {
        let position = {
          x: 72 * brickIndex + 10,
          y: (-rowIndex + 1) * 50 * 1.1
        };
        let money = 4;
        levelstuff.push(
          new BasicEnemy(game, position, speed, 10, "rgb(51, 22, 1)", money)
        );
      }
      if (stuff === 1.3) {
        let position = {
          x: 72 * brickIndex + 10,
          y: (-rowIndex + 1) * 50 * 1.1
        };
        let money = 3;
        levelstuff.push(
          new BasicEnemy(game, position, speed, 5, "rgb(128, 55, 3)", money)
        );
      }
      if (stuff === 1.4) {
        let position = {
          x: 72 * brickIndex + 10,
          y: (-rowIndex + 1) * 50 * 1.1
        };
        let money = 5;
        levelstuff.push(
          new BasicEnemy(game, position, speed, 20, "rgb(66, 25, 0)", money)
        );
      }
      if (stuff === 1.5) {
        let position = {
          x: 72 * brickIndex + 10,
          y: (-rowIndex + 1) * 50 * 1.1
        };
        let money = 30;
        levelstuff.push(
          new BasicEnemy(game, position, speed, 175, "rgb(54, 26, 2)", money)
        );
      }

      if (stuff === 2) {
        let speed = spedeLive;
        let position = {
          x: 72 * brickIndex + 10,
          y: (-rowIndex + 1) * 50 * 1.1
        };
        levelstuff.push(new LiveIncreaser(game, position, 5, speed));
      }

      if (stuff === 3.1) {
        let lives = 5;
        let time = 1000;
        let color = "rgb(255,255, 0)";
        let money = 8;

        let position = {
          x: 72 * brickIndex + 10,
          y: (-rowIndex + 1) * 50 * 1.1
        };
        levelstuff.push(
          new BasicEnemyLevel2(
            game,
            position,
            speed,
            lives,
            time,
            color,
            money,
            {
              x: 0,
              y: 5
            }
          )
        );
      }
      if (stuff === 3.2) {
        let lives = 5;
        let time = 200;
        let color = "rgb(78, 0, 120)";
        let money = 10;
        let position = {
          x: 72 * brickIndex + 10,
          y: (-rowIndex + 1) * 50 * 1.1
        };
        levelstuff.push(
          new BasicEnemyLevel2(
            game,
            position,
            speed,
            lives,
            time,
            color,
            money,
            {
              x: 0,
              y: 5
            }
          )
        );
      }
      if (stuff === 3.21) {
        let lives = 5;
        let time = 200;
        let color = "rgb(52, 1, 59)";
        let money = 30;
        let position = {
          x: 72 * brickIndex + 10,
          y: (-rowIndex + 1) * 50 * 1.1
        };
        levelstuff.push(
          new BasicEnemyLevel2(
            game,
            position,
            speed,
            lives,
            time,
            color,
            money,
            {
              x: 0,
              y: 5
            },
            8,
            10
          )
        );
      }
      if (stuff === 3.3) {
        let lives = 50;
        let time = 600;
        let color = "rgb(25, 84, 61)";
        let money = 17;
        let position = {
          x: 72 * brickIndex + 10,
          y: (-rowIndex + 1) * 50 * 1.1
        };

        levelstuff.push(
          new BasicEnemyLevel2(
            game,
            position,
            speed,
            lives,
            time,
            color,
            money,
            {
              x: 0,
              y: 5
            },
            20,
            5
          )
        );
      }
      if (stuff === 3.4) {
        let lives = 500;
        let time = 300;
        let color = "rgb(117, 119, 120)";
        let money = 60;
        let position = {
          x: 72 * brickIndex + 10,
          y: (-rowIndex + 1) * 50 * 1.1
        };
        let size = 100;
        levelstuff.push(
          new BasicEnemyLevel2(
            game,
            position,
            speed,
            lives,
            time,
            color,
            money,
            {
              x: 0,
              y: 13
            },
            30,
            25,
            size
          )
        );
      }

      if (stuff === 4.1) {
        let lives = 3;
        let time = 700;
        let color = "rgb(25, 0, 191)";
        let position = {
          x: 72 * brickIndex + 10,
          y: (-rowIndex + 1) * 50 * 1.1
        };
        let money = 11;
        levelstuff.push(
          new BasicEnemyLevel3(game, position, speed, lives, time, color, money)
        );
      }
      if (stuff === 4.2) {
        let lives = 50;
        let time = 300;
        let color = "rgb(45, 127, 168)";
        let position = {
          x: 72 * brickIndex + 10,
          y: (-rowIndex + 1) * 50 * 1.1
        };
        let Thatspeed = {
          x: 1,
          y: levelComplet.speedY
        };
        let money = 20;
        levelstuff.push(
          new BasicEnemyLevel3(
            game,
            position,
            Thatspeed,
            lives,
            time,
            color,
            money
          )
        );
      }
      if (stuff === 4.3) {
        let lives = 15;
        let time = 100;
        let color = "rgb(61, 48, 64)";
        let position = {
          x: 72 * brickIndex + 10,
          y: (-rowIndex + 1) * 50 * 1.1
        };
        let speedMissle = 20;
        let sizeMissle = 3;
        let livesMissle = 0.5;
        let money = 13;
        levelstuff.push(
          new BasicEnemyLevel3(
            game,
            position,
            speed,
            lives,
            time,
            color,
            money,
            speedMissle,
            sizeMissle,
            livesMissle
          )
        );
      }
      if (stuff === 4.4) {
        let lives = 30;
        let time = 1500;
        let color = "rgb(8, 43, 92)";
        let position = {
          x: 72 * brickIndex + 10,
          y: (-rowIndex + 1) * 50 * 1.1
        };
        let speedMissle = 25;
        let sizeMissle = 12;
        let livesMissle = 7;
        let money = 17;
        levelstuff.push(
          new BasicEnemyLevel3(
            game,
            position,
            speed,
            lives,
            time,
            color,
            money,
            speedMissle,
            sizeMissle,
            livesMissle
          )
        );
      }
      if (stuff === 4.5) {
        let lives = 400;
        let time = 400;
        let color = "rgb(147, 242, 128)";
        let position = {
          x: 72 * brickIndex + 10,
          y: (-rowIndex + 1) * 50 * 1.1
        };
        let speedMissle = 20;
        let sizeMissle = 10;
        let livesMissle = 20;
        let money = 45;
        levelstuff.push(
          new BasicEnemyLevel3(
            game,
            position,
            speed,
            lives,
            time,
            color,
            money,
            speedMissle,
            sizeMissle,
            livesMissle
          )
        );
      }

      if (stuff === 5.1) {
        let position = {
          x: game.gameWidth / 2,
          y: 200
        };
        let money = 250;
        levelstuff.push(
          new BossLevel1(
            game,
            position,
            { x: 2, y: 0 },
            100,
            100,
            "rgb(19, 83, 161)",
            money
          )
        );
      }
      if (stuff === 5.2) {
        let position = {
          x: game.gameWidth / 2,
          y: game.gameHeight / 2
        };
        let money = 350;
        levelstuff.push(
          new BossLevel1(
            game,
            position,
            { x: 3, y: 0 },
            600,
            400,
            "rgb(93, 40, 158)",
            money,
            10,
            30,
            15,
            70,
            70
          )
        );
      }
      if (stuff === 5.3) {
        let position = {
          x: 72 * brickIndex + 10,
          y: game.gameHeight / 2
        };
        let positionOfLive = 0;
        let money = 200;
        if (position.x === 72 * 1 + 10) {
          positionOfLive = levelComplet.positionOflive1;
        } else {
          positionOfLive = levelComplet.positionOflive2;
        }
        levelstuff.push(
          new BossLevel1(
            game,
            position,
            speed,
            800,
            100,
            "rgb(93, 40, 158)",
            money,
            20,
            4,
            5,
            30,
            30,
            positionOfLive
          )
        );
      }
      if (stuff === 5.4) {
        let position = {
          x: game.gameWidth / 2,
          y: game.gameHeight / 2
        };
        let speed = 5;
        let live = 700;
        let time = 200;
        let speedMissle = 18;
        let sizeMissle = 12;
        let livesMissle = 10;
        let money = 600;
        levelstuff.push(
          new BossLevel2(
            game,
            position,
            speed,
            live,
            time,
            "rgb(93, 40, 158)",
            money,
            speedMissle,
            sizeMissle,
            livesMissle,
            40,
            40
          )
        );
      }

      if (stuff === 6.1) {
        let lives = 10;
        let time = 500;
        let color = "rgb(168, 50, 86)";
        let position = {
          x: 72 * brickIndex + 10,
          y: (-rowIndex + 1) * 50 * 1.1
        };
        let money = 7;
        levelstuff.push(
          new BasicEnemyLevel2(
            game,
            position,
            speed,
            lives,
            time,
            color,
            money,
            {
              x: 5,
              y: 5
            }
          )
        );
      }
      if (stuff === 6.2) {
        let lives = 7;
        let time = 500;
        let color = "rgb(168, 50, 86)";
        let position = {
          x: 72 * brickIndex + 10,
          y: (-rowIndex + 1) * 50 * 1.1
        };
        let money = 12;
        levelstuff.push(
          new BasicEnemyLevel2(
            game,
            position,
            speed,
            lives,
            time,
            color,
            money,
            {
              x: -5,
              y: 5
            }
          )
        );
      }
      if (stuff === 7) {
        let position = {
          x: 72 * brickIndex + 10,
          y: (-rowIndex + 1) * 50 * 1.1
        };
        let speed = spedeLive;
        levelstuff.push(new Shield(game, position, 10 * 1000, speed));
      }
      if (stuff === 7.1) {
        let position = {
          x: 72 * brickIndex + 10,
          y: (-rowIndex + 1) * 50 * 1.1
        };
        let speed = spedeLive;
        levelstuff.push(new Shield(game, position, 5 * 1000, speed));
      }
    });
  });
  return levelstuff;
}
/*

*/
const level1 = {
  level: [
    [0, 1.1, 0, 1.1, 0, 1.1, 0],
    [1.1, 0, 1.1, 0, 1.1, 0, 1.1],
    [0, 1.1, 0, 1.1, 0, 1.1, 0],
    [1.1, 0, 1.1, 2, 1.1, 0, 1.1]
  ],
  speedY: 0.8,
  speedX: 0,
  speedLive: 0.9
};
const level2 = {
  level: [
    [1.1, 0, 0, 1.1, 0, 0, 1.1],
    [1.1, 0, 0, 1.1, 0, 0, 1.1],
    [1.1, 2, 0, 1.1, 0, 2, 1.1],
    [1.1, 1.1, 0, 0, 0, 1.1, 1.1],
    [1.1, 1.1, 0, 3.1, 0, 1.1, 1.1],
    [1.1, 0, 1.1, 0, 1.1, 0, 1.1],
    [1.1, 0, 1.1, 0, 1.1, 0, 1.1]
  ],
  speedY: 0.8,
  speedX: 0,
  speedLive: 0.9
};
const level3 = {
  level: [
    [1.1, 0, 0, 1.1, 0, 0, 1.1],
    [3.1, 0, 0, 1.1, 0, 0, 3.1],
    [1.1, 2, 0, 1.1, 0, 2, 1.1],
    [1.1, 1.1, 3.1, 0, 3.1, 1.1, 1.1],
    [1.1, 1.1, 0, 2, 0, 1.1, 1.1],
    [1.1, 3.2, 1.1, 0, 1, 3.2, 1.1],
    [1.1, 0, 1.1, 4.1, 1.1, 0, 1.1]
  ],
  speedY: 0.7,
  speedX: 0,
  speedLive: 1
};
const level4 = {
  level: [
    [3.2, 1.1, 3.2, 2, 3.2, 1.1, 3.2],
    [1.1, 3.1, 1.1, 1.1, 1.1, 3.1, 1.1],
    [1.1, 3.1, 1.1, 1.1, 1.1, 3.1, 1.1],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 2, 0, 0, 0, 4.1, 0],
    [1.1, 3.1, 1.1, 1.1, 1.1, 3.1, 1.1],
    [3.2, 1.1, 3.2, 2, 3.2, 1.1, 3.2],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 4.1, 0, 0, 0, 2, 0],
    [1.1, 3.1, 1.1, 1.1, 1.1, 3.1, 1.1],
    [1.1, 3.1, 1.1, 1.1, 1.1, 3.1, 1.1],
    [2, 0, 2, 0, 2, 0, 2],
    [0, 2, 0, 2, 0, 2, 0],
    [4.1, 3.2, 4.1, 3.2, 4.1, 3.2, 4.1]
  ],
  speedY: 0.3,
  speedX: 0,
  speedLive: 0.35
};
const level5 = {
  level: [[5.1]],
  speedY: 0.7,
  speedX: 0,
  speedLive: 0.8
};
const level6 = {
  level: [
    [2, 0, 0, 2, 0, 0, 0],
    [0, 2, 0, 0, 2, 0, 0],
    [0, 0, 2, 0, 0, 2, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2],
    [6.1, 2, 6.1, 2, 6.2, 2, 6.2],
    [3.2, 3.1, 3.2, 3.1, 3.2, 3.1, 3.2],
    [4.1, 0, 0, 0, 0, 0, 4.1],
    [0, 4.1, 0, 0, 0, 4.1, 0],
    [1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [2, 0, 2, 0, 2, 0, 2]
  ],
  speedY: 0.4,
  speedX: 0,
  speedLive: 0.45
};
const level7 = {
  level: [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 2, 2, 2, 2, 2, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [6.1, 6.1, 6.1, 3.3, 6.2, 6.2, 6.2],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [4.1, 0, 4.1, 0, 4.1, 0, 4.1],
    [0, 4.1, 0, 4.1, 0, 4.1, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2],
    [0, 0, 0, 0, 0, 0, 0],
    [4.1, 0, 4.1, 0, 4.1, 0, 4.1],
    [0, 4.1, 0, 4.1, 0, 4.1, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 3.3, 0, 3.3, 0, 0],
    [0, 2, 2, 2, 2, 2, 0]
  ],
  speedY: 0.6,
  speedX: 0,
  speedLive: 0.6
};
const level8 = {
  level: [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2],
    [4.1, 0, 0, 4.2, 0, 0, 4.1],
    [1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2],
    [0, 2, 0, 7.1, 0, 2, 0],
    [3.3, 0, 3.3, 0, 3.3, 0, 3.3],
    [2, 3.2, 0, 3.2, 0, 3.2, 2],
    [1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1],
    [1.1, 2, 1.1, 1.1, 1.1, 2, 1.1],
    [1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1],
    [1.1, 2, 1.1, 1.1, 1.1, 2, 1.1],
    [1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1],
    [1.1, 2, 1.1, 1.1, 1.1, 2, 1.1],
    [6.1, 6.1, 6.1, 3.3, 6.2, 6.2, 6.2],
    [6.1, 6.1, 6.1, 3.3, 6.2, 6.2, 6.2],
    [0, 2, 0, 2, 0, 2, 0]
  ],
  speedY: 0.6,
  speedX: 0,
  speedLive: 0.6
};
const level9 = {
  level: [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2],
    [1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2],
    [4.1, 4.1, 4.1, 4.1, 4.1, 4.1, 4.1],
    [4.1, 0, 0, 4.2, 0, 0, 4.1],
    [4.1, 0, 4.2, 0, 0, 0, 4.1],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 2, 2, 0, 2, 2, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 2, 2, 0, 2, 2, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [3.1, 3.1, 3.1, 3.1, 3.1, 3.1, 3.1],
    [3.2, 3.2, 3.2, 3.2, 3.2, 3.2, 3.2],
    [3.3, 0, 0, 3.3, 0, 0, 3.3],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 2, 2, 4.2, 2, 2, 0]
  ],
  speedY: 0.6,
  speedX: 0,
  speedLive: 0.6
};
const level10 = {
  level: [[5.2]],
  speedY: 0,
  speedX: 0,
  speedLive: 0
};
const level11 = {
  level: [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [1.3, 1.3, 1.3, 1.3, 1.3, 1.3, 1.3],
    [4.1, 4.1, 4.1, 4.1, 4.1, 4.1, 4.1],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [4.2, 2, 2, 2, 2, 2, 4.2],
    [1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2],
    [1.2, 4.1, 4.1, 4.1, 4.1, 4.1, 1.2],
    [1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2],
    [4.2, 4.2, 4.2, 4.2, 4.2, 4.2, 4.2],
    [2, 2, 2, 2, 2, 2, 2]
  ],

  speedY: 0.6,
  speedX: 0,
  speedLive: 0.6
};
const level12 = {
  level: [
    [0, 0, 0, 0, 0, 0, 0],
    [3.1, 3.1, 3.1, 3.1, 3.1, 3.1, 3.1],
    [3.1, 3.1, 3.1, 3.1, 3.1, 3.1, 3.1],
    [3.1, 3.1, 3.1, 3.1, 3.1, 3.1, 3.1],
    [3.1, 3.1, 3.1, 3.1, 3.1, 3.1, 3.1],
    [3.1, 3.1, 3.1, 3.1, 3.1, 3.1, 3.1],
    [3.1, 3.1, 3.1, 3.1, 3.1, 3.1, 3.1],
    [3.1, 3.1, 3.1, 3.1, 3.1, 3.1, 3.1],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [3.3, 3.3, 3.3, 3.3, 3.3, 3.3, 3.3],
    [1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2],
    [1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2],
    [1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1],
    [1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 2, 0, 2, 0, 2, 0]
  ],

  speedY: 0.6,
  speedX: 0,
  speedLive: 0.6
};
const level13 = {
  level: [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [1.3, 1.3, 1.3, 1.3, 1.3, 4.3, 1.3],
    [1.3, 1.3, 4.3, 1.3, 1.3, 1.3, 1.3],
    [4.3, 1.3, 1.3, 1.3, 1.3, 1.3, 1.3],
    [1.3, 1.3, 4.3, 4.3, 1.3, 1.3, 1.3],
    [1.3, 1.3, 1.3, 1.3, 1.3, 1.3, 1.3],
    [4.3, 1.3, 1.3, 4.3, 1.3, 4.3, 1.3],
    [1.3, 1.3, 1.3, 1.3, 1.3, 1.3, 1.3],
    [1.3, 1.3, 4.3, 1.3, 4.3, 1.3, 1.3],
    [4.3, 1.3, 1.3, 1.3, 1.3, 1.3, 1.3],
    [1.3, 4.3, 1.3, 4.3, 1.3, 1.3, 1.3],
    [1.3, 1.3, 1.3, 1.3, 1.3, 1.3, 4.3],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 2, 0, 2, 0, 2, 0]
  ],

  speedY: 2,
  speedX: 0,
  speedLive: 2
};
const level14 = {
  level: [
    [0, 2, 0, 2, 0, 2, 0],
    [2, 0, 2, 0, 2, 0, 2],
    [0, 0, 0, 7, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2],
    [4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3],
    [1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2],
    [4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3],
    [0, 0, 0, 4.2, 0, 0, 0],
    [4.2, 0, 0, 0, 0, 0, 0],
    [2, 0, 2, 0, 2, 0, 2],
    [1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2],
    [4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3],
    [1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2],
    [4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3]
  ],

  speedY: 0.8,
  speedX: 0,
  speedLive: 0.8
};
const level15 = {
  level: [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 7, 0, 0, 0],
    [0, 5.3, 0, 0, 0, 5.3, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
  ],
  speedY: 0.8,
  speedX: 0,
  speedLive: 0.8,
  positionOflive1: 40,
  positionOflive2: 80
};
const level16 = {
  level: [
    [4.1, 4.1, 4.1, 4.1, 4.1, 4.1, 4.1],
    [1.4, 1.4, 1.4, 1.4, 1.4, 1.4, 1.4],
    [0, 0, 0, 4.2, 0, 0, 0],
    [1.4, 1.4, 1.4, 1.4, 1.4, 1.4, 1.4],
    [4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3],
    [1.4, 1.4, 1.4, 1.4, 1.4, 1.4, 1.4],
    [6.1, 6.1, 6.1, 3.3, 6.2, 6.2, 6.2],
    [6.1, 6.1, 6.1, 2, 6.2, 6.2, 6.2],
    [6.1, 6.1, 6.1, 3.3, 6.2, 6.2, 6.2],
    [0, 0, 0, 4.2, 0, 0, 0],
    [3.2, 4.1, 3.2, 4.1, 3.2, 4.1, 3.2],
    [0, 0, 4.2, 0, 0, 0, 0],
    [1.4, 1.4, 1.4, 1.4, 1.4, 1.4, 1.4],
    [4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3]
  ],

  speedY: 0.4,
  speedX: 0,
  speedLive: 0.4
};
const level17 = {
  level: [
    [2, 2, 2, 2, 2, 2, 2],

    [1.4, 1.4, 1.4, 1.4, 1.4, 1.4, 1.4],
    [4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3],
    [3.3, 0, 3.3, 0, 3.3, 0, 3.3],
    [0, 4.1, 0, 4.1, 0, 4.1, 0],
    [1.4, 1.4, 1.4, 1.4, 1.4, 1.4, 1.4],
    [4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3],
    [0, 4.2, 0, 0, 0, 4.2, 0],
    [3.2, 3.3, 3.2, 3.3, 3.2, 3.3, 3.2],
    [0, 0, 0, 4.4, 0, 0, 0]
  ],

  speedY: 0.8,
  speedX: 0,
  speedLive: 0.8
};
const level18 = {
  level: [
    [2, 2, 2, 2, 2, 2, 2],
    [0, 0, 0, 7, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [1.4, 1.4, 1.4, 1.4, 1.4, 1.4, 1.4],
    [4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3],
    [1.4, 1.4, 1.4, 1.4, 1.4, 1.4, 1.4],
    [6.1, 6.1, 6.1, 3.3, 6.2, 6.2, 6.2],
    [6.1, 6.1, 6.1, 3.3, 6.2, 6.2, 6.2],
    [4.4, 4.4, 4.4, 4.4, 4.4, 4.4, 4.4]
  ],

  speedY: 0.8,
  speedX: 0,
  speedLive: 0.8
};
const level19 = {
  level: [
    [0, 2, 2, 0, 2, 2, 0],

    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [1.3, 1.3, 1.3, 1.3, 1.3, 1.3, 1.3],
    [4.1, 4.1, 4.1, 4.1, 4.1, 4.1, 4.1],
    [3.2, 4.2, 3.2, 4.2, 3.2, 4.2, 3.2],
    [1.4, 1.4, 1.4, 1.4, 1.4, 1.4, 1.4],
    [4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3],
    [0, 4.4, 0, 4.4, 0, 4.4, 0],
    [4.4, 0, 4.4, 0, 4.4, 0, 4.4],
    [(1.3, 1.3, 1.3, 1.3, 1.3, 1.3, 1.3)],
    [4.1, 4.1, 4.1, 4.1, 4.1, 4.1, 4.1],
    [3.2, 4.2, 3.2, 4.2, 3.2, 4.2, 3.2],
    [1.4, 1.4, 1.4, 1.4, 1.4, 1.4, 1.4],
    [4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3]
  ],

  speedY: 0.6,
  speedX: 0,
  speedLive: 0.6
};
const level20 = {
  level: [[5.4]],
  speedY: 0,
  speedX: 0,
  speedLive: 0
};
const level21 = {
  level: [
    [0, 0, 0, 0, 0, 0, 0],
    [1.4, 1.4, 1.4, 1.4, 1.4, 1.4, 1.4],
    [4.4, 0, 4.4, 0, 4.4, 0, 4.4],
    [4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3],
    [3.3, 3.3, 3.3, 3.3, 3.3, 3.3, 3.3],
    [0, 0, 0, 0, 0, 0, 0],
    [2, 2, 2, 2, 2, 2, 2],
    [4.1, 4.1, 4.1, 4.1, 4.1, 4.1, 4.1],
    [4.1, 4.1, 4.1, 4.1, 4.1, 4.1, 4.1],
    [4.2, 4.1, 4.1, 4.2, 4.1, 4.1, 4.2],
    [6.1, 6.1, 6.1, 4.2, 6.2, 6.2, 6.2],
    [6.1, 6.1, 6.1, 4.2, 6.2, 6.2, 6.2],
    [6.1, 6.1, 6.1, 4.2, 6.2, 6.2, 6.2],
    [6.1, 6.1, 6.1, 4.2, 6.2, 6.2, 6.2],
    [3.3, 3.3, 3.3, 3.3, 3.3, 3.3, 3.3],
    [2, 2, 2, 2, 2, 2, 2]
  ],

  speedY: 0.8,
  speedX: 0,
  speedLive: 0.8
};
const level22 = {
  level: [
    [3.2, 3.4, 0, 3.2, 3.4, 0, 3.2],
    [3.3, 4.3, 4.3, 3.3, 4.3, 4.3, 3.3],
    [4.4, 0, 4.4, 7.1, 4.4, 0, 4.4],
    [1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5],
    [4.3, 4.4, 4.1, 4.2, 4.1, 4.4, 4.3],
    [4.3, 4.4, 4.1, 4.2, 4.1, 4.4, 4.3],
    [4.3, 4.4, 4.1, 4.2, 4.1, 4.4, 4.3],
    [1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5],
    [6.1, 6.1, 6.1, 4.2, 6.2, 6.2, 6.2],
    [6.1, 6.1, 6.1, 4.2, 6.2, 6.2, 6.2],
    [6.1, 6.1, 6.1, 4.2, 6.2, 6.2, 6.2],
    [1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5],
    [2, 0, 2, 0, 2, 0, 2],
    [2, 2, 0, 2, 0, 2, 2]
  ],

  speedY: 0.4,
  speedX: 0,
  speedLive: 0.4
};
const level23 = {
  level: [
    [0, 0, 0, 7.1, 0, 0, 0],
    [0, 0, 0, 4.5, 0, 0, 0],
    [1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5],
    [4.3, 4.5, 3.21, 3.21, 3.21, 4.5, 4.3],
    [4.3, 4.4, 4.1, 4.2, 4.1, 4.4, 4.3],
    [1.5, 3.3, 1.5, 3.3, 1.5, 3.3, 1.5],
    [0, 4.5, 0, 4.3, 0, 4.5, 0]
  ],

  speedY: 0.5,
  speedX: 0,
  speedLive: 0.5
};
