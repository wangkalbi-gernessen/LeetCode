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
var postorderTraversal = function (root) {
  let res = [];
  const traversal = (currentNode) => {
    if (currentNode === null) {
      return;
    }

    if (currentNode.left !== null) {
      traversal(currentNode.left);
    }

    if (currentNode.right !== null) {
      traversal(currentNode.right);
    }

    if (currentNode !== null) {
      res.push(currentNode.val);
    }
  };

  traversal(root);
  return res;
};
