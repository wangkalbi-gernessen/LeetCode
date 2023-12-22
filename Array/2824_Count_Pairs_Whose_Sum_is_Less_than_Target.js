/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function (nums, target) {
  let sorted = nums.sort((a, b) => a - b);
  console.log(sorted);
  let first = 0;
  let last = sorted.length - 1;
  let count = 0;
  while (first < last) {
    if (first < last && sorted[first] + sorted[last] < target) {
      count += last - first;
      first++;
    } else {
      last--;
    }
  }
  return count;
};

let answer = countPairs([-1, 1, 2, 3, 1], 2);
// let answer = countPairs([-6, 2, 5, -2, -7, -1, 3], -2);
console.log(answer);
