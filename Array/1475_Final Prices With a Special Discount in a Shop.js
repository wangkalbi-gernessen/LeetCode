/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function (prices) {
  let discounted = [];
  for (let i = 0; i < prices.length; i++) {
    let isFound = false;
    for (let j = i + 1; j < prices.length; j++) {
      if (i < j && prices[i] >= prices[j]) {
        discounted.push(prices[i] - prices[j]);
        isFound = true;
        break;
      }
    }

    if (!isFound) {
      discounted.push(prices[i]);
    }
  }
  return discounted;
};

const prices = [8, 4, 6, 2, 3];
console.log(finalPrices(prices));
