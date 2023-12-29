/**
 * @param {string} word
 * @return {number}
 */
var numDifferentIntegers = function (word) {
  let onlyDigits = word
    .replace(/[a-z]/g, " ")
    .split(" ")
    .filter((item) => item !== "")
    .map((item) => BigInt(item));
  console.log(onlyDigits);

  let set = new Set(onlyDigits);
  console.log(set);
  return set.size;
};

// let answer = numDifferentIntegers("a123bc34d8ef34");
// let answer = numDifferentIntegers("a1b01c001");
// let answer = numDifferentIntegers("0a0");
let answer = numDifferentIntegers("035985750011523523129774573439111590559325");
console.log(answer);
