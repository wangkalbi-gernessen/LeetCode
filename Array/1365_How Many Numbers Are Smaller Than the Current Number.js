/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  const smallers = [];
  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = 0; j < nums.length; j++) {
      if (i !== j && nums[i] > nums[j]) {
        count++;
      }
    }

    smallers.push(count);
  }

  return smallers;
};

const nums = [8, 1, 2, 2, 3];
console.log(smallerNumbersThanCurrent(nums));
