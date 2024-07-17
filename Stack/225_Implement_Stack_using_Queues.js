var MyStack = function () {
  this.stack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.stack.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  let removed = this.stack.pop();
  return removed;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.stack.length === 0;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
let obj = new MyStack();
let operations = ["MyStack", "push", "push", "top", "pop", "empty"];
let inputs = [[], [1], [2], [], [], []];
let outputs = [null];
// let output = [];
for (let i = 1; i < operations.length; i++) {
  if (operations[i] === "push") {
    obj.push(operations[i][0]);
    outputs.push(null);
  } else if (operations[i] === "pop") {
    outputs.push(obj.pop());
  } else if (operations[i] === "top") {
    outputs.push(obj.top());
  } else {
    outputs.push(obj.empty());
  }
}

console.log(outputs);
