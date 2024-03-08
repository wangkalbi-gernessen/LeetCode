/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function (n) {
  let hashmap = new Map();
  let i = 1;
  while (i <= n) {
    let num = i
      .toString()
      .split("")
      .reduce((a, b) => a + parseInt(b), 0);
    // console.log(num);
    if (!hashmap.has(num)) {
      hashmap.set(num, 1);
    } else {
      hashmap.set(num, hashmap.get(num) + 1);
    }
    i++;
  }
  console.log(hashmap);
  let max = Math.max(...[...hashmap.values()]);
  //   console.log(max);
  let maxCount = [...hashmap.values()].reduce(
    (count, current) => (current === max ? count + 1 : count),
    0
  );
  return maxCount;
};

// let answer = countLargestGroup(13);
// let answer = countLargestGroup(24);
let answer = countLargestGroup(264);
console.log(answer);
