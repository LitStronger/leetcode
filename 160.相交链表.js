// 特点：如果两个链表相交，那么相交点之后的长度是相同的，进行遍历，做如下处理
// ---链表A   ===链表B
// --------===
// ===--------
// 这样，二者末尾就对齐了，末尾如果有相交，那么其值是一样的。

function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let p1 = headA;
  let p2 = headB;
  while (p1 !== p2) {
    p1 = p1 === null ? headB : p1.next;
    p2 = p2 === null ? headA : p2.next;
  }
  return p1;
};

// 思路2：是否可以反转链表后再进行遍历
