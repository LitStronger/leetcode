var coinChange = function (coins, amount) {
  let minCount = amount;
  function deep(preSum, count) {
    for (let i = 0; i < coins.length; i++) {
      if (preSum === amount) {
        minCount = Math.min(minCount, count);
      }
      if (preSum > amount) {
        return;
      }
      deep(preSum + coins[i], count + 1);
    }
  }
  deep(0, 0);
  return minCount;
};
console.log(coinChange([1, 2, 5], 6));

// [1,2,5]  9
// 动态规划，通常是先反向推理，有眉目后再正向写代码
// 9之前有三种结果，9-1, 9-2, 9-5(8, 7, 4)
// 8, 7, 4  三者之前各自也有三种情况,比如8之前有 8-1，8-2，8-5（7，6，3）； 7和4同理
// ...
// ...
// 直到所有情况都推理到0，就可以找到所有的方案

// 正向处理则是：对于硬币数额amount，每次增加1，都要进行一次抉择：dp[i]是否可以基于前面的结果+1（如果amount小于单个硬币值，则不可以）
// 硬币最小值为1，那么达到amount值硬币数最大必定是amount（即amount*1）
// 这里就可以把amount初始化为amount+1，如果遍历完之后，dp[amount]是这个值，则说明没有组合满足条件
var coinChange2 = function (coins, amount) {
  let dp = new Array(amount + 1).fill(amount + 1);
  dp[0] = 0;
  for (let i = 0; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (coins[j] <= i) dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
    }
  }
  return dp[amount];
};
console.log(coinChange2([1, 2, 5], 6));
