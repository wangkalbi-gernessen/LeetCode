/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function (nums, original) {
  let status = true;
  let finalValue = original;
  while (status) {
    if (nums.includes(finalValue)) {
      finalValue = finalValue * 2;
      //   console.log(finalValue);
    } else {
      status = false;
    }
  }
  return finalValue;
};

let answer = findFinalValue([5, 3, 6, 1, 12], 3);
// let answer = findFinalValue([2, 7, 9], 4);
console.log(answer);
