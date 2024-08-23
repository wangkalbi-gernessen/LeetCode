/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function (target, arr) {
  target = target.sort((a, b) => a - b);
  arr = arr.sort((a, b) => a - b);
  if (JSON.stringify(target) === JSON.stringify(arr)) {
    return true;
  }
  return false;
};

let answer = canBeEqual([1, 2, 3, 4], [2, 4, 1, 3]);
console.log(answer);
