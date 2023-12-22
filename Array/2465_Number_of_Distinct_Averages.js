/**
 * @param {number[]} nums
 * @return {number}
 */
var distinctAverages = function (nums) {
  let sorted = nums.sort((a, b) => a - b);
  //   console.log(sorted);
  let set = new Set();
  while (sorted.length > 0) {
    let max = sorted.pop();
    let min = sorted.shift();

    set.add((max + min) / 2);
  }
  return set.size;
};

// let answer = distinctAverages([4, 1, 4, 0, 3, 5]);
let answer = distinctAverages([1, 100]);
console.log(answer);
