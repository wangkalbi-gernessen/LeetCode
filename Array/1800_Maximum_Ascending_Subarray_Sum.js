/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function (nums) {
  let larger = 0;
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      let ele = [];
      for (let k = i; k <= j; k++) {
        ele.push(nums[k]);
      }
      //   larger = Math.max(larger, sum);
      arr.push(ele);
    }
  }
  console.log(arr);
  let ascendingArr = arr.map((a) => a.filter((e) => e < 10));
  console.log(ascendingArr);

  //     let maxSum = ascendingArr.map((subArr) => {
  //     return subArr.reduce(
  //       (accumulator, currentValue) => accumulator + currentValue,
  //       0
  //     );
  //   });
  //   console.log(maxSum);

  //   return maxSum;
};

let answer = maxAscendingSum([10, 20, 30, 5, 10, 50]);
// let answer = maxAscendingSum([10, 20, 30, 40, 50]);
// let answer = maxAscendingSum([12, 17, 15, 13, 10, 11, 12]);
// let answer = maxAscendingSum([100, 10, 1]);
console.log(answer);
