/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function (candyType) {
  const doctorAdvisedNum = candyType.length / 2;
  let set = new Set();
  for (let num of candyType) {
    set.add(num);
  }

  if (set.size <= doctorAdvisedNum) {
    return set.size;
  } else {
    return doctorAdvisedNum;
  }
};

let answer = distributeCandies([1, 1, 2, 2, 3, 3]);
console.log(answer);
