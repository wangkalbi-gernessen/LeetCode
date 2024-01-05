/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function (nums) {
  let sum = 0;
  let n = nums.length;
  let arr = new Array(2 ** nums.length).fill(0).map(() => new Array());
  //   console.log(arr);

  for (let i = 0; i < arr.length; i++) {
    let ele = [];
    for (let j = 0; j < n; j++) {
      if ((i & (1 << j)) !== 0) {
        ele.push(nums[j]);
      }
    }

    if (ele.length === 0) {
      sum += 0;
    } else if (ele.length === 1) {
      sum += ele[0];
    } else {
      console.log(ele);
      let xorSum = ele.reduce(
        (accumlator, val, index) => accumlator ^ ele[index + 1],
        ele[0]
      );
      //   console.log(xorSum);
      sum += xorSum;
    }
  }
  return sum;
};

let answer = subsetXORSum([5, 1, 6]);
console.log(answer);
