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
 * @param {number} targetSum
 * @return {boolean}
 */

// 就是一个简单的深度遍历

var hasPathSum = function (root, targetSum) {
  if (!root) return false;
  let res = false;
  const dfs = (curRoot, preSum) => {
    preSum = preSum + curRoot.val;
    if (!curRoot.left && !curRoot.right) {
      if (preSum === targetSum) {
        res = true;
      }
      return;
    }
    if (curRoot.left) {
      dfs(curRoot.left, preSum);
    }
    if (curRoot.right) {
      dfs(curRoot.right, preSum);
    }
  };
  dfs(root, 0);
  return res;
};
