/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  let map = new Map();
  for (let i = 0; i < ransomNote.length; i++) {
    if (!map.has(ransomNote[i])) {
      map.set(ransomNote[i], 1);
    } else {
      map.set(ransomNote[i], map.get(ransomNote[i]) + 1);
    }
  }
  //   console.log(map);

  for (let j = 0; j < magazine.length; j++) {
    if (map.has(magazine[j])) {
      if (map.get(magazine[j]) >= 1) {
        map.set(magazine[j], map.get(magazine[j]) - 1);
      }
    }
  }

  for (let value of map.values()) {
    if (value !== 0) {
      return false;
    }
  }
  return true;
};

// let answer = canConstruct("aa", "aab");
// let answer = canConstruct("a", "b");
// let answer = canConstruct("aa", "ab");
let answer = canConstruct(
  "bg",
  "efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj"
);
console.log(answer);
