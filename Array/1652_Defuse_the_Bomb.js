/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function (code, k) {
  let zeros = new Array(code.length).fill(0);
  let res = [];
  let sum;
  let j;
  if (k === 0) {
    return zeros;
  } else if (k > 0) {
    for (let i = 0; i < code.length; i++) {
      sum = 0;
      j = 1;
      while (j <= k) {
        sum += code[(i + j) % code.length];
        j++;
      }
      res.push(sum);
    }
  } else {
    k = -1 * k;
    for (let i = 0; i < code.length; i++) {
      sum = 0;
      j = 1;
      while (j <= k) {
        sum += code[(i + code.length - j) % code.length];
        j++;
      }
      res.push(sum);
    }
  }
  return res;
};

// let answer = decrypt([5, 7, 1, 4], 3);
let answer = decrypt([2, 4, 9, 3], -2);
console.log(answer);
