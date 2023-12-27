/**
 * @param {number} num
 * @param {number} t
 * @return {number}
 */
var theMaximumAchievableX = function (num, t) {
  let i = 1;
  while (i <= t) {
    num++;
    i++;
  }
  return num + t;
};

let answer = theMaximumAchievableX(4, 1);
console.log(answer);
