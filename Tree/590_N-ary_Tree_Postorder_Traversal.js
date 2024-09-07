/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[]}
 */
var postorder = function (root) {
  let res = [];
  const traversal = (currentNode) => {
    if (currentNode === null) {
      return;
    }

    for (let child of currentNode.children) {
      traversal(child);
    }

    res.push(currentNode.val);
  };
  traversal(root);
  return res;
};
