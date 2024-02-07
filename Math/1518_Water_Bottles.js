/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function (numBottles, numExchange) {
  let res = numBottles;
  while (numBottles >= numExchange) {
    let reminder = numBottles % numExchange;
    numBottles = Math.floor(numBottles / numExchange);
    res += numBottles;

    numBottles += reminder;
  }
  return res;
};

// let answer = numWaterBottles(9, 3);
// let answer = numWaterBottles(15, 4);
let answer = numWaterBottles(15, 8);
console.log(answer);
