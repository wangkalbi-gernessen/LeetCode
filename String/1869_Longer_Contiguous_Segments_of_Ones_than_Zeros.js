/**
 * @param {string} s
 * @return {boolean}
 */
var checkZeroOnes = function (s) {
  let n = s.length;
  let maxCount = 0;
  let currentCount = 1;
  let res = s[0];

  for (let i = 0; i < n; i++) {
    if (i < n - 1 && s[i] === s[i + 1]) {
      currentCount++;
    } else {
      if (maxCount < currentCount) {
        maxCount = currentCount;
        res = s[i];
      } else if (maxCount === currentCount) {
        if (res === "1" && s[i] === "0") {
          res = "0";
        }
      }
      currentCount = 1;
    }
  }
  return res === "1" ? true : false;
};

// let answer = checkZeroOnes("1101");
let answer = checkZeroOnes("0001100010001111001111010110101111011010");
console.log(answer);
