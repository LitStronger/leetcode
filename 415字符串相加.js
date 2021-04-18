/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
    let flag = 0;
    let res = '';
    let len1 = num1.length;
    let len2 = num2.length;
    let len = Math.min(num1.length, num2.length);
    while (len--) {
        let sum = parseInt(num1[--len1]) + parseInt(num2[--len2]) + flag;
        flag = parseInt(sum / 10);
        res += sum % 10;

    }
    while (len1 > 0) {
        let sum = parseInt(num1[--len1]) + flag;
        flag = parseInt(sum / 10);
        res += sum % 10;
    }
    while (len2 > 0) {
        let sum = parseInt(num2[--len2]) + flag;
        flag = parseInt(sum / 10);
        res += sum % 10;
    }
    while (flag) {
        res += flag;
        flag = 0
    }
    return res.split('').reverse().join('');
};
// console.log(addStrings("77", "456"))


// 结构优化
function addStrings2(num1, num2) {
    let len1 = num1.length;
    let len2 = num2.length;
    let res = '';
    let flag = 0;
    while (len1 > 0 || len2 > 0) {
        let sum = 0;
        if (len1 > 0 && len2 > 0)
            sum = parseInt(num1[len1 - 1]) + parseInt(num2[len2 - 1]) + flag;
        else if (len1 > 0)
            sum = parseInt(num1[len1 - 1]) + flag;
        else if (len2 > 0)
            sum = parseInt(num2[len2 - 1]) + flag;
        flag = parseInt(sum / 10)
        res += sum % 10;
        len1--;
        len2--;
    }
    if (flag > 0)
        res += flag;
    return res.split('').reverse().join('')
}
console.log(addStrings2("0", ""))
