var node4 = { left: null, right: null, val: 4 };
var node5 = { left: null, right: null, val: 5 };
var node6 = { left: null, right: null, val: 6 };
var node7 = { left: null, right: null, val: 7 };
var node3 = { left: node6, right: node7, val: 3 };
var node2 = { left: node4, right: node5, val: 2 };
var node1 = { left: node2, right: node3, val: 1 };

function levelOrder(root) {
    let res = []
    let queue = []
    queue.push(root)
    while (queue.length !== 0) {
        let subRes = [] // 存放单层的数据
        let len = queue.length
        for (let i = 0; i < len; i++) {
            let cur = queue.shift()
            subRes.push(cur.val)

            if (cur.left) queue.push(cur.left)
            if (cur.right) queue.push(cur.right)
        }
        res.push(subRes)
    }
    console.log(res)
}
levelOrder(node1)


