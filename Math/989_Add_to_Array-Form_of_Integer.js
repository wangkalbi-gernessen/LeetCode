/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function (num, k) {
  let sum = BigInt(num.join("")) + BigInt(k);
  return sum
    .toString()
    .split("")
    .map((num) => parseInt(num));
};

let answer = addToArrayForm([1, 2, 0, 0], 34);
console.log(answer);
