/**
 * // Definition for a _Node.
 * function _Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[]}
 */
var preorder = function (root) {
  let res = [];
  const traversal = (currentNode) => {
    if (currentNode === null) {
      return;
    }

    res.push(currentNode.val);

    for (let child of currentNode.children) {
      traversal(child);
    }
  };
  traversal(root);
  return res;
};
