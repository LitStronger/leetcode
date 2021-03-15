/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let map = {
        '{': '}',
        '[': ']',
        '(': ')'
    }
    let stack = []
    for (let i = 0; i < s.length; i++) {
        if (map.hasOwnProperty(s[i])) {
            stack.push(s[i])
        }
        else {
            if (map[stack.pop()] !== s[i]) {
                return false
            }
        }
    }
    console.log(stack)
    if (stack.length !== 0)
        return false
    return true
};
let s = '{[)]'
console.log(isValid(s))
