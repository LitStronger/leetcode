/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  if (!head) return;
  let dummy = new ListNode();
  dummy.next = head;
  let curNode = null;
  let preNode = dummy;
  let nextNode = null;
  let i = left,
    j = right;
  while (--i) {
    preNode = preNode.next;
  }
  curNode = preNode.next;
  for (let k = left - 1; k < right - 1; k++) {
    nextNode = curNode.next;
    curNode.next = nextNode.next;
    nextNode.next = preNode.next;
    preNode.next = nextNode;
  }
  return dummy.next;
};
