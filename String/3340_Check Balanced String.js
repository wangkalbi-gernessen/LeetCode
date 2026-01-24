/**
 * @param {string} num
 * @return {boolean}
 */
var isBalanced = function (num) {
  let oddIndicesSum = 0;
  let evenIndicesSum = 0;

  for (let i = 0; i < num.length; i++) {
    if (i % 2 === 0) {
      evenIndicesSum += parseInt(num[i]);
    } else {
      oddIndicesSum += parseInt(num[i]);
    }
  }

  return oddIndicesSum === evenIndicesSum;
};

const num = "1234";
console.log(isBalanced(num));
