/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  let output = [];
  // variable for a character of last index
  let tempString = "";
  let k_Index = k;
  let countIndex = 0;
  for (let i = 0; i < s.length; i++) {
    output.push(s[i]);
    countIndex += 1;
    if (countIndex === k_Index) {
      output[i - 1] = s[i];
      tempString = s[i - 1];
      output[i] = tempString;
      k_Index *= 2;
      countIndex = 0;
      tempString = "";
    }
  }
  output = output.join("");
  return output;
};

// let answer = reverseStr("abcdefg", 2);
let answer = reverseStr("abcd", 2);
console.log(answer);
