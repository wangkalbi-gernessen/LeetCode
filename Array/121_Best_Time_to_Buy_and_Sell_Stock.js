/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let maxProfit = 0;
  let buy = prices[0];
  for (let i = 1; i < prices.length; i++) {
    if (buy > prices[i]) {
      buy = prices[i];
    } else {
      maxProfit = Math.max(maxProfit, prices[i] - buy);
    }
  }
  return maxProfit;
};

// let answer = maxProfit([7, 1, 5, 3, 6, 4]);
let answer = maxProfit([3, 8, 1]);
// let answer = maxProfit([7, 6, 4, 3, 1]);
console.log(answer);
