/**
 * @param {number} n
 * @return {number}
 */
// 非递归版
var climbStairs = function (n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  let n1 = 1;
  let n2 = 1;
  let tempArr = [n1, n2];
  for (let i = 2; i <= n; i++) {
    tempArr[i] = n1 + n2;
    n1 = n2;
    n2 = tempArr[i];
  }
  return tempArr[n];
};

// 数字太大会爆栈
var climbStairs2 = function (n) {
  if (n < 2) return 1;
  return climbStairs(n - 1) + climbStairs(n - 2);
};
console.log(climbStairs(45));
console.log(climbStairs2(45));