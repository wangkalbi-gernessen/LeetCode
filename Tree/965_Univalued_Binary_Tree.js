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
 * @return {boolean}
 */
var isUnivalTree = function (root) {
  let currentVal = root.val;
  let isUniValued = true;
  const traversal = (currentNode) => {
    if (currentNode === null) {
      return;
    }

    if (currentNode !== null) {
      if (currentNode.val !== currentVal) {
        isUniValued = false;
        return;
      }
    }

    if (currentNode.left !== null) {
      traversal(currentNode.left);
    }

    if (currentNode.right !== null) {
      traversal(currentNode.right);
    }
  };
  traversal(root);
  return isUniValued;
};
