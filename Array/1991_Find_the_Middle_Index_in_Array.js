/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function (nums) {
  let leftSum = 0;
  for (let i = 0; i < nums.length; i++) {
    leftSum += nums[i - 1] ?? 0;
    let rightSum = nums
      .slice(i + 1, nums.length)
      .reduce((accumlator, num) => accumlator + num, 0);

    if (leftSum === rightSum) {
      return i;
    }
  }
  return -1;
};

let answer = findMiddleIndex([2, 3, -1, 8, 4]);
console.log(answer);
