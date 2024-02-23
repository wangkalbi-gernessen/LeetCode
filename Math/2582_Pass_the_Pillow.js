/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
var passThePillow = function (n, time) {
  let currentPillow = 1;
  let currentTime = 0;
  let oppositeDirection = false;
  while (currentTime < time) {
    if (oppositeDirection === true) {
      currentPillow--;
    } else {
      currentPillow++;
    }

    if (currentPillow === n) {
      oppositeDirection = true;
    }

    if (currentPillow === 1) {
      oppositeDirection = false;
    }

    currentTime++;
  }
  return currentPillow;
};

// let answer = passThePillow(4, 5);
// let answer = passThePillow(3, 5);
let answer = passThePillow(18, 38);
console.log(answer);
