/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  let currentNode = head;
  let count = 0;

  while (currentNode !== null) {
    count++;
    currentNode = currentNode.next;
  }

  let mid = Math.floor(count / 2);
  currentNode = head;

  for (let i = 0; i < mid; i++) {
    currentNode = currentNode.next;
  }
  return currentNode;
};
