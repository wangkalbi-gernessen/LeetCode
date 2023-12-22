/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  let patternHash = encodeString(pattern);
  let stringsMap = new Map();
  let arr = s.split(" ");
  let k = 1;
  let stringHash = "";
  for (let j = 0; j < arr.length; j++) {
    if (!stringsMap.has(arr[j])) {
      stringsMap.set(arr[j], k++);
    }
    stringHash += stringsMap.get(arr[j]);
  }
  return stringHash === patternHash ? true : false;
};

var encodeString = (str) => {
  let map = new Map();
  let j = 1;
  let res = "";
  for (let i = 0; i < str.length; i++) {
    if (!map.has(str[i])) {
      map.set(str[i], j++);
    }
    res += map.get(str[i]);
  }
  return res;
};

// let answer = wordPattern("abba", "dog cat cat dog");
// let answer = wordPattern("abba", "dog cat cat fish");
let answer = wordPattern("aaaa", "dog cat cat dog");
console.log(answer);
