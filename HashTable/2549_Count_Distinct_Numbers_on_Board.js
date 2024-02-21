/**
 * @param {number} n
 * @return {number}
 */
var distinctIntegers = function (n) {
  let hashmap = new Map();
  hashmap.set(n, 1);
  let start = n - 1;
  while (start > 1) {
    let values = [...hashmap.keys()];
    for (let val of values) {
      if (val % start === 1) {
        if (!hashmap.has(start)) {
          hashmap.set(start, 1);
          break;
        } else {
          continue;
        }
      }
    }
    start--;
  }
  console.log(hashmap);
  return hashmap.size;
};

let answer = distinctIntegers(5);
console.log(answer);
