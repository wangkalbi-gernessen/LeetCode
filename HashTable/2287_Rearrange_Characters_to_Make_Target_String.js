/**
 * @param {string} s
 * @param {string} target
 * @return {number}
 */
var rearrangeCharacters = function (s, target) {
  let sHashmap = new Map();
  for (let char of s) {
    if (!sHashmap.has(char)) {
      sHashmap.set(char, 1);
    } else {
      sHashmap.set(char, sHashmap.get(char) + 1);
    }
  }
  let targetHashmap = new Map();
  for (let char of target) {
    if (!targetHashmap.has(char)) {
      targetHashmap.set(char, 1);
    } else {
      targetHashmap.set(char, targetHashmap.get(char) + 1);
    }
  }
  // console.log(targetHashmap);
  let arr = [];
  for (let [key, value] of targetHashmap) {
    if (sHashmap.has(key)) {
      arr.push(Math.floor(sHashmap.get(key) / value));
    } else {
      return 0;
    }
  }
  return Math.min(...arr);
};

// let answer = rearrangeCharacters("ilovecodingonleetcode", "code");
let answer = rearrangeCharacters("aaaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaa");
console.log(answer);
