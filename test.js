// let s = "bB";
// s = String(s).replace(/ /g, "");
// if (!s) console.log("");

// let res = s[0];
// for (let i = 1; i < s.length; i++) {
//   if (s[i] !== s[i - 1]) {
//     res += s[i];
//   }
// }
// console.log(res);

// let n = 5;
// let A = ["1", "6", "3", "3", "8"];
// for (let i = 0; i < n; i++) {
//   A[i] = parseInt(A[i]);
// }
// // console.log(A);
// let dp = [0];
// for (let i = 1; i < n; i++) {
//   dp[i] = 0;
//   for (let j = 0; j < i; j++) {
//     if (A[j] < A[i]) dp[i] = Math.max(dp[i], A[j]);
//   }
// }
// // console.log(dp);
// let res = 0;
// for (let i = 1; i <= n; i++) {
//   res += dp[i - 1] * i;
// }
// console.log(res);

let n = 6, k = 3
let arr =[1, 6, 5, 2, 2, 5]
let x = 0