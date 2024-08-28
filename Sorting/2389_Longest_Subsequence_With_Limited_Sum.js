/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function (nums, queries) {
  let n = nums.length;
  let m = queries.length;
  let answer = [];
  nums.sort((a, b) => a - b);
  for (let query of queries) {
    let sum = 0;
    let size = 0;
    for (let num of nums) {
      sum += num;
      size++;
      if (sum > query) {
        size--;
        break;
      }
    }
    answer.push(size);
  }
  return answer;
};

let answer = answerQueries([4, 5, 2, 1], [3, 10, 21]);
console.log(answer);
