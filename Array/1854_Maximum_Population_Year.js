/**
 * @param {number[][]} logs
 * @return {number}
 */
var maximumPopulation = function (logs) {
  logs = logs.sort((a, b) => a[0] - b[0]);
  console.log(logs);
  let hashmap = new Map();
  for (let i = 0; i < logs.length; i++) {
    let persons = 0;
    for (let j = 0; j < logs.length; j++) {
      if (logs[i][0] >= logs[j][0] && logs[i][0] < logs[j][1]) {
        persons++;
      }
    }

    // console.log(persons);

    hashmap.set(logs[i][0], persons);
  }
  //   console.log(hashmap);
  let earliestYear = Infinity;
  let max = Math.max(...[...hashmap.values()]);
  //   console.log(max);
  for (let [year, population] of hashmap) {
    if (population === max) {
      earliestYear = year;
      break;
    }
  }
  return earliestYear;
};

let answer = maximumPopulation([
  [1966, 1968],
  [1954, 2030],
  [1966, 1994],
  [2030, 2044],
  [1988, 2036],
  [1977, 2050],
  [2036, 2046],
  [1989, 2048],
  [2049, 2050],
  [2008, 2019],
  [2022, 2031],
  [1970, 2024],
  [1957, 1996],
  [1991, 2034],
  [1956, 1996],
  [1959, 1969],
  [2021, 2050],
]);
// let answer = maximumPopulation([
//   [1950, 1961],
//   [1960, 1971],
//   [1970, 1981],
// ]);
console.log(answer);
