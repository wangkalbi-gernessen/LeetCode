/**
 * @param {string} word
 * @return {number}
 */
var countVowels = function (word) {
  let VOWELS = "aiueo";
  let sum = 0;
  for (let i = 0; i < word.length; i++) {
    let substring = "";
    for (let j = i; j < word.length; j++) {
      substring += word.charAt(j);
      console.log([...substring]);
      let count = [...substring].reduce(
        (accumlator, char) =>
          VOWELS.includes(char) ? accumlator + 1 : accumlator,
        0
      );
      sum += count;
    }
  }
  return sum;
};

let answer = countVowels("aba");
// let answer = countVowels("abc");
// let answer = countVowels("ltcd");
console.log(answer);
