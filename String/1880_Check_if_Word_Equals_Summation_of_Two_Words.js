/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
var isSumEqual = function (firstWord, secondWord, targetWord) {
  //Calculate summation of the first word
  let firstWordSum = "";
  for (let i = 0; i < firstWord.length; i++) {
    firstWordSum += firstWord.charCodeAt(i) - 97;
  }

  //Calculate summation of the second word
  let secondWordSum = "";
  for (let i = 0; i < secondWord.length; i++) {
    secondWordSum += secondWord.charCodeAt(i) - 97;
  }

  //Calculate summation of the target word
  let targetWordSum = "";
  for (let i = 0; i < targetWord.length; i++) {
    targetWordSum += targetWord.charCodeAt(i) - 97;
  }

  return parseInt(firstWordSum) + parseInt(secondWordSum) ===
    parseInt(targetWordSum)
    ? true
    : false;
};

let answer = isSumEqual("acb", "cba", "cdb");
console.log(answer);
