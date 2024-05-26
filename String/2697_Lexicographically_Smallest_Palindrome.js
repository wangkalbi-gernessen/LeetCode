/**
 * @param {string} s
 * @return {string}
 */
var makeSmallestPalindrome = function (s) {
  let left = 0;
  let right = s.length - 1;
  let res = s.split("");
  while (right >= left) {
    if (s[left] !== s[right]) {
      if (s.charCodeAt(left) < s.charCodeAt(right)) {
        res[right] = res[left];
      } else {
        res[left] = res[right];
      }
    }
    right--;
    left++;
  }
  return res.join("");
};

let answer = makeSmallestPalindrome("egcfe");
console.log(answer);
