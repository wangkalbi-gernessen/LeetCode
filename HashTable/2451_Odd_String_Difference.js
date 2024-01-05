/**
 * @param {string[]} words
 * @return {string}
 */
var oddString = function (words) {
  let map = new Map();
  for (let i = 0; i < words.length; i++) {
    let arr = [];
    for (let j = 0; j < words.length - 1; j++) {
      arr.push(words[i].charCodeAt(j + 1) - words[i].charCodeAt(j));
    }

    // console.log(arr);
    if (!map.has(JSON.stringify(arr))) {
      map.set(JSON.stringify(arr), [words[i]]);
    } else {
      map.set(
        JSON.stringify(arr),
        map.get(JSON.stringify(arr)).concat([words[i]])
      );
    }
  }
  console.log(map);

  let res;
  for (let [key, value] of map) {
    if (value.length === 1) {
      res = value[0];
    }
  }
  //   console.log(res);
  return res;
};

// let answer = oddString(["adc", "wzy", "abc"]);
let answer = oddString(["ddd", "poo", "baa", "onn"]);
console.log(answer);
