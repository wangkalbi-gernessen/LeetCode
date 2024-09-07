/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (root === null) {
    return 0;
  }

  let queue = [root];
  let count = 0;

  while (queue.length > 0) {
    let n = queue.length;
    count++;
    while (n--) {
      let node = queue.shift();
      queue.push(...node.children);
    }
  }
  return count;
};
