/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  let count = 0;
  function func(l, r) {
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      count++;
      l++;
      r++;
    }
  }
  // 奇数中心
  for (let i = 0; i < s.length; i++) {
    func(i, i);
  }
  // 偶数中心
  for (let i = 0; i < s.length - 1; i++) {
    func(i, i + 1);
  }
  return count;
};
console.log(countSubstrings('abc'));
