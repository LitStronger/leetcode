const node3 = { left: null, right: null, val: 3 };
const node2 = { left: node3, right: null, val: 2 };
const node1 = { left: null, right: node2, val: 1 };


function inorderTraversal(root) {
    const res = []
    const order = (root) => {
        if (root.left) order(root.left)
        res.push(root.val)
        if (root.right) order(root.right)
    }
    if (!root) return []
    order(root)
    console.log(res);
    return res
}
inorderTraversal(node1)