/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {
  if (words.length === 1) {
    return words[0].split("");
  }

  let mainHashmap = new Map();
  for (let i = 0; i < words[0].length; i++) {
    if (!mainHashmap.has(words[0].charAt(i))) {
      mainHashmap.set(words[0].charAt(i), 1);
    } else {
      mainHashmap.set(
        words[0].charAt(i),
        mainHashmap.get(words[0].charAt(i)) + 1
      );
    }
  }
  // console.log(mainHashmap);
  for (let i = 1; i < words.length; i++) {
    let temporaryHashmap = new Map();
    for (let j = 0; j < words[i].length; j++) {
      if (!temporaryHashmap.has(words[i][j])) {
        temporaryHashmap.set(words[i][j], 1);
      } else {
        temporaryHashmap.set(
          words[i][j],
          temporaryHashmap.get(words[i][j]) + 1
        );
      }
    }
    // console.log(temporaryHashmap);
    let temporaryArray = [...temporaryHashmap.keys()];
    // console.log(temporaryArray);

    for (let key of mainHashmap.keys()) {
      if (temporaryArray.includes(key)) {
        let min = Math.min(temporaryHashmap.get(key), mainHashmap.get(key));
        mainHashmap.set(key, min);
      } else {
        mainHashmap.set(key, 0);
      }
    }
  }

  let res = "";
  for (let key of mainHashmap.keys()) {
    if (mainHashmap.get(key) > 0) {
      let repeated = key.repeat(mainHashmap.get(key));
      res += repeated;
    }
  }

  return res.split("");
};

let answer = commonChars(["bella", "label", "roller"]);
console.log(answer);
