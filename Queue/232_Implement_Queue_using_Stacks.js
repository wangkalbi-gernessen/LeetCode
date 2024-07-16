var MyQueue = function () {
  this.queue = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.queue.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  let removed = this.queue.shift();
  return removed;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  return this.queue[0];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.queue.length === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
let obj = new MyQueue();
let operations = ["MyQueue", "push", "push", "peek", "pop", "empty"];
let inputs = [[], [1], [2], [], [], []];
let outputs = [null];
// let output = [];
for (let i = 1; i < operations.length; i++) {
  if (operations[i] === "push") {
    obj.push(operations[i][0]);
    outputs.push(null);
  } else if (operations[i] === "pop") {
    outputs.push(obj.pop());
  } else if (operations[i] === "peek") {
    outputs.push(obj.peek());
  } else {
    outputs.push(obj.empty());
  }
}

console.log(outputs);
