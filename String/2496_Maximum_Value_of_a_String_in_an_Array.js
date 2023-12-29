/**
 * @param {string[]} strs
 * @return {number}
 */
var maximumValue = function (strs) {
  let largest = 0;
  for (let i = 0; i < strs.length; i++) {
    let ans;
    if (isNaN(strs[i]) === true) {
      ans = strs[i].length;
    } else {
      ans = parseInt(strs[i], 10);
    }

    largest = ans > largest ? ans : largest;
  }
  return largest;
};

let answer = maximumValue(["alic3", "bob", "3", "4", "00000"]);
console.log(answer);
