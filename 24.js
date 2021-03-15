

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
    let dummy = new ListNode()
    dummy.next = head
    let p = dummy;
    let p1, p2;

    while (p.next !== null && p.next.next !== null) {
        p1 = p.next
        p2.next.next

        p1.next = p2.next;
        p2.next = p1;
        p.next = p2;

        p = p1;
    }
    return dummy.next
};