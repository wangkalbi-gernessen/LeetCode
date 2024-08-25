/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr) {
  arr.sort((a, b) => a - b);
  let minimum = Number.MAX_VALUE;
  for (let i = 0; i < arr.length - 1; i++) {
    if (minimum > Math.abs(arr[i] - arr[i + 1]) && arr[i] < arr[i + 1]) {
      minimum = Math.abs(arr[i] - arr[i + 1]);
    }
  }

  let res = [];
  for (let j = 0; j < arr.length - 1; j++) {
    if (arr[j] < arr[j + 1] && Math.abs(arr[j] - arr[j + 1]) === minimum) {
      res.push([arr[j], arr[j + 1]]);
    }
  }

  return res;
};

let answer = minimumAbsDifference([4, 2, 1, 3]);
console.log(answer);
