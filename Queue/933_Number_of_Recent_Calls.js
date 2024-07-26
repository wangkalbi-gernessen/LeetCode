var RecentCounter = function () {
  this.requests = [];
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
  this.requests.push(t);
  let min = t - 3000;
  let max = t;
  let count = 0;
  for (let i = 0; i < this.requests.length; i++) {
    if (min <= this.requests[i] && max >= this.requests[i]) {
      count++;
    }
  }
  return count;
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */

let obj = new RecentCounter();
let operations = ["RecentCounter", "ping", "ping", "ping", "ping"];
let inputs = [[], [1], [100], [3001], [3002]];
let res = [null];

for (let i = 1; i < operations.length; i++) {
  res.push(obj.ping(inputs[i]));
}

console.log(res);
