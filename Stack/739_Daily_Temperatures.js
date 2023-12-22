/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  let ans = Array(temperatures.length).fill(0);
  let stack = [];
  for (let i = 0; i < temperatures.length; i++) {
    while (
      stack.length !== 0 &&
      temperatures[stack[stack.length - 1]] < temperatures[i]
    ) {
      ans[stack[stack.length - 1]] = i - stack[stack.length - 1];
      stack.pop();
    }
    stack.push(i);
  }
  return ans;
};

let answer = dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]);
console.log(answer);
