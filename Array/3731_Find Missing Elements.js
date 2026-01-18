/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findMissingElements = function (nums) {
  const max = Math.max(...nums);
  const min = Math.min(...nums);

  // console.log(max, min);

  const missNums = [];
  let i = min;
  while (i <= max) {
    if (!nums.includes(i)) {
      missNums.push(i);
    }
    i++;
  }
  return missNums;
};

const nums = [1, 4, 2, 5];
console.log(findMissingElements(nums));
