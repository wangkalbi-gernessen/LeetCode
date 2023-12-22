/**
 * @param {number[]} nums
 * @return {number}
 */
var findNonMinOrMax = function (nums) {
  let sorted = nums.sort((a, b) => a - b);
  let filtered = sorted.filter(
    (item, index) => index !== 0 && index !== sorted.length - 1
  );
  return filtered.length === 0 ? -1 : filtered[0];
};

let answer = findNonMinOrMax([3, 2, 1, 4]);
console.log(answer);
