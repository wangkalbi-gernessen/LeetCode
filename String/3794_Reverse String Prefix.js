/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reversePrefix = function (s, k) {
  let prefixStr = s.slice(0, k);
  let suffixStr = s.slice(k, s.length);

  let reversedPrefixStr = [...prefixStr].reverse().join("");
  return reversedPrefixStr + suffixStr;
};

const str = "abcd";
const k = 2;
console.log(reversePrefix(str, k));
