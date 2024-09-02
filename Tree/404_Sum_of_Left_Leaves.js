/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
  let sum = 0;
  const traversal = (currentNode) => {
    if (currentNode == null) {
      return;
    }

    if (currentNode.left !== null) {
      if (currentNode.left.left === null && currentNode.left.right === null) {
        sum += currentNode.left.val;
      }
      traversal(currentNode.left);
    }

    if (currentNode.right !== null) {
      traversal(currentNode.right);
    }
  };
  traversal(root);
  return sum;
};
