function buildLevl(game, levelComplet) {
  let levelstuff = [];
  let level = levelComplet.level;
  let speed = {
    x: levelComplet.speedX,
    y: levelComplet.speedY,
  };
  let spedeLive = levelComplet.speedLive;

  level.forEach((row, rowIndex) => {
    row.forEach((stuff, brickIndex) => {

      if (stuff === 1.1) {
        let position = {
          x: 72 * brickIndex + 10,
          y: (-rowIndex + 1) * 50 * 1.1,
        };
        let money = 2;
        levelstuff.push(
          new BasicEnemy(game, position, speed, 1, "rgb(235, 130, 2)", money)
        );
      }
      if (stuff === 1.2) {
        let position = {
          x: 72 * brickIndex + 10,
          y: (-rowIndex + 1) * 50 * 1.1,
        };
        let money = 4;
        levelstuff.push(
          new BasicEnemy(game, position, speed, 10, "rgb(150, 63, 0)", money)
        );
      }
      if (stuff === 1.3) {
        let position = {
          x: 72 * brickIndex + 10,
          y: (-rowIndex + 1) * 50 * 1.1,
        };
        let money = 3;
        levelstuff.push(
          new BasicEnemy(game, position, speed, 5, "rgb(194, 81, 0)", money)
        );
      }
      if (stuff === 1.4) {
        let position = {
          x: 72 * brickIndex + 10,
          y: (-rowIndex + 1) * 50 * 1.1,
        };
        let money = 5;
        levelstuff.push(
          new BasicEnemy(game, position, speed, 20, "rgb(99, 42, 0)", money)
        );
      }
      if (stuff === 1.5) {
        let position = {
          x: 72 * brickIndex + 10,
          y: (-rowIndex + 1) * 50 * 1.1,
        };
        let money = 30;
        levelstuff.push(
          new BasicEnemy(game, position, speed, 175, "rgb(54, 23, 0)", money)
        );
      }
      if (stuff === 1.6) {
        let position = {
          x: 72 * brickIndex + 10,
          y: (-rowIndex + 1) * 50 * 1.1,
        };
        let money = 170;
        levelstuff.push(
          new BasicEnemy(game, position, speed, 7000, "rgb(255, 0, 0)", money)
        );
      }

      if (stuff === 2) {
        let speed = spedeLive;
        let position = {
          x: 72 * brickIndex + 10,
          y: (-rowIndex + 1) * 50 * 1.1,
        };
        levelstuff.push(new LiveIncreaser(game, position, 5, speed));
      }
      if (stuff === 2.1) {
        let speed = spedeLive;
        let position = {
          x: 72 * brickIndex + 10,
          y: (-rowIndex + 1) * 50 * 1.1,
        };
        levelstuff.push(new LiveIncreaser(game, position, 20, speed));
      }

      if (stuff === 3.1) {
        let lives = 5;
        let time = 1000;
        let color = "rgb(255,255, 0)";
        let money = 8;

        let position = {
          x: 72 * brickIndex + 10,
          y: (-rowIndex + 1) * 50 * 1.1,
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
              y: 5,
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
          y: (-rowIndex + 1) * 50 * 1.1,
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
              y: 5,
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
          y: (-rowIndex + 1) * 50 * 1.1,
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
              y: 5,
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
          y: (-rowIndex + 1) * 50 * 1.1,
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
              y: 5,
            },
            20,
            5
          )
        );
      }
      if (stuff === 3.31) {
        let lives = 3000;
        let time = 600;
        let color = "rgb(0, 122, 12)";
        let money = 150;
        let position = {
          x: 72 * brickIndex + 10,
          y: (-rowIndex + 1) * 50 * 1.1,
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
              y: 7,
            },
            25,
            100
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
          y: (-rowIndex + 1) * 50 * 1.1,
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
              y: 13,
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
          y: (-rowIndex + 1) * 50 * 1.1,
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
          y: (-rowIndex + 1) * 50 * 1.1,
        };
        let Thatspeed = {
          x: 1,
          y: levelComplet.speedY,
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
      if (stuff === 4.21) {
        let lives = 1500;
        let time = 100;
        let color = "rgb(0, 156, 148)";
        let position = {
          x: 72 * brickIndex + 10,
          y: (-rowIndex + 1) * 50 * 1.1,
        };
        let thatSpeed = {
          x: 2,
          y: levelComplet.speedY,
        };
        let money = 60;
        let speedMissle = 9;
        let sizeMissle = 9;
        let livesMissle = 15;
        levelstuff.push(
          new BasicEnemyLevel3(
            game,
            position,
            thatSpeed,
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
      if (stuff === 4.3) {
        let lives = 15;
        let time = 100;
        let oldColor ="rgb(61, 48, 64)"
        let color = "rgb(49, 39, 51)";
        let position = {
          x: 72 * brickIndex + 10,
          y: (-rowIndex + 1) * 50 * 1.1,
        };
        let speedMissle = 20;
        let sizeMissle = 4;
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
          y: (-rowIndex + 1) * 50 * 1.1,
        };
        let speedMissle = 21;
        let sizeMissle = 11;
        let livesMissle = 6;
        let money = 16;
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
        let color = "rgb(115, 99, 0)";
        let position = {
          x: 72 * brickIndex + 10,
          y: (-rowIndex + 1) * 50 * 1.1,
        };
        let speedMissle = 18;
        let sizeMissle = 14;
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
      if (stuff === 4.6) {
        let lives = 1000;
        let time = 700;
        let color = "rgb(4, 38, 0)";
        let position = {
          x: 72 * brickIndex + 10,
          y: (-rowIndex + 1) * 50 * 1.1,
        };
        let speedMissle = 4;
        let sizeMissle = 25;
        let livesMissle = 50;
        let money = 50;
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
          y: 200,
        };
        let money = 250;
        levelstuff.push(
          new BossLevel1(
            game,
            position,
            { x: 2, y: 0 },
            100,
            200,
            "rgb(19, 83, 161)",
            money
          )
        );
      }
      if (stuff === 5.2) {
        let position = {
          x: game.gameWidth / 2,
          y: game.gameHeight / 2,
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
          y: game.gameHeight / 2,
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
          y: game.gameHeight / 2,
        };
        let speed = 5;
        let lives = 700;
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
            lives,
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
      if (stuff === 5.5) {
        let position = {
          x: game.gameWidth / 2,
          y: game.gameHeight / 2,
        };
        let speed = 0;
        let live = 800;
        let time = 150;
        let speedMissle = 22;
        let sizeMissle = 13;
        let livesMissle = 15;
        let money = 1500;
        levelstuff.push(
          new BossLevel3(
            game,
            position,
            speed,
            live,
            time,
            "rgb(252, 186, 3)",
            money,
            speedMissle,
            sizeMissle,
            livesMissle,
            40,
            40
          )
        );
      }
      if (stuff === 5.6) {
        let position = {
          x: game.gameWidth / 2,
          y: game.gameHeight / 2,
        };
        let speed = 5;
        let lives = 2500;
        let time = 350;
        let speedMissle = 5;
        let sizeMissle = 10;
        let livesMissle = 40;
        let money = 2000;
        levelstuff.push(
          new BossLevel4(
            game,
            position,
            speed,
            lives,
            time,
            "rgb(93, 40, 158)",
            money,
            speedMissle,
            sizeMissle,
            livesMissle,
            60,
            60
          )
        );
      }
      if (stuff === 5.7) {
        let position = {
          x: game.gameWidth / 2,
          y: game.gameHeight / 2,
        };
        let speed = 5;
        let lives = 10000;

        let money = 3000;
        levelstuff.push(
          new BossLevel5(
            game,
            position,
            speed,
            lives,
            "rgb(93, 40, 158)",
            money,
            60,
            60,
          )
        );
      }
      if (stuff === 5.8) {
        let position = {
          x: game.gameWidth / 2,
          y: game.gameHeight / 2,
        };
        let speed = 10;
        let lives = 5000;
        let time = 100;
        let speedMissle = 14;
        let sizeMissle = 7;
        let livesMissle = 25;
        let money = 4000;
        levelstuff.push(
          new BossLevel2(
            game,
            position,
            speed,
            lives,
            time,
            "rgb(146, 45, 166)",
            money,
            speedMissle,
            sizeMissle,
            livesMissle,
            40,
            40,
            40,
            500,
          )
        );
      }
      if (stuff === 5.9) {
        let position = {
          x: game.gameWidth / 2,
          y: game.gameHeight / 2,
        };
        let speed = 5;
        let lives = 30000;

        let money = 5000;
        levelstuff.push(
          new BossLevel5(
            game,
            position,
            speed,
            lives,
            "rgb(93, 40, 158)",
            money,
            60,
            60,
            20,
            40,
            15,
            "rgb(0, 255, 255)",
            1000,
            0.02,
            4000,
            40,
            1000,
            7000
          )
        );
      }
      if (stuff === 5.11) {
        let position = {
          x: game.gameWidth / 2,
          y: game.gameHeight / 2,
        };
        let speed = 5;
        let lives = 5000;
        let time = 200;
        let speedMissle = 18;
        let sizeMissle = 12;
        let livesMissle = 40;
        let money = 6006;
        levelstuff.push(
          new BossLevel6(
            game,
            position,
            speed,
            lives,
            time,
            "rgb(82, 45, 135)",
            money,
            speedMissle,
            sizeMissle,
            livesMissle,
            60,
            60
          )
        );
      }


      if (stuff === 6.1) {
        let lives = 10;
        let time = 500;
        let color = "rgb(168, 50, 86)";
        let position = {
          x: 72 * brickIndex + 10,
          y: (-rowIndex + 1) * 50 * 1.1,
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
              y: 5,
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
          y: (-rowIndex + 1) * 50 * 1.1,
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
              y: 5,
            }
          )
        );
      }
      if (stuff === 6.11) {
        let lives = 200;
        let time = 300;
        let color = "rgb(255, 0, 255)";
        let position = {
          x: 72 * brickIndex + 10,
          y: (-rowIndex + 1) * 50 * 1.1,
        };
        let money = 25;
        let sizeMissle = 11;
        let livesMissle = 10;
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
              x: 7,
              y: 7,
            },
            sizeMissle,
            livesMissle
          )
        );
      }
      if (stuff === 6.21) {
        let lives = 200;
        let time = 300;
        let color = "rgb(255, 0, 255)";
        let position = {
          x: 72 * brickIndex + 10,
          y: (-rowIndex + 1) * 50 * 1.1,
        };
        let money = 25;
        let sizeMissle = 11;
        let livesMissle = 10;
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
              x: -7,
              y: 7,
            },
            sizeMissle,
            livesMissle
          )
        );
      }

      if (stuff === 7) {
        let position = {
          x: 72 * brickIndex + 10,
          y: (-rowIndex + 1) * 50 * 1.1,
        };
        let speed = spedeLive;
        levelstuff.push(new Shield(game, position, 10 * 1000, speed));
      }
      if (stuff === 7.1) {
        let position = {
          x: 72 * brickIndex + 10,
          y: (-rowIndex + 1) * 50 * 1.1,
        };
        let speed = spedeLive;
        levelstuff.push(new Shield(game, position, 5 * 1000, speed));
      }

      if (stuff === 8.1) {
        let lives = 200;
        let sizeLaszer = 14;
        let damageLaszerTimePerSecond = 20;
        let damageLaszerPerTime = 6;
        let time = 200;
        let color = "rgb(82, 209, 164)";
        let money = 40;
        let position = {
          x: 72 * brickIndex + 10,
          y: (-rowIndex + 1) * 50 * 1.1,
        };
        levelstuff.push(
          new BasicEnemyLevel4(
            game,
            position,
            speed,
            lives,
            color,
            money,
            sizeLaszer,
            damageLaszerTimePerSecond,
            damageLaszerPerTime
          )
        );
      }
      if (stuff === 8.2) {
        let lives = 200;
        let sizeLaszer = 14;
        let damageLaszerTimePerSecond = 20;
        let damageLaszerPerTime = 6;
        let time = 200;
        let color = "rgb(82, 209, 164)";
        let money = 40;
        let position = {
          x: 72 * brickIndex + 10,
          y: (-rowIndex + 1) * 50 * 1.1,
        };
        levelstuff.push(
          new BasicEnemyLevel4(
            game,
            position,
            speed,
            lives,
            color,
            money,
            sizeLaszer,
            damageLaszerTimePerSecond,
            damageLaszerPerTime,
            2
          )
        );
      }
      if (stuff === 8.3) {
        let lives = 200;
        let sizeLaszer = 14;
        let damageLaszerTimePerSecond = 20;
        let damageLaszerPerTime = 6;
        let time = 200;
        let color = "rgb(82, 209, 164)";
        let money = 40;
        let position = {
          x: 72 * brickIndex + 10,
          y: (-rowIndex + 1) * 50 * 1.1,
        };
        levelstuff.push(
          new BasicEnemyLevel4(
            game,
            position,
            speed,
            lives,
            color,
            money,
            sizeLaszer,
            damageLaszerTimePerSecond,
            damageLaszerPerTime,
            3
          )
        );
      }

      if (stuff === 9.1) {
        let lives = 1000;
        let time = 700;
        let color = "rgb(191, 113, 10)";
        let position = {
          x: 72 * brickIndex + 10,
          y: (-rowIndex + 1) * 50 * 1.1,
        };
        let speedMissle = 7;
        let sizeMissle = 16;
        let livesMissle = 20;
        let money = 60;
        levelstuff.push(
          new BasicEnemyLevel5(
            game,
            position,
            speed,
            lives,
            time,
            color,
            money,
            speedMissle,
            sizeMissle,
            livesMissle,
            700
          )
        );
      }
      if (stuff === 10.1) {
        let lives = 1500;
        let time = 300;
        let color = "rgb(69, 43, 9)";
        let position = {
          x: 72 * brickIndex + 10,
          y: (-rowIndex + 1) * 50 * 1.1,
        };
        let speedMissle = 9;
        let sizeMissle = 10;
        let livesMissle = 20;
        let money = 60;
        levelstuff.push(
          new BasicEnemyLevel6(
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
    [1.1, 0, 1.1, 2, 1.1, 0, 1.1],
  ],
  speedY: 0.8,
  speedX: 0,
  speedLive: 0.9,
};
const level2 = {
  level: [
    [1.1, 0, 0, 1.1, 0, 0, 1.1],
    [1.1, 0, 0, 1.1, 0, 0, 1.1],
    [1.1, 2, 0, 1.1, 0, 2, 1.1],
    [1.1, 1.1, 0, 0, 0, 1.1, 1.1],
    [1.1, 1.1, 0, 3.1, 0, 1.1, 1.1],
    [1.1, 0, 1.1, 0, 1.1, 0, 1.1],
    [1.1, 0, 1.1, 0, 1.1, 0, 1.1],
  ],
  speedY: 0.8,
  speedX: 0,
  speedLive: 0.9,
};
const level3 = {
  level: [
    [1.1, 0, 0, 1.1, 0, 0, 1.1],
    [3.1, 0, 0, 1.1, 0, 0, 3.1],
    [1.1, 2, 0, 1.1, 0, 2, 1.1],
    [1.1, 1.1, 3.1, 0, 3.1, 1.1, 1.1],
    [1.1, 1.1, 0, 2, 0, 1.1, 1.1],
    [1.1, 3.2, 1.1, 0, 1, 3.2, 1.1],
    [1.1, 0, 1.1, 4.1, 1.1, 0, 1.1],
  ],
  speedY: 0.7,
  speedX: 0,
  speedLive: 1,
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
    [2, 0, 0, 7.1, 0, 0, 2],
    [0, 2, 0, 2, 0, 2, 0],
    [4.1, 3.2, 4.1, 3.2, 4.1, 3.2, 4.1],
  ],
  speedY: 0.3,
  speedX: 0,
  speedLive: 0.35,
};
const level5 = {
  level: [[5.1]],
  speedY: 0.7,
  speedX: 0,
  speedLive: 0.8,
};
const level6 = {
  level: [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2],
    [6.1, 2, 6.1, 2, 6.2, 2, 6.2],
    [3.2, 3.1, 3.2, 3.1, 3.2, 3.1, 3.2],
    [4.1, 0, 0, 0, 0, 0, 4.1],
    [0, 4.1, 0, 0, 0, 4.1, 0],
    [1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2],
    [0, 0, 0, 0, 0, 0, 0],
  ],
  speedY: 0.4,
  speedX: 0,
  speedLive: 0.45,
};
const level7 = {
  level: [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 2, 2, 2, 2, 2, 0],
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
    [0, 2, 2, 2, 2, 2, 0],
  ],
  speedY: 0.6,
  speedX: 0,
  speedLive: 0.6,
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
    [0, 2, 0, 2, 0, 2, 0],
  ],
  speedY: 0.6,
  speedX: 0,
  speedLive: 0.6,
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
    [0, 2, 2, 4.2, 2, 2, 0],
  ],
  speedY: 0.6,
  speedX: 0,
  speedLive: 0.6,
};
const level10 = {
  level: [[5.2]],
  speedY: 0,
  speedX: 0,
  speedLive: 0,
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
    [2, 2, 2, 2, 2, 2, 2],
  ],

  speedY: 0.6,
  speedX: 0,
  speedLive: 0.6,
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
    [0, 2, 0, 2, 0, 2, 0],
  ],

  speedY: 0.6,
  speedX: 0,
  speedLive: 0.6,
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
    [0, 2, 0, 2, 0, 2, 0],
  ],

  speedY: 1.8,
  speedX: 0,
  speedLive: 2,
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
    [4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3],
  ],

  speedY: 0.8,
  speedX: 0,
  speedLive: 0.8,
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
    [0, 0, 0, 0, 0, 0, 0],
  ],
  speedY: 0.8,
  speedX: 0,
  speedLive: 0.8,
  positionOflive1: 40,
  positionOflive2: 80,
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
    [4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3],
  ],

  speedY: 0.4,
  speedX: 0,
  speedLive: 0.4,
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
    [0, 0, 0, 4.4, 0, 0, 0],
  ],

  speedY: 0.8,
  speedX: 0,
  speedLive: 0.8,
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
    [4.4, 4.4, 4.4, 4.4, 4.4, 4.4, 4.4],
  ],

  speedY: 0.8,
  speedX: 0,
  speedLive: 0.8,
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
    [4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3],
  ],

  speedY: 0.6,
  speedX: 0,
  speedLive: 0.6,
};
const level20 = {
  level: [[5.4]],
  speedY: 0,
  speedX: 0,
  speedLive: 0,
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
    [2, 2, 2, 2, 2, 2, 2],
  ],

  speedY: 0.8,
  speedX: 0,
  speedLive: 0.8,
};
const level22 = {
  level: [
    [3.2, 3.4, 0, 3.2, 3.4, 0, 3.2],
    [3.3, 4.3, 4.3, 3.3, 4.3, 4.3, 3.3],
    [4.4, 0, 4.4, 7, 4.4, 0, 4.4],
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
    [2, 2, 0, 2, 0, 2, 2],
  ],

  speedY: 0.4,
  speedX: 0,
  speedLive: 0.4,
};
const level23 = {
  level: [
    [0, 0, 0, 7, 0, 0, 0],
    [0, 0, 0, 4.5, 0, 0, 0],
    [1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5],
    [4.3, 4.5, 3.21, 3.21, 3.21, 4.5, 4.3],
    [4.3, 4.4, 4.1, 4.2, 4.1, 4.4, 4.3],
    [1.5, 3.3, 1.5, 3.3, 1.5, 3.3, 1.5],
    [0, 4.5, 0, 4.3, 0, 4.5, 0],
  ],

  speedY: 0.5,
  speedX: 0,
  speedLive: 0.5,
};
const level24 = {
  level: [
    [0, 0, 0, 0, 0, 0, 0],
    [3.21, 4.4, 3.21, 4.4, 3.21, 4.4, 3.21],
    [1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5],
    [4.2, 0, 0, 0, 0, 0, 0],
    [6.1, 4.2, 0, 0, 0, 0, 6.2],
    [0, 6.1, 4.2, 0, 0, 6.2, 0],
    [0, 0, 6.1, 4.2, 6.2, 0, 0],
    [1.5, 0, 0, 1.5, 0, 0, 1.5],
    [1.5, 3.4, 0, 1.5, 3.4, 0, 1.5],
    [1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5],
    [3.3, 3.3, 3.3, 3.3, 3.3, 3.3, 3.3],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [4.1, 4.1, 4.1, 4.1, 4.1, 4.1, 4.1],
    [2.1, 0, 0, 4.5, 0, 0, 2.1],
    [6.2, 6.2, 6.2, 0, 6.1, 6.1, 6.1],
    [6.2, 6.2, 6.2, 0, 6.1, 6.1, 6.1],
    [6.2, 6.2, 6.2, 0, 6.1, 6.1, 6.1],
    [0, 0, 1.5, 1.5, 1.5, 0, 0],
    [0, 0, 1.5, 8.1, 1.5, 0, 0],
    [0, 0, 1.5, 1.5, 1.5, 0, 0],
  ],

  speedY: 0.3,
  speedX: 0,
  speedLive: 0.5,
};
const level25 = {
  level: [[5.5]],
  speedY: 0.3,
  speedX: 0,
  speedLive: 0.5,
};
const level26 = {
  level: [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5],
    [1.5, 8.1, 8.1, 8.1, 8.1, 8.1, 1.5],
    [1.5, 4.5, 2.1, 4.5, 2.1, 4.5, 1.5],
    [6.11, 6.11, 6.11, 0, 6.21, 6.21, 6.21],
    [6.11, 6.11, 6.11, 0, 6.21, 6.21, 6.21],
  ],

  speedY: 0.5,
  speedX: 0,
  speedLive: 0.5,
};
const level27 = {
  level: [
    [1.5, 1.5, 0, 0, 0, 1.5, 1.5],
    [8.2, 1.5, 0, 0, 0, 1.5, 0],
    [0, 1.5, 0, 0, 0, 1.5, 8.3],
    [8.2, 1.5, 0, 0, 0, 1.5, 0],
    [0, 1.5, 0, 0, 0, 1.5, 8.3],
    [6.11, 1.5, 1.5, 1.5, 1.5, 1.5, 6.21],
    [4.5, 1.5, 8.1, 8.1, 8.1, 1.5, 4.5],
  ],

  speedY: 0.8,
  speedX: 0,
  speedLive: 0.5,
};
const level28 = {
  level: [
    [1.5, 1.5, 1.5, 1.5, 0, 0, 0],
    [1.5, 1.5, 1.5, 1.5, 0, 0, 0],
    [8.2, 1.5, 1.5, 1.5, 0, 0, 0],
    [8.2, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5],
    [8.2, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5],
    [6.11, 6.11, 8.1, 8.1, 3.21, 3.21, 3.21],
    [6.11, 6.11, 2.1, 2.1, 3.21, 3.21, 3.21],
    [8.1, 8.1, 2.1, 2.1, 8.1, 8.1, 8.1],
  ],
  speedY: 0.8,
  speedX: 0,
  speedLive: 0.5,
};
const level29 = {
  level: [
    [0, 0, 0, 0, 0, 0, 0],
    [1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5],
    [4.6, 0, 0, 4.6, 0, 0, 4.6],
    [1.5, 8.2, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 8.3, 1.5],
    [1.5, 8.2, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 8.3, 8.1],
    [0, 4.6, 8.1, 8.1, 8.1, 4.6, 0],
  ],
  speedY: 0.8,
  speedX: 0,
  speedLive: 0.5,
};
const level30 = {
  level: [[5.6]],
  speedY: 0.8,
  speedX: 0,
  speedLive: 0.5,
};
const level31 = {
  level: [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5],
    [4.5, 0, 4.5, 0, 4.5, 0, 4.5],
    [1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 7.1, 0, 0, 1.5],
    [3.4, 0, 3.4, 0, 3.4, 0, 1.5],
    [8.1, 8.1, 8.1, 8.1, 8.1, 8.1, 8.1],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 9.1, 0, 0, 0],
    [1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5],
    [1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5],
    [4.5, 8.1, 4.5, 8.1, 4.5, 8.1, 4.5],
    [2.1, 0, 2.1, 0, 2.1, 0, 2.1],
  ],
  speedY: 0.7,
  speedX: 0,
  speedLive: 0.7,
};
const level32 = {
  level: [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [9.1, 0, 0, 9.1, 0, 0, 9.1],
    [0, 0, 0, 0, 0, 0, 0],
    [4.6, 0, 0, 0, 0, 0, 4.6],
    [0, 0, 0, 0, 0, 0, 0],
    [1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5],
    [0, 4.5, 0, 0, 0, 4.5, 0],
    [8.2, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 8.3],
    [0, 3.21, 3.21, 3.21, 3.21, 3.21, 0],
    [4.6, 0, 0, 0, 0, 0, 4.6],
    [0, 0, 0, 0, 0, 0, 0],
    [2.1, 2.1, 2.1, 2.1, 2.1, 2.1, 2.1],
  ],
  speedY: 0.6,
  speedX: 0,
  speedLive: 0.5,
};
const level33 = {
  level: [
    [4.4, 1.2, 1.2, 4.4, 1.2, 1.2, 1.2],
    [4.3, 1.2, 1.2, 7, 4.3, 1.2, 8.3],
    [8.2, 1.2, 4.4, 1.2, 1.2, 1.2, 1.2],
    [1.2, 1.2, 1.2, 1.2, 4.3, 1.2, 1.2],
    [4.3, 1.2, 4.5, 4.3, 1.2, 4.4, 1.2],
    [1.2, 1.2, 1.2, 4.4, 1.2, 1.2, 1.2],
    [1.2, 1.2, 4.3, 1.2, 1.2, 1.2, 8.3],
    [8.2, 4.4, 1.2, 1.2, 1.2, 1.2, 1.2],
    [4.5, 1.2, 1.2, 1.2, 1.2, 4.5, 1.2],
    [1.2, 1.2, 1.2, 4.3, 4.4, 1.2, 1.2],
    [1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2],
    [1.2, 4.3, 4.4, 1.2, 1.2, 1.2, 8.3],
    [8.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2],
    [4.4, 1.2, 1.2, 1.2, 4.5, 1.2, 4.4],
    [1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2],
    [4.4, 1.2, 4.5, 1.2, 1.2, 1.2, 1.2],
    [1.2, 4.4, 1.2, 1.2, 4.5, 1.2, 8.3],
    [8.2, 1.2, 1.2, 1.2, 4.3, 4.4, 4.5],
    [4.5, 1.2, 1.2, 4.4, 1.2, 1.2, 1.2],
    [4.3, 1.2, 4.5, 1.2, 1.2, 1.2, 1.2],
    [1.2, 4.3, 1.2, 4.4, 1.2, 1.2, 4.4],
    [1.2, 4.4, 1.2, 4.5, 1.2, 4.3, 8.3],
    [8.2, 1.2, 1.2, 4.4, 1.2, 1.2, 1.2],
    [4.5, 1.2, 1.2, 1.2, 4.5, 1.2, 1.2],
    [4.4, 1.2, 1.2, 4.3, 1.2, 1.2, 4.3],
    [1.2, 4.3, 1.2, 1.2, 1.2, 1.2, 1.2],
    [1.2, 4.4, 1.2, 4.3, 4.4, 1.2, 8.3],
    [8.2, 4.5, 1.2, 1.2, 4.3, 1.2, 1.2],
    [4.3, 1.2, 1.2, 4.4, 4.5, 4.4, 1.2],
    [1.2, 4.4, 1.2, 1.2, 1.2, 1.2, 1.2],
    [4.4, 4.3, 1.2, 4.5, 4.3, 1.2, 1.2],
    [1.2, 1.2, 4.5, 1.2, 1.2, 1.2, 8.3],
    [8.2, 1.2, 1.2, 4.3, 1.2, 4.3, 1.2],
    [1.2, 4.3, 1.2, 1.2, 1.2, 4.5, 1.2],
    [4.5, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2],
    [1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 4.3],
  ],
  speedY: 1.2,
  speedX: 0,
  speedLive: 1.2,
};
const level34 = {
  level: [
    [0, 2.1, 0, 2.1, 0, 2.1, 0],
    [1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5],
    [0, 0, 0, 0, 4.21, 0, 0],
    [0, 4.6, 0, 4.6, 0, 4.6, 0],
    [4.6, 4.4, 4.6, 4.4, 4.6, 4.4, 4.6],
    [4.4, 0, 4.4, 4.4, 0, 4.4, 4.4],
    [8.1, 0, 0, 8.1, 0, 0, 8.1],
    [4.4, 0, 9.1, 0, 9.1, 0, 4.4],
    [2.1, 2.1, 2.1, 2.1, 2.1, 2.1, 2.1],
  ],
  speedY: 0.25,
  speedX: 0,
  speedLive: 0.25,
};
const level35 = {
  level: [[5.7]],
  speedY: 0.8,
  speedX: 0,
  speedLive: 0.5,
};
const level36 = {
  level: [
    [0, 0, 0, 0, 0, 0, 0],
    [1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5],
    [4.5, 4.4, 4.4, 4.4, 4.4, 4.4, 4.5],
    [0, 0, 0, 4.6, 0, 0, 0],
    [8.1, 8.1, 8.1, 0, 8.1, 8.1, 8.1],
    [9.1, 8.2, 0, 0, 0, 8.3, 9.1],
    [4.4, 4.4, 4.4, 4.6, 4.4, 4.4, 4.4],
    [4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3],

  ],
  speedY: 0.35,
  speedX: 0,
  speedLive: 0.35,
};
const level37 = {
  level: [
    [8.2, 9.1, 4.6, 4.5, 4.6, 9.1, 8.3],
    [4.5, 0, 3.21, 0, 3.21, 0, 4.5],
    [1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5],
    [0, 4.6, 0, 9.1, 0, 4.6, 0],
    [8.1, 0, 8.1, 0, 8.1, 0, 8.1],
    [0, 3.21, 0, 3.21, 0, 3.21, 0],
    [4.6, 6.11, 4.6, 0, 4.6, 6.21, 4.6],
    [4.4, 4.4, 4.4, 8.1, 4.4, 4.4, 4.4],
    [6.11, 6.11, 0, 0, 0, 6.21, 6.21],
    [6.11, 6.11, 0, 0, 0, 6.21, 6.21],
    [6.11, 6.11, 8.1, 8.1, 8.1, 6.21, 6.21],
  ],
  speedY: 0.25,
  speedX: 0,
  speedLive: 0.35,
};
const level38 = {
  level: [
    [4.1, 4.1, 4.1, 4.1, 4.1, 4.1, 4.1],
    [4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3],
    [4.4, 4.4, 4.4, 4.4, 4.4, 4.4, 4.4],
    [4.5, 4.5, 4.5, 4.5, 4.5, 4.5, 4.5],
    [4.4, 4.4, 4.4, 4.4, 4.4, 4.4, 4.4],
    [4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3],
    [4.1, 4.1, 4.1, 4.1, 4.1, 4.1, 4.1],
    [4.1, 4.1, 4.1, 4.1, 4.1, 4.1, 4.1],
    [4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3],
    [4.4, 4.4, 4.4, 4.4, 4.4, 4.4, 4.4],
    [4.5, 4.5, 4.5, 4.5, 4.5, 4.5, 4.5],
    [4.4, 4.4, 4.4, 4.4, 4.4, 4.4, 4.4],
    [4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3],
    [4.1, 4.1, 4.1, 4.1, 4.1, 4.1, 4.1],
    [4.1, 4.1, 4.1, 4.1, 4.1, 4.1, 4.1],
    [4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3],
    [4.4, 4.4, 4.4, 4.4, 4.4, 4.4, 4.4],
    [4.5, 4.5, 4.5, 4.5, 4.5, 4.5, 4.5],
    [4.4, 4.4, 4.4, 4.4, 4.4, 4.4, 4.4],
    [4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3],
    [4.1, 4.1, 4.1, 4.1, 4.1, 4.1, 4.1],

  ],
  speedY: 0.5,
  speedX: 0,
  speedLive: 0.5,
};
const level39 = {
  level: [
    [4.5, 4.5, 4.5, 4.5, 4.5, 4.5, 4.5],
    [8.2, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 8.3],
    [4.6, 6.11, 4.6, 8.1, 4.6, 6.21, 4.6],
    [6.11, 4.6, 6.11, 4.6, 6.21, 4.6, 6.21],
    [8.2, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 8.3],
    [4.4, 4.4, 4.4, 4.4, 4.4, 4.4, 4.4],
    [4.4, 4.4, 4.4, 4.4, 4.4, 4.4, 4.4],
    [8.2, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 8.3],
    [4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3],
    [4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3],
    [8.2, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 8.3],
    [0, 3.21, 0, 8.1, 0, 3.21, 0],
    [3.21, 0, 3.21, 0, 3.21, 0, 3.21],
    [4.6, 4.5, 4.6, 4.5, 4.6, 4.5, 4.6],
    [4.5, 4.6, 4.5, 4.6, 4.5, 4.6, 4.5],
  ],
  speedY: 0.6,
  speedX: 0,
  speedLive: 0.8,
};
const level40 = {
  level: [[5.8]],
  speedY: 0.8,
  speedX: 0,
  speedLive: 0.5,
};
const level41 = {
  level: [
    [1.5, 4.6, 1.5, 1.6, 1.5, 4.6, 1.5],
    [1.5, 4.5, 1.5, 8.2, 1.5, 4.5, 1.5],
    [1.5, 9.1, 1.5, 8.3, 1.5, 9.1, 1.5],
    [1.5, 3.31, 1.5, 8.1, 1.5, 3.31, 1.5]
  ],
  speedY: 0.3,
  speedX: 0,
  speedLive: 0.8,
};
const level42 = {
  level: [
    [0, 0, 0, 0, 0, 0, 0],
    [8.1, 1.6, 1.6, 1.6, 1.6, 0, 0],
    [8.1, 1.6, 9.1, 9.1, 1.6, 3.4, 0],
    [8.1, 1.6, 9.1, 9.1, 1.6, 0, 0],
    [8.1, 1.6, 1.6, 1.6, 1.6, 8.1, 8.1],
    [8.1, 4.6, 0, 4.6, 0, 4.6, 0],
    [8.1, 0, 4.5, 0, 4.5, 0, 0],
  ],
  speedY: 0.3,
  speedX: 0,
  speedLive: 0.8,
};
const level43 = {
  level: [
    [2.1, 0, 0, 0, 0, 0, 2.1],
    [0, 0, 0, 7.1, 0, 0, 0],
    [10.1, 0, 0, 10.1, 0, 0, 10.1],
    [1.6, 1.6, 1.6, 1.6, 1.6, 1.6, 1.6],
    [9.1, 8.1, 8.1, 0, 8.1, 8.1, 9.1],
    [4.6, 0, 0, 0, 0, 0, 4.6],
    [2.1, 0, 0, 0, 0, 0, 2.1],

  ],
  speedY: 0.3,
  speedX: 0,
  speedLive: 0.3,
};
const level44 = {
  level: [
    [1.6, 1.6, 0, 0, 0, 1.6, 1.6],
    [10.1, 1.6, 0, 0, 0, 1.6, 10.1],
    [10.1, 1.6, 0, 0, 0, 1.6, 10.1],
    [10.1, 1.6, 0, 0, 0, 1.6, 10.1],
    [1.6, 1.6, 0, 0, 0, 1.6, 1.6],

  ],
  speedY: 0.3,
  speedX: 0,
  speedLive: 0.8,
};
const level45 = {
  level: [[5.9]],
  speedY: 0.3,
  speedX: 0,
  speedLive: 0.8,
};
const level46 = {
  level: [
    [0, 0, 0, 0, 0, 0, 0],
    [4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3],
    [4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3],
    [1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5],
    [1.6, 1.6, 1.6, 1.6, 1.6, 1.6, 1.6],
    [4.4, 4.4, 4.4, 4.4, 4.4, 4.4, 4.4],
    [4.5, 4.5, 4.5, 4.5, 4.5, 4.5, 4.5],
    [4.6, 4.6, 4.6, 4.6, 4.6, 4.6, 4.6],

  ],
  speedY: 0.7,
  speedX: 0,
  speedLive: 0.7,
};
const level47 = {
  level: [
    [0, 0, 0, 0, 0, 0, 0],
    [10.1, 0, 0, 0, 0, 0, 10.1],
    [4.5, 10.1, 0, 0, 0, 10.1, 4.5],
    [9.1, 4.5, 10.1, 0, 10.1, 4.5, 9.1],
    [1.6, 1.6, 1.6, 1.6, 1.6, 1.6, 1.6],
    [8.2, 0, 0, 8.1, 0, 0, 8.3],
    [3.31, 3.31, 3.31, 3.31, 3.31, 3.31, 3.31],


  ],
  speedY: 0.4,
  speedX: 0,
  speedLive: 0.8,
};
const level48 = {
  level: [
    [0, 0, 0, 0, 0, 0, 0],
    [1.6, 1.6, 1.6, 1.6, 1.6, 1.6, 1.6],
    [8.2, 1.6, 10.1, 10.1, 10.1, 1.6, 8.3],
    [1.6, 1.6, 10.1, 9.1, 10.1, 1.6, 1.6],
    [8.2, 1.6, 10.1, 10.1, 10.1, 1.6, 8.3],
    [1.6, 1.6, 1.6, 1.6, 1.6, 1.6, 1.6],
    [8.1, 1.6, 8.1, 1.6, 8.1, 1.6, 8.1],



  ],
  speedY: 0.3,
  speedX: 0,
  speedLive: 0.8,
};
const level49 = {
  level: [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [1.6, 1.6, 1.6, 1.6, 1.6, 1.6, 1.6],
    [3.31, 3.31, 3.31, 3.31, 3.31, 3.31, 3.31],
    [2.1, 2.1, 2.1, 2.1, 2.1, 2.1, 2.1],
    [9.1, 8.1, 4.6, 10.1, 4.6, 8.1, 9.1],
    [4.5, 9.1, 8.1, 4.6, 8.1, 9.1, 4.5],
    [0, 4.5, 9.1, 8.1, 9.1, 4.5, 0],
    [0, 0, 4.5, 9.1, 4.5, 0, 0],


  ],
  speedY: 0.3,
  speedX: 0,
  speedLive: 0.3,
};
const level50 = {
  level: [[5.11]],
  speedY: 0.3,
  speedX: 0,
  speedLive: 0.8,
};



