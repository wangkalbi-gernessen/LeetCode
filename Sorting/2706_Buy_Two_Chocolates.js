/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function (prices, money) {
  prices = prices.sort((a, b) => a - b);
  console.log(prices);
  let sum = money - (prices[0] + prices[1]);
  console.log(sum);
  return sum >= 0 ? sum : money;
};

// let answer = buyChoco([1, 2, 2], 3);
let answer = buyChoco([3, 2, 3], 3);
console.log(answer);
