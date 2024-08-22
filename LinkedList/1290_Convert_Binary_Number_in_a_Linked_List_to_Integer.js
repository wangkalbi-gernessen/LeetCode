/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function (head) {
  if (head == null) {
    return 0;
  }

  let currentNode = head;
  let dec = "";
  while (currentNode !== null) {
    dec += currentNode.val;
    currentNode = currentNode.next;
  }
  return parseInt(dec, 2);
};
