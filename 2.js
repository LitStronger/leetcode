
//Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let res = new ListNode()
    let curr = res
    let flag = 0
    while (l1 !== null || l2 !== null) {
        let sum = 0
        if (l1 !== null) {
            sum += l1.val
            l1 = l1.next
        }
        if (l2 !== null) {
            sum += l2.val
            l2 = l2.next
        }

        sum += flag
        curr.next = new ListNode(sum % 10)
        flag = Math.floor(sum / 10)

        curr = curr.next
    }
    if (flag > 0) {
        curr.next = new ListNode(flag)
    }
    return res.next
};
let l1 = [1, 2, 4], l2 = [1, 2, 6]

console.log(addTwoNumbers(l1, l2))
