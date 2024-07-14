var MyHashSet = function () {
  this.set = new Set();
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
  this.set.add(key);
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
  this.set.delete(key);
};

/**
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
  return this.set.has(key);
};

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */

let obj = new MyHashSet();
let ops = [
  "MyHashSet",
  "add",
  "add",
  "contains",
  "contains",
  "add",
  "contains",
  "remove",
  "contains",
];
let nums = [[], [1], [2], [1], [3], [2], [2], [2], [2]];
let output = [null];

for (let i = 1; i < ops.length; i++) {
  if (ops[i] === "add") {
    obj.add(nums[i][0]);
    output.push(null);
  } else if (ops[i] === "remove") {
    obj.remove(nums[i][0]);
    output.push(null);
  } else {
    output.push(obj.contains(nums[i][0]));
  }
}

console.log(output);
