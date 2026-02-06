/**
 * @param {number} n
 * @return {number}
 */
var getLeastFrequentDigit = function (n) {
  let hashmap = new Map();
  let numArr = n.toString().split("");
  for (let num of numArr) {
    if (!hashmap.has(parseInt(num))) {
      hashmap.set(parseInt(num), 1);
    } else {
      hashmap.set(parseInt(num), hashmap.get(parseInt(num)) + 1);
    }
  }
  const numPair = Array.from(hashmap);
  const sortedNumPair = numPair.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    } else {
      return a[1] - b[1];
    }
  });
  return sortedNumPair[0][0];
};

const n = 1553322;
console.log(getLeastFrequentDigit(n));
