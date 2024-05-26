/**
 * @param {string} s
 * @return {number}
 */
var minimizedStringLength = function (s) {
  let set = new Set([...s]);
  return set.size;
};

let answer = minimizedStringLength("aaabc");
console.log(answer);
