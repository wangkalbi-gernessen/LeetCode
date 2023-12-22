/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function (n) {
  let arr = new Array(n);
  arr[0] = 0;
  let i = 1;
  while (i <= n) {
    arr[i] = arr[i - 1] + i;
    let j = i;
    let sum = 0;
    while (j <= n) {
      sum += j;
      j++;
    }
    if (arr[i] === sum) {
      return i;
    }
    i++;
  }
  return -1;
};

let answer = pivotInteger(8);
// let answer = pivotInteger(1);
// let answer = pivotInteger(4);
console.log(answer);
