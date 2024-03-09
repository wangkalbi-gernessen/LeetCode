/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {
  let original = "balloon";
  let hashmap = new Map();
  for (let char of text) {
    if (original.includes(char)) {
      if (!hashmap.has(char)) {
        hashmap.set(char, 1);
      } else {
        hashmap.set(char, hashmap.get(char) + 1);
      }
    }
  }
  //   console.log(hashmap);
  let set = [];
  for (let [key, value] of hashmap) {
    if (key === "b") {
      set.push(Math.floor(value / 1));
    }

    if (key === "a") {
      set.push(Math.floor(value / 1));
    }

    if (key === "l") {
      set.push(Math.floor(value / 2));
    }

    if (key === "o") {
      set.push(Math.floor(value / 2));
    }

    if (key === "n") {
      set.push(Math.floor(value / 1));
    }
  }

  let min = set.length === 5 ? Math.min(...set) : 0;
  return min;
};

let answer = maxNumberOfBalloons("nlaebolko");
console.log(answer);
