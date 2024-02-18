/**
 * @param {number} money
 * @param {number} children
 * @return {number}
 */
var distMoney = function (money, children) {
  // 1.Return -1
  if (money < children || (money === 4 && children === 1)) {
    return -1;
  }
  // 2.Return the number when 8 dollars are distributed to everyone equally
  if (money === children * 8) {
    return children;
  }
  // 3.Return the number of children when total amount exceeds money by sharing 8 dollars equally with children
  if (money > children * 8) {
    return children - 1;
  }
  // 4.Return the number of children when
  if (money === children * 8 - 4) {
    return children - 2;
  }
  // 5.Other ways
  return Math.floor((money - children) / 7);
};

// let answer = distMoney(20, 3);
// let answer = distMoney(16, 2);
let answer = distMoney(16, 4);
console.log(answer);
