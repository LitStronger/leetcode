function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const preorder = [3, 9, 20, 15, 7];
const inorder = [9, 3, 15, 20, 7];

function TreeBuild(preorder, inorder) {
  //pre 根 左 右
  //ino 左 根 右
  if (!preorder.length) return null;
  const root = new TreeNode();
  root.val = preorder[0];
  const midIndex = inorder.findIndex((e) => e === preorder[0]);
  root.left = TreeBuild(
    preorder.slice(1, midIndex + 1),
    inorder.slice(0, midIndex)
  );
  root.right = TreeBuild(
    preorder.slice(midIndex + 1),
    inorder.slice(midIndex + 1)
  );
  return root;
}

console.log(JSON.stringify(TreeBuild(preorder, inorder)));
console.log(TreeBuild(preorder, inorder));
