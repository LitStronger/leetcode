/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  // 0 or 1
  if (!nums?.length) return 0;
  let maxlen = 0;
  const dp = [];
  for (let i = 0; i < nums.length; i++) {
    dp[i] = 1;
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j]+1);
      }
    }
    maxlen = Math.max(dp[i], maxlen);
  }
  console.log(dp);
  return maxlen;
};

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
