/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function (tickets, k) {
  let time = 0;
  let queue = [];
  // 1. creating a queue
  for (let i = 0; i < tickets.length; i++) {
    queue.push(i);
  }
  console.log(queue);

  // 2. Buying a ticket
  while (tickets[k] !== 0) {
    if (tickets[queue[0]] > 0) {
      tickets[queue[0]]--;
      time++;
      queue.push(queue.shift());
    } else {
      queue.push(queue.shift());
    }
  }
  return time;
};

// let answer = timeRequiredToBuy([2, 3, 2], 2);
let answer = timeRequiredToBuy([5, 1, 1, 1], 0);
console.log(answer);
