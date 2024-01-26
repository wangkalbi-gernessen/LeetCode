/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    let j = i + 1;
    let times = 1;
    let stack = [nums[i]];
    while (times <= nums.length - 1) {
      if (stack[stack.length - 1] < nums[j % nums.length]) {
        stack[stack.length - 1] = nums[j % nums.length];
        break;
      }

      j++;
      times++;
    }

    if (stack[stack.length - 1] === nums[i]) {
      res.push(-1);
    } else {
      res.push(stack[stack.length - 1]);
    }
  }
  return res;
};

let answer = nextGreaterElements([1, 2, 3, 4, 3]);
console.log(answer);
