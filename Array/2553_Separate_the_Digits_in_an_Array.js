/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function (nums) {
  let res = "";
  for (let num of nums) {
    let digits = num.toString();
    console.log(digits);
    res += digits;
  }
  return res.split("");
};

let answer = separateDigits([13, 25, 83, 77]);
console.log(answer);
