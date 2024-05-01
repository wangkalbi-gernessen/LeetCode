/**
 * @param {string} word
 * @return {number}
 */
var countVowelSubstrings = function (word) {
  let res = 0;
  for (let i = 0; i < word.length; i++) {
    let substring = "";
    for (let j = i; j < word.length; j++) {
      substring += word.charAt(j);
      if (isAllVowels(substring) === true) {
        res++;
      }
    }
  }
  return res;
};

let isAllVowels = (substring) => {
  let VOWELS = "aiueo";
  let set = new Set(substring);
  console.log(set);
  let sorted = [...set].sort().join("");
  console.log(sorted);

  for (let char of sorted) {
    if (VOWELS.includes(char) === false) {
      return false;
    }
  }

  for (let char of VOWELS) {
    if (sorted.includes(char) === false) {
      return false;
    }
  }
  return true;
};

// let answer = countVowelSubstrings("aeiouu");
// let answer = countVowelSubstrings("unicornarihan");
let answer = countVowelSubstrings("cuaieuouac");
console.log(answer);
