/**
 * @param {number[]} nums
 * @return {number}
 */
var countDistinctIntegers = function (nums) {
  let set = new Set(nums);
  for (let i = 0; i < nums.length; i++) {
    let reversedDigits = nums[i].toString().split("").reverse().join("");
    set.add(parseInt(reversedDigits));
  }
  // console.log(set);
  return set.size;
};

let answer = countDistinctIntegers([1, 13, 10, 12, 31]);
console.log(answer);
