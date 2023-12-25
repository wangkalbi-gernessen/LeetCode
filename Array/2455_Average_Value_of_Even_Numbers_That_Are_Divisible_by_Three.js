/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function (nums) {
  let filtered = nums.filter((num) => num % 3 === 0 && num % 2 === 0);
  console.log(filtered);
  let sum = filtered.reduce((accumlator, num) => accumlator + num, 0);
  let res = Math.floor(sum / filtered.length);

  return isNaN(res) ? 0 : res;
};

// let answer = averageValue([1, 3, 6, 10, 12, 15]);
// let answer = averageValue([1, 2, 4, 7, 10]);
let answer = averageValue([
  94, 65, 82, 40, 79, 74, 92, 84, 37, 19, 16, 85, 20, 79, 25, 89, 55, 67, 84, 3,
  79, 38, 16, 44, 2, 54, 58, 94, 69, 71, 14, 24, 13, 21,
]);
console.log(answer);
