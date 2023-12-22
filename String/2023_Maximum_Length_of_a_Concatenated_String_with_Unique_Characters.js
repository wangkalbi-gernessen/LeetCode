/**
 * @param {string[]} arr
 * @return {number}
 */
var numOfPairs = function (nums, target) {
  let pairsCount = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] + nums[j] === target && i !== j) {
        pairsCount += 1;
      }
    }
  }
  return pairsCount;
};

// let answer = numsOfPairs(["777", "7", "77", "77"], "7777");
let answer = numOfPairs(["123", "4", "12", "34"], "1234");
console.log(answer);
