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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */

var rangeSumBST = function (root, low, high) {
  let sum = 0;
  const preorderTraversal = (currentNode) => {
    if (currentNode.val >= low && currentNode.val <= high) {
      sum += currentNode.val;
    }

    if (currentNode.left !== null) {
      preorderTraversal(currentNode.left);
    }

    if (currentNode.right !== null) {
      preorderTraversal(currentNode.right);
    }
  };

  preorderTraversal(root);
  return sum;
};
