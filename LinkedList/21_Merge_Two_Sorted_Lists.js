/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let result = null;
  let currentNode1 = list1;
  let currentNode2 = list2;

  if (currentNode1 === null) {
    return currentNode2;
  } else if (currentNode2 === null) {
    return currentNode1;
  }

  if (currentNode1.val <= currentNode2.val) {
    result = currentNode1;
    result.next = mergeTwoLists(currentNode1.next, list2);
  } else {
    result = currentNode2;
    result.next = mergeTwoLists(currentNode1, currentNode2.next);
  }
  return result;
};
