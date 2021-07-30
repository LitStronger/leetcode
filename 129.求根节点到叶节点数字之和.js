/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
let node1 = { left: null, right: null, val: 1 };

let root = { left: node1, right: null, val: 0 };
var sumNumbers = function (root) {
  if (!root) return 0;
  const dfs = function (curRoot, preSum) {
    preSum = preSum * 10 + curRoot.val;
    if (!curRoot.reft && !curRoot.right) return preSum;
    else {
      return dfs(curRoot.left, preSum) + dfs(curRoot.right, preSum);
    }
  };
  return dfs(root, 0);
};
console.log(sumNumbers(root));
