/**
 * @param {number[][]} nums
 * @return {number}
 */
var numberOfPoints = function (nums) {
  let set = new Set();
  for (let i = 0; i < nums.length; i++) {
    let j = nums[i][0];
    while (j <= nums[i][1]) {
      set.add(j);
      j++;
    }
  }
  //   console.log(set);
  return set.size;
};

// let answer = numberOfPoints([
//   [3, 6],
//   [1, 5],
//   [4, 7],
// ]);
let answer = numberOfPoints([
  [1, 3],
  [5, 8],
]);
console.log(answer);
