/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function (nums, target) {
  let sorted = nums.sort((a, b) => a - b);
  //   console.log(sorted);
  let left = 0;
  let right = sorted.length - 1;
  let mid;
  let output = [];
  while (right >= left) {
    mid = left + Math.floor((right - left) / 2);
    if (sorted[mid] === target) {
      output.push(mid);
      left = mid - 1;
      right = mid + 1;
      while (sorted[left] === target) {
        output.push(left);
        left--;
      }
      while (sorted[right] === target) {
        output.push(right);
        right++;
      }
      break;
    } else if (sorted[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return output.sort((a, b) => a - b);
};

let answer = targetIndices([1, 2, 5, 2, 3], 2);
console.log(answer);
