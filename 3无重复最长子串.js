/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLongestSubstring = function (s) {
//     let set = new Set()
//     let maxLength = 0, length = 0;
//     if (s.length == 1) return 1
//     for (let i = 0; i < s.length; i++) {
//         for (let j = i; j < s.length; j++) {
//             if (!set.has(s[j])) {
//                 set.add(s[j])
//                 length++
//             }
//             else {
//                 if (length > maxLength) {
//                     maxLength = length
//                 }
//                 length = 0
//                 set.clear()
//                 break
//             }
//         }
//     }
//     return maxLength

// };

var lengthOfLongestSubstring = function (s) {
  let set = new Set();
  let maxLength = 0;
  let i = 0,
    j = 0;
  for (i; i < s.length; i++) {
    while (set.has(s[i])) {
      set.delete(s[j]);
      j++;
    }
    set.add(s[i]);
    maxLength = Math.max(maxLength, set.size);
  }
  return maxLength;
};
let s = "aabaab!bb";
// console.log(lengthOfLongestSubstring(s))

// 阿强版本，不用set
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring2 = function (s) {
  let subStrList = [];
  let len = 0;
  let i = 0;
  while (i < s.length) {
    while (subStrList.includes(s[i])) {
      subStrList.shift();
    }

    subStrList.push(s[i]);
    len = subStrList.length > len ? subStrList.length : len;
    i++;
  }
  return len;
};

console.log(lengthOfLongestSubstring2("aab"));
