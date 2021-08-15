// 1.反转根节点的左子树（递归调用反转函数）
// 2.反转根节点的右子树（递归调用反转函数）
// 3.交换根节点的左节点和右节点。

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var invertTree = function (root) {
  if (!root) return root;
  let tempNode = root.left;
  root.left = root.right;
  root.right = tempNode;
  invertTree(root.left);
  invertTree(root.right);
  return root;
};
