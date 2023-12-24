/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function (words, s) {
  let initials = "";
  for (let i = 0; i < words.length; i++) {
    initials += words[i].charAt(0);
  }
  console.log(initials);
  return initials === s ? true : false;
};

// let answer = isAcronym(["alice", "bob", "charlie"], "abc");
let answer = isAcronym(["an", "apple"], "a");
console.log(answer);
