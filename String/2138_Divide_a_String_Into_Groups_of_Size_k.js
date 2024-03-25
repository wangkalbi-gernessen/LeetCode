/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
var divideString = function (s, k, fill) {
  let res = [];
  let n = s.length;
  let i = 0;
  while (n >= k) {
    let str = s.substring(i, i + k);
    res.push(str);
    i += k;
    n -= k;
  }
  // console.log(res);
  // console.log(n);
  // console.log(i);

  if (n > 0) {
    let str = s.substring(i);
    let d = k - str.length;
    str += fill.repeat(d);
    res.push(str);
  }

  return res;
};

// let answer = divideString("abcdefghi", 3, "x");
let answer = divideString("abcdefghij", 3, "x");
console.log(answer);
