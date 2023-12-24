/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function (nums) {
  let total = nums.reduce((accumlator, num) => accumlator * num, 1);
  //   console.log(total);
  return total > 0 ? 1 : total < 0 ? -1 : 0;
};

// let answer = arraySign([-1, -2, -3, -4, 3, 2, 1]);
let answer = arraySign([-1, 1, -1, 1, -1]);
console.log(answer);
