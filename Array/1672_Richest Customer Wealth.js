/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  const wealths = [];
  for (let i = 0; i < accounts.length; i++) {
    const wealth = accounts[i].reduce((acc, curr) => acc + curr, 0);
    wealths.push(wealth);
  }
  return Math.max(...wealths);
};

const accounts = [
  [1, 2, 3],
  [3, 2, 1],
];
console.log(maximumWealth(accounts));
