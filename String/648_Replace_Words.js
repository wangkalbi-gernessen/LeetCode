/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function (dictionary, sentence) {
  sentence = sentence.split(" ");
  let n = sentence.length;
  let i = 0;
  while (i < n) {
    for (let j = 0; j < dictionary.length; j++) {
      if (sentence[i].startsWith(dictionary[j])) {
        sentence[i] = dictionary[j];
      }
    }
    i++;
  }
  return sentence.join(" ");
};

// let answer = replaceWords(
//   ["cat", "bat", "rat"],
//   "the cattle was rattled by the battery"
// );
let answer = replaceWords(["a", "b", "c"], "aadsfasf absbs bbab cadsfafs");
console.log(answer);
