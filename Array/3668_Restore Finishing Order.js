/**
 * @param {number[]} order
 * @param {number[]} friends
 * @return {number[]}
 */
var recoverOrder = function (order, friends) {
  const res = [];
  for (let i = 0; i < order.length; i++) {
    if (friends.includes(order[i])) {
      res.push(order[i]);
    }
  }
  return res;
};

const order = [3, 1, 2, 5, 4];
const friends = [1, 3, 4];
console.log(order, friends);
