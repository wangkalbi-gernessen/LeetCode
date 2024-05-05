/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
  let zeros = nums.filter((num) => num === 0).length;

  let res = 0;
  while (zeros < nums.length) {
    let min = Math.min(...nums.filter((num) => num !== 0));
    nums = nums.map((element) => (element !== 0 ? element - min : 0));

    zeros = nums.filter((num) => num === 0).length;

    res++;
  }
  return res;
};

let answer = minimumOperations([1, 5, 0, 3, 5]);
console.log(answer);
