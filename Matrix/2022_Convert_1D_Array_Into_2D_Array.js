/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function (original, m, n) {
  let res = [];
  let size = original.length;
  if (size / n !== m) {
    return res;
  } else {
    // let rows = [];
    while (size > 0) {
      let sliced = original.splice(0, n);
      console.log(sliced);
      res.push(sliced);
      size -= n;
    }
  }
  return res;
};

let answer = construct2DArray([1, 2, 3, 4], 2, 2);
// let answer = construct2DArray([1, 2, 3], 1, 3);
// let answer = construct2DArray([1, 2], 1, 1);
// let answer = construct2DArray([1, 2, 3, 4, 5, 6, 7, 8], 3, 3);
console.log(answer);
