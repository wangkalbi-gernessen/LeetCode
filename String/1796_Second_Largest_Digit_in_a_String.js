/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function (s) {
  let set = new Set();
  for (let i = 0; i < s.length; i++) {
    let num = parseInt(s[i]);
    if (isNaN(num) === false) {
      set.add(num);
    }
  }
  let output = [...set].sort((a, b) => b - a);
  //   console.log(output);
  return output.length >= 2 ? output[1] : -1;
};

// let answer = secondHighest("dfa12321afd");
let answer = secondHighest("abc1111");
// let answer = secondHighest("ck077");
console.log(answer);
