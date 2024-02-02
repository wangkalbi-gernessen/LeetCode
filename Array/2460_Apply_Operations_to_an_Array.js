/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function (nums) {
  let n = nums.length - 1;
  let i = 0;
  let res = new Array(nums.length).fill(0);
  while (i <= n) {
    if (nums[i] === nums[i + 1]) {
      res[i] = nums[i] * 2;
      res[i + 1] = 0;
      i++;
    } else {
      res[i] = nums[i];
    }
    i++;
  }
  //   console.log(res);
  let zeroNums = res.reduce(
    (accumlator, num) => (num === 0 ? accumlator + 1 : accumlator),
    0
  );
  let zeros = new Array(zeroNums).fill(0);
  let integers = res.filter((num) => num > 0);

  return integers.concat(zeros);
};

// let answer = applyOperations([1, 2, 2, 1, 1, 0]);
let answer = applyOperations([0, 1]);
console.log(answer);
