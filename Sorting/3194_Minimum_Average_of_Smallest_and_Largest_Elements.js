/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverage = function (nums) {
  let avgs = [];
  let sorted = nums.sort((a, b) => a - b);
  console.log(sorted);

  let left = 0;
  let right = sorted.length - 1;
  while (left < right) {
    let min = sorted[left];
    let max = sorted[right];
    avgs.push((min + max) / 2);
    left++;
    right--;
  }
  console.log(avgs);
  return Math.min(...avgs);
};

let answer = minimumAverage([7, 8, 3, 4, 15, 13, 4, 1]);
console.log(answer);
