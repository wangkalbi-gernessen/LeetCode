/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
var countBalls = function (lowLimit, highLimit) {
  let hashmap = new Map();
  for (let i = lowLimit; i <= highLimit; i++) {
    let sum = i
      .toString()
      .split("")
      .reduce((sum, num) => sum + parseInt(num), 0);
    // console.log(sum);
    if (!hashmap.has(sum)) {
      hashmap.set(sum, 1);
    } else {
      hashmap.set(sum, hashmap.get(sum) + 1);
    }
  }
  //   console.log(hashmap);
  let max = [...hashmap.values()];
  return Math.max(...max);
};

let answer = countBalls(5, 15);
console.log(answer);
