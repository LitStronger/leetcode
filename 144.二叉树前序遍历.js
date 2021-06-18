const node3 = { left: null, right: null, val: 3 };
const node2 = { left: node3, right: null, val: 2 };
const node1 = { left: null, right: node2, val: 1 };

// 递归
function preorderTraversal(root){
    const res = []
    const order = (root) => {
        res.push(root.val);
        if(root.left) order(root.left)
        if(root.right) order(root.right)
    }
    if(!root) return []
    order(root)
    console.log(res)
}
preorderTraversal(node1)

// 非递归
function preorderTraversal2(root){
    const res = []
    
}