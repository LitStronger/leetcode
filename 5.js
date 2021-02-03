/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let maxLength = 1;  // 初始化为1，解决诸如s='abc'返回0的情况 
    let start = 0;
    function expandAroundCenter(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            if (right - left + 1 > maxLength) {
                maxLength = right - left + 1
                start = left
            }
            left--;
            right++;
        }
    }
    if (s.length <= 1) return s
    for (let i = 0; i < s.length; i++) {
        expandAroundCenter(i - 1, i + 1) // 处理奇数回文串
        expandAroundCenter(i, i + 1) // 处理偶数回文串
    }
    return s.slice(start, start + maxLength)
};
let s = 'babad'
console.log(longestPalindrome(s))
