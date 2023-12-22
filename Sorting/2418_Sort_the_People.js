/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
  let combinedArray = names
    .map((name, index) => ({
      height: heights[index],
      name: name,
    }))
    .sort((a, b) => b.height - a.height)
    .map((entry) => entry.name);
  //   console.log(combinedArray);
  return combinedArray;
};

let answer = sortPeople(["Mary", "John", "Emma"], [180, 165, 170]);
console.log(answer);
