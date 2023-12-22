/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function (arr) {
  let ans = [];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      let ele = [];
      for (let k = i; k <= j; k++) {
        ele.push(arr[k]);
      }
      if (ele.length % 2 !== 0) {
        sum += ele.reduce((a, b) => a + b);
      }
      // console.log(ele);
      // ans.push(ele);
    }
  }
  // console.log(ans);
  return sum;
};

// let answer = sumOddLengthSubarrays([1, 4, 2, 5, 3]);
let answer = sumOddLengthSubarrays([10, 11, 12]);
console.log(answer);
