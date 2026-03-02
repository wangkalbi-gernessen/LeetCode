/**
 * @param {string} s
 * @return {number}
 */
var reverseDegree = function (s) {
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    sum += (123 - s.charCodeAt(i)) * (i + 1);
  }

  return sum;
};

const s = "abz";
console.log(reverseDegree(s));
