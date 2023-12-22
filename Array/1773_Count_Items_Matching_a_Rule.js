/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {
  let count = 0;
  let ruleKeyIndex = ruleKey === "type" ? 0 : ruleKey === "color" ? 1 : 2;
  //   console.log(ruleKeyIndex);
  items.forEach((value, key) => {
    // console.log(value[ruleKeyIndex], ruleValue);
    if (value[ruleKeyIndex] === ruleValue) {
      count++;
    }
  });
  return count;
};

// let answer = countMatches(
//   [
//     ["phone", "blue", "pixel"],
//     ["computer", "silver", "phone"],
//     ["phone", "gold", "iphone"],
//   ],
//   "type",
//   "phone"
// );
let answer = countMatches(
  [
    ["phone", "blue", "pixel"],
    ["computer", "silver", "lenovo"],
    ["phone", "gold", "iphone"],
  ],
  "color",
  "silver"
);
console.log(answer);
