/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function (A, B) {
  let length = A.length;
  let i = 0;
  let output = [];
  while (i < length) {
    let count = 0;
    let set = new Set();
    let j = 0;
    while (j <= i) {
      set.add(A[j]);
      j++;
    }

    let k = 0;
    while (k <= i) {
      if (set.has(B[k])) {
        count++;
      }
      k++;
    }

    output.push(count);
    i++;
  }
  return output;
};

// let answer = findThePrefixCommonArray([1, 3, 2, 4], [3, 1, 2, 4]);
let answer = findThePrefixCommonArray([2, 3, 1], [3, 1, 2]);
console.log(answer);
