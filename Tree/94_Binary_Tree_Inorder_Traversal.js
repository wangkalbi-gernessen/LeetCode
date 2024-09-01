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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  let res = [];
  const traversal = (currentNode) => {
    if (currentNode === null) {
      return;
    }

    if (currentNode.left !== null) {
      traversal(currentNode.left);
    }

    if (currentNode !== null) {
      res.push(currentNode.val);
    }

    if (currentNode.right !== null) {
      traversal(currentNode.right);
    }
  };
  traversal(root);
  return res;
};
