/**
 * @param {number[]} nums
 * @return {number}
 */
var duplicateNumbersXOR = function (nums) {
  let set = new Set();
  let twiceOccurrance = [];
  for (let num of nums) {
    if (set.has(num)) {
      twiceOccurrance.push(num);
    } else {
      set.add(num);
    }
  }
  //   console.log(twiceOccurrance);
  let res = twiceOccurrance[0];
  for (let i = 1; i < twiceOccurrance.length; i++) {
    res = res ^ twiceOccurrance[i];
  }
  return res ?? 0;
};

let answer = duplicateNumbersXOR([1, 2, 1, 3]);
console.log(answer);
