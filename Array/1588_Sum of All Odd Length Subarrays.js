/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    let n = arr.length;
    let j = i + 1;
    while (j <= n) {
      // let ans = arr.slice(i, j);
      // console.log(ans);
      let ans = arr.slice(i, j).reduce((acc, curr) => acc + curr, 0);
      sum += ans;
      j += 2;
    }
  }
  return sum;
};

const arr = [1, 4, 2, 5, 3];
console.log(sumOddLengthSubarrays(arr));
