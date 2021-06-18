var node3 = { left: null, right: null, val: 3 };
var node2 = { left: node3, right: null, val: 2 };
var node1 = { left: null, right: node2, val: 1 };


function inorderTraversal(root) {
    const res = []
    const order = (root) => {
        if (root.left) order(root.left)
        res.push(root.val)
        if (root.right) order(root.right)
    }
    order(root)
    console.log(res);
    return res
}
inorderTraversal(node1)