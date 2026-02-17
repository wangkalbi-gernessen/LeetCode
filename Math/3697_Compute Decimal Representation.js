/**
 * @param {number} n
 * @return {number[]}
 */
var decimalRepresentation = function (n) {
  const components = [];
  let dividedBy = 1;
  const nums = n
    .toString()
    .split("")
    .map((num) => parseInt(num));

  console.log(nums);

  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] !== 0) {
      components.unshift(nums[i] * dividedBy);
    }
    dividedBy *= 10;
  }

  return components;
};

const n = 102;
console.log(decimalRepresentation(n));
