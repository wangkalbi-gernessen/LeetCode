/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
  let stack = [];
  let j = 0;
  for (let nums of pushed) {
    stack.push(nums);
    while (stack.length > 0 && stack[stack.length - 1] === popped[j]) {
      stack.pop();
      j++;
    }
  }
  if (stack.length === 0) {
    return true;
  }
  return false;
};

let answer = validateStackSequences([1, 2, 3, 4, 5], [4, 5, 3, 2, 1]);
console.log(answer);
