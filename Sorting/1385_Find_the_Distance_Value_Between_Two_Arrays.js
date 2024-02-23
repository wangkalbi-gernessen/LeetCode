/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function (arr1, arr2, d) {
  let res = 0;
  for (num1 of arr1) {
    let flag = 0;
    for (num2 of arr2) {
      if (Math.abs(num1 - num2) <= d) {
        flag = 1;
        break;
      }
    }

    if (flag === 0) {
      res++;
    }
  }

  return res;
};

// let answer = findTheDistanceValue([4, 5, 8], [10, 9, 1, 8], 2);
let answer = findTheDistanceValue([2, 1, 100, 3], [-5, -2, 10, -3, 7], 6);
console.log(answer);
