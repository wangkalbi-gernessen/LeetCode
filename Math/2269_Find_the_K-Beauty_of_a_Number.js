/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
var divisorSubstrings = function (num, k) {
  let count = 0;
  let numsString = num.toString();
  for (let i = 0; i < numsString.length; i++) {
    let substring = "";
    for (let j = i; j < numsString.length; j++) {
      substring += numsString.charAt(j);
      console.log(substring);
      if (substring.length === k) {
        count += num % parseInt(substring) === 0 ? 1 : 0;
      }
    }
  }
  return count;
};

// let answer = divisorSubstrings(240, 2);
let answer = divisorSubstrings(430043, 2);
console.log(answer);
