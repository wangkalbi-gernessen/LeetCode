/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  let res = [];
  for (let i = 0; i < candies.length; i++) {
    const newCandies = [...candies];
    newCandies[i] += extraCandies;
    const max = Math.max(...newCandies);

    if (max === newCandies[i]) {
      res.push(true);
    } else {
      res.push(false);
    }
  }
  return res;
};

const candies = [2, 3, 5, 1, 3];
const extraCandies = 3;
console.log(kidsWithCandies(candies, extraCandies));
