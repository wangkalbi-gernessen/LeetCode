/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function (nums) {
  let sorted = nums.sort((a, b) => a - b);
  let arr = [];
  let alice;
  let bob;
  let isAlice = true;

  for (let i = 0; i < sorted.length; i += 2) {
    alice = sorted[i];
    bob = sorted[i + 1];
    arr.push(bob);
    arr.push(alice);
  }
  return arr;
};

let answer = numberGame([5, 4, 2, 3]);
console.log(answer);
