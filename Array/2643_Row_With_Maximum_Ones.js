/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var rowAndMaximumOnes = function (mat) {
  let res = Array(2).fill(0);
  let key = 0;
  let max = -1;
  for (let i = 0; i < mat.length; i++) {
    let count = mat[i].reduce(
      (count, num) => (num === 1 ? count + 1 : count),
      0
    );
    if (max < count) {
      max = count;
      key = i;
    }

    if (max === count && key > i) {
      key = i;
    }
  }
  res[0] = key;
  res[1] = max;
  return res;
};

// let answer = rowAndMaximumOnes([
//   [0, 1],
//   [1, 0],
// ]);
let answer = rowAndMaximumOnes([[1, 0, 0]]);
// let answer = rowAndMaximumOnes([
//   [0, 0, 0],
//   [0, 1, 1],
// ]);
console.log(answer);
