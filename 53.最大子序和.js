/**
 * @param {number[]} nums
 * @return {number}
 */
// 动态规划
// 对于数组里的每个元素，都要进行一次抉择：是要保留前面得到的最大和，还是以当前元素作为新起点（存放到dp）
var maxSubArray = function (nums) {
  if (!nums.length) return 0;
  let maxSum = nums[0];
  let dp = [];
  dp[0] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] + dp[i - 1] > nums[i]) {
      dp[i] = nums[i] + dp[i - 1];
    } else {
      dp[i] = nums[i];
    }
  }
  for (let i = 0; i < dp.length; i++) {
    maxSum = Math.max(maxSum, dp[i]);
  }
  return maxSum;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

// 精简一下
var maxSubArray = function (nums) {
  if (!nums.length) return 0;
  let maxSum = nums[0];
  let dp = [nums[0]];

  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
    maxSum = Math.max(maxSum, dp[i]);
  }

  return maxSum;
};
