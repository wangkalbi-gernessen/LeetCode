/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumRightShifts = function (nums) {
  let original = [...nums];
  let sorted = nums.sort((a, b) => a - b);
  //   console.log(original);
  //   console.log(sorted);

  let i = 0;
  let res = 0;
  while (i < nums.length) {
    if (original.toString() === sorted.toString()) {
      break;
    }
    original.unshift(original.pop());

    res++;
    i++;
  }

  if (res === nums.length) {
    res = -1;
  }

  return res;
};

// let answer = minimumRightShifts([3, 4, 5, 1, 2]);
// let answer = minimumRightShifts([1, 3, 5]);
let answer = minimumRightShifts([2, 1, 4]);
console.log(answer);
