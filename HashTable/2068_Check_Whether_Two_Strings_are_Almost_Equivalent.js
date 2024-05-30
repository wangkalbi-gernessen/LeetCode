/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var checkAlmostEquivalent = function (word1, word2) {
  let hashmap = new Map();
  for (let i = 0; i < word1.length; i++) {
    if (!hashmap.has(word1[i])) {
      hashmap.set(word1[i], 1);
    } else {
      hashmap.set(word1[i], hashmap.get(word1[i]) + 1);
    }
  }

  for (let i = 0; i < word2.length; i++) {
    if (!hashmap.has(word2[i])) {
      hashmap.set(word2[i], -1);
    } else {
      hashmap.set(word2[i], hashmap.get(word2[i]) - 1);
    }
  }

  console.log(hashmap);

  for (let key of hashmap.keys()) {
    if (Math.abs(hashmap.get(key)) > 3) {
      return false;
    }
  }
  return true;
};

let answer = checkAlmostEquivalent("bccb", "zzzz");
console.log(answer);
