/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function (candies, num_people) {
  let res = new Array(num_people).fill(0);
  let distributedCandies = 1;
  let index = 0;
  while (candies > 0) {
    if (distributedCandies <= candies) {
      res[index] = res[index] + distributedCandies;
    } else {
      res[index] = res[index] + candies;
    }
    candies -= distributedCandies;
    distributedCandies++;
    index = (index + 1) % num_people;
  }
  return res;
};

// let answer = distributeCandies(7, 4);
let answer = distributeCandies(10, 3);
console.log(answer);
