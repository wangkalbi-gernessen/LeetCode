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
var minDepth = function (root) {
  if (root === null) {
    return 0;
  }

  let count = 0;
  let queue = [root];
  let isMarked = false;

  while (queue.length > 0) {
    count++;
    let n = queue.length;
    while (n--) {
      let node = queue.shift();
      if (node.left === null && node.right === null) {
        isMarked = true;
        break;
      }
      if (node.left !== null) {
        queue.push(node.left);
      }

      if (node.right !== null) {
        queue.push(node.right);
      }
    }

    if (isMarked) {
      break;
    }
  }
  return count;
};
