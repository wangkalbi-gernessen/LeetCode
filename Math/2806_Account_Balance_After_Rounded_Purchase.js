/**
 * @param {number} purchaseAmount
 * @return {number}
 */
var accountBalanceAfterPurchase = function (purchaseAmount) {
  return 100 - Math.round(purchaseAmount / 10) * 10;
};

let answer = accountBalanceAfterPurchase(15);
console.log(answer);
