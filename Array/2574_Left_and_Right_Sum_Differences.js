/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function (nums) {
  let leftArray = [];
  let rightArray = [];

  // Create LeftArray
  let leftsum = 0;
  for (let i = 0; i < nums.length; i++) {
    leftArray.push(leftsum);
    leftsum += nums[i];
  }
  //   console.log(leftArray);

  // Create RightArray
  for (let i = 0; i < nums.length; i++) {
    let sliced = nums.slice(i + 1, nums.length);
    let rightsum = sliced.reduce((accumlator, num) => accumlator + num, 0);
    rightArray.push(rightsum);
  }
  //   console.log(rightArray);

  let res = [];
  for (let k = 0; k < rightArray.length; k++) {
    res.push(Math.abs(rightArray[k] - leftArray[k]));
  }

  return res;
};

let answer = leftRightDifference([10, 4, 8, 3]);
console.log(answer);