const level53 = {
  level: [
    [4.4, 1.2, 1.2, 4.4, 1.2, 1.2, 1.2],
    [4.3, 1.2, 1.2, 1.2, 4.3, 1.2, 8.3],
    [8.2, 1.2, 4.4, 1.2, 1.2, 1.2, 1.2],
    [1.2, 1.2, 1.2, 1.2, 4.3, 1.2, 1.2],
    [4.3, 1.2, 4.5, 4.3, 1.2, 4.4, 1.2],
    [1.2, 1.2, 1.2, 4.4, 1.2, 1.2, 1.2],
    [1.2, 1.2, 4.3, 1.2, 1.2, 1.2, 8.3],
    [8.2, 4.4, 1.2, 1.2, 1.2, 1.2, 1.2],
    [4.5, 1.2, 1.2, 1.2, 1.2, 4.5, 1.2],
    [1.2, 1.2, 1.2, 4.3, 4.4, 1.2, 1.2],
    [1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2],
    [1.2, 4.3, 4.4, 1.2, 1.2, 1.2, 8.3],
    [8.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2],
    [4.4, 1.2, 1.2, 1.2, 4.5, 1.2, 4.4],
    [1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2],
    [4.4, 1.2, 4.5, 1.2, 1.2, 1.2, 1.2],
    [1.2, 4.4, 1.2, 1.2, 4.5, 1.2, 8.3],
    [8.2, 1.2, 1.2, 1.2, 4.3, 4.4, 4.5],
    [4.5, 1.2, 1.2, 4.4, 1.2, 1.2, 1.2],
    [4.3, 1.2, 4.5, 1.2, 1.2, 1.2, 1.2],
    [1.2, 4.3, 1.2, 4.4, 1.2, 1.2, 4.4],
    [1.2, 4.4, 1.2, 4.5, 1.2, 4.3, 8.3],
    [8.2, 1.2, 1.2, 4.4, 1.2, 1.2, 1.2],
    [4.5, 1.2, 1.2, 1.2, 4.5, 1.2, 1.2],
    [4.4, 1.2, 1.2, 4.3, 1.2, 1.2, 4.3],
    [1.2, 4.3, 1.2, 1.2, 1.2, 1.2, 1.2],
    [1.2, 4.4, 1.2, 4.3, 4.4, 1.2, 8.3],
    [8.2, 4.5, 1.2, 1.2, 4.3, 1.2, 1.2],
    [4.3, 1.2, 1.2, 4.4, 4.5, 4.4, 1.2],
    [1.2, 4.4, 1.2, 1.2, 1.2, 1.2, 1.2],
    [4.4, 4.3, 1.2, 4.5, 4.3, 1.2, 1.2],
    [1.2, 1.2, 4.5, 1.2, 1.2, 1.2, 8.3],
    [8.2, 1.2, 1.2, 4.3, 1.2, 4.3, 1.2],
    [1.2, 4.3, 1.2, 1.2, 1.2, 4.5, 1.2],
    [4.5, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2],
    [1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 4.3],
  ],
  speedY: 2,
  speedX: 0,
  speedLive: 2,
};
const level54 = {
  level: [
    [0, 0, 0, 0, 0, 0, 0],
    [1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5],
    [4.21, 0, 4.21, 0, 4.21, 0, 4.21],
    [4.5, 4.6, 4.5, 4.6, 4.5, 4.6, 4.5],
    [4.6, 4.4, 4.6, 4.4, 4.6, 4.4, 4.6],
    [4.4, 4.4, 4.4, 4.4, 4.4, 4.4, 4.4],
    [8.1, 8.1, 8.1, 8.1, 8.1, 8.1, 8.1],
    [9.1, 0, 9.1, 0, 9.1, 0, 9.1],
    [2.1, 2.1, 2.1, 2.1, 2.1, 2.1, 2.1],
  ],
  speedY: 0.6,
  speedX: 0,
  speedLive: 0.5,
};

const level43a = {
  level: [
    [0, 0, 0, 0, 0, 0, 0],
    [10.1, 0, 0, 10.1, 0, 0, 10.1],
    [1.6, 1.6, 1.6, 1.6, 1.6, 1.6, 1.6],
    [9.1, 8.1, 8.1, 9.1, 8.1, 8.1, 9.1],
    [4.6, 4.6, 0, 0, 0, 4.6, 4.6],
    [0, 0, 0, 0, 0, 0, 0],

  ],
  speedY: 0.3,
  speedX: 0,
  speedLive: 0.8,
};
