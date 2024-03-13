/**
 * @param {number[]} apple
 * @param {number[]} capacity
 * @return {number}
 */
var minimumBoxes = function (apple, capacity) {
  let m = capacity.length;
  let appleSum = apple.reduce((a, b) => a + b, 0);
  //   console.log(appleSum);
  capacity = capacity.sort((a, b) => b - a);
  let res;
  for (let i = 0; i < m; i++) {
    if (appleSum > capacity[i]) {
      appleSum -= capacity[i];
    } else {
      res = i + 1;
      break;
    }
  }
  return res;
};

let answer = minimumBoxes([1, 3, 2], [4, 3, 1, 5, 2]);
console.log(answer);
