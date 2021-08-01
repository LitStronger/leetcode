/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
// 蠢办法，转数组存起来
var isPalindrome = function (head) {
  let tempArr = [];
  let pNode = head;
  let left = 0,
    right = 0;
  while (pNode) {
    tempArr.push(pNode.val);
    pNode = pNode.next;
  }
  right = tempArr.length - 1;
  while (left <= right) {
    if (tempArr[left] !== tempArr[right]) return false;
    left++;
    right--;
  }
  return true;
};
const node3 = { val: 1, next: null };
const node2 = { val: 0, next: node3 };
const node1 = { val: 1, next: node2 };
// console.log(isPalindrome(node1));

// 方法二：使用快慢指针
var isPalindrome2 = function (head) {
  if (!head) return true;
  let fast = head;
  let slow = head;
  let slowLen = 0;
  let pre = null;
  let cur = null;
  let nex = null;
  // fast：长度为偶数时指向null，奇数时指向末尾node
  // 1 2 null     1 2 3 null
  while (fast && fast.next) {
    pre = slow;
    slow = slow.next;
    slowLen++;
    fast = fast.next ? fast.next.next : fast.next;
  }

  cur = slow;
  while (cur) {
    nex = cur.next;
    cur.next = pre;

    pre = cur;
    cur = nex;
  }
//   console.log(head, pre, slow);

  while (head != slow) {
    if (pre.val !== head.val) return false;
    pre = pre.next;
    head = head.next;
  }
  return true;
};
console.log(isPalindrome2(node1));
