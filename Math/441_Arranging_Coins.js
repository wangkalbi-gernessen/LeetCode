/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
  //   let res = Array(n + 1).fill(0);
  let i = 1;
  let coinsSum = 0;
  while (i <= n) {
    coinsSum = coinsSum + i;
    if (coinsSum === n) {
      return i;
    }
    if (coinsSum > n) {
      return i - 1;
    }
    i++;
  }
  return step;
};

let answer = arrangeCoins(5);
console.log(answer);

// 1 -> 3 -> 6 -> 10 -> 15
