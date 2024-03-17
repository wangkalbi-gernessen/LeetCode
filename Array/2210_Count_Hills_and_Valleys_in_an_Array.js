/**
 * @param {number[]} nums
 * @return {number}
 */
var countHillValley = function (nums) {
  let inDecre = [];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      inDecre.push("+");
    }

    if (nums[i] < nums[i - 1]) {
      inDecre.push("-");
    }
  }
  //   console.log(inDecre);
  let count = 0;
  for (let j = 1; j < inDecre.length; j++) {
    if (inDecre[j] !== inDecre[j - 1]) {
      count++;
    }
  }
  return count;
};

let answer = countHillValley([2, 4, 1, 1, 6, 5]);
console.log(answer);
