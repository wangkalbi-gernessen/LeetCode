/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
var getMinDistance = function (nums, target, start) {
  let minDistance = nums.length + 1;
  let distance;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      distance = Math.abs(i - start);
    }

    if (distance < minDistance) {
      minDistance = distance;
    }
  }
  return minDistance;
};

// let answer = getMinDistance([1, 2, 3, 4, 5], 5, 3);
let answer = getMinDistance([5, 3, 6], 5, 2);
console.log(answer);
