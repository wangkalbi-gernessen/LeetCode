/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function (nums) {
  let binaryString = "";
  for (let i = 0; i < nums.length; i++) {
    binaryString += "1";
  }
  //   console.log(binaryString);
  let maxBinaryNumber = parseInt(binaryString, 2);
  //   console.log(maxBinaryNumber);
  while (maxBinaryNumber >= 0) {
    let binaryStr = maxBinaryNumber.toString(2).padStart(nums.length, "0");
    // console.log(binaryStr);
    if (nums.includes(binaryStr) === false) {
      return binaryStr;
    }
    maxBinaryNumber--;
  }
};

// let answer = findDifferentBinaryString(["01", "10"]);
let answer = findDifferentBinaryString(["11", "10"]);
// let answer = findDifferentBinaryString(["111", "011", "001"]);
console.log(answer);
