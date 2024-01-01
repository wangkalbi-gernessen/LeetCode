/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function (s) {
  let maxScore = 0;
  let n = s.length;
  let i = 0;
  while (i < n - 1) {
    let left = s
      .substring(0, i + 1)
      .toString()
      .split("")
      .reduce((count, num) => (num === "0" ? count + 1 : count), 0);
    let right = s
      .substring(i + 1, n)
      .toString()
      .split("")
      .reduce((count, num) => (num === "1" ? count + 1 : count), 0);

    if (maxScore < left + right) {
      maxScore = left + right;
    }

    i++;
  }
  return maxScore;
};

// let answer = maxScore("011101");
// let answer = maxScore("00111");
let answer = maxScore("1111");
console.log(answer);
