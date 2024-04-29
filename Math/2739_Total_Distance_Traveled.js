/**
 * @param {number} mainTank
 * @param {number} additionalTank
 * @return {number}
 */
var distanceTraveled = function (mainTank, additionalTank) {
  let max = 0;
  while (mainTank >= 5) {
    max += 5;
    mainTank -= 5;
    if (additionalTank >= 1) {
      mainTank += 1;
      additionalTank--;
    }
  }

  return (max + mainTank) * 10;
};

// let answer = distanceTraveled(5, 10);
// let answer = distanceTraveled(1, 2);
// let answer = distanceTraveled(6, 1);
let answer = distanceTraveled(9, 2);
console.log(answer);
