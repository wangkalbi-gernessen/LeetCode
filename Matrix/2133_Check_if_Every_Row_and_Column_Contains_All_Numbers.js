/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var checkValid = function (matrix) {
  let n = matrix.length;

  for (let i = 0; i < n; i++) {
    let val = 1;
    while (val <= n) {
      if (matrix[i].includes(val) === false) {
        return false;
      }
      val++;
    }

    let k = 0;
    let set = new Set();

    while (k < n) {
      set.add(matrix[k][i]);
      k++;
    }

    if (set.size !== n) {
      return false;
    }
  }
  return true;
};

// let answer = checkValid([
//   [1, 2, 3],
//   [3, 1, 2],
//   [2, 3, 1],
// ]);
let answer = checkValid([
  [1, 1, 1],
  [1, 2, 3],
  [1, 2, 3],
]);
console.log(answer);
