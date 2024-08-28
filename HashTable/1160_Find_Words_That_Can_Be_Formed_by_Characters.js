/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function (words, chars) {
  let hashmap = new Map();

  for (let char of chars) {
    if (!hashmap.has(char)) {
      hashmap.set(char, 1);
    } else {
      hashmap.set(char, hashmap.get(char) + 1);
    }
  }
  // console.log(hashmap);
  let goodStrings = [];
  for (let word of words) {
    let wordHashMap = new Map();
    for (let c of word) {
      if (!wordHashMap.has(c)) {
        wordHashMap.set(c, 1);
      } else {
        wordHashMap.set(c, wordHashMap.get(c) + 1);
      }
    }
    let flag = true;
    for (let [key, value] of wordHashMap) {
      if (!hashmap.has(key)) {
        flag = false;
        break;
      } else {
        if (value > hashmap.get(key)) {
          flag = false;
          break;
        }
      }
    }

    if (flag) {
      goodStrings.push(word);
    }
  }
  // console.log(goodStrings);
  let sum = goodStrings.reduce(
    (accumlator, currentValue) => accumlator + currentValue.length,
    0
  );
  return sum;
};

let answer = countCharacters(["cat", "bt", "hat", "tree"], "atach");
console.log(answer);
