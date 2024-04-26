/**
 * @param {number[]} gifts
 * @param {number} k
 * @return {number}
 */
var pickGifts = function (gifts, k) {
  let seconds = 0;
  while (seconds < k) {
    let max = Math.max(...gifts);
    let indexOfMax = gifts.indexOf(max);
    gifts[indexOfMax] = Math.floor(Math.sqrt(max));
    seconds++;
  }
  let sum = gifts.reduce((accumlator, num) => accumlator + num, 0);
  return sum;
};

let answer = pickGifts([25, 64, 9, 4, 100], 4);
console.log(answer);
