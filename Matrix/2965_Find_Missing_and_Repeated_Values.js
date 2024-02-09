/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function (grid) {
  let max = Math.pow(grid.length, 2);
  //   console.log(max);
  let oneDimensional = [].concat(...grid).sort((a, b) => a - b);
  console.log(oneDimensional);
  let repeating;
  let missing;
  let set = new Set();
  let i = 1;
  for (let j = 0; j < oneDimensional.length; j++) {
    if (set.has(oneDimensional[j])) {
      repeating = oneDimensional[j];
    } else {
      set.add(oneDimensional[j]);
    }
  }

  for (let i = 1; i <= max; i++) {
    if (oneDimensional.includes(i) === false) {
      missing = i;
    }
  }

  return [repeating, missing];
};

let answer = findMissingAndRepeatedValues([
  [9, 1, 7],
  [8, 9, 2],
  [3, 4, 6],
]);
console.log(answer);
