/**
 * @param {number[]} nums
 * @return {number}
 */
var countBeautifulPairs = function (nums) {
  let count = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let firstDigit = parseInt(nums[i].toString().charAt(0));
      let lastDigit = parseInt(
        nums[j].toString().charAt(nums[j].toString().length - 1)
      );
      if (gcd(firstDigit, lastDigit) === 1) {
        count++;
      }
    }
  }
  return count;
};

let gcd = (a, b) => {
  let result = Math.min(a, b);
  while (result > 0) {
    if (a % result === 0 && b % result === 0) {
      break;
    }
    result--;
  }
  return result;
};

// let answer = countBeautifulPairs([2, 5, 1, 4]);
let answer = countBeautifulPairs([31, 25, 72, 79, 74]);
console.log(answer);
