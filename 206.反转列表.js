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
var reverseList = function (head) {
    let nodeA = null;
    let nodeB = head;
    while (nodeB !== null) {
        let temp = nodeB.next;
        nodeB.next = nodeA;

        nodeA = nodeB
        nodeB = temp;
    }
    return nodeA
};