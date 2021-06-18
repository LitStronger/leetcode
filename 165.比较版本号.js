
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
    let verArr1 = version1.split('.');
    let verArr2 = version2.split('.');
    let len1 = verArr1.length;
    let len2 = verArr2.length;
    let len = Math.max(len1, len2);
    let res, i = 0; j = 0;
    while (i < len) {
        if (i < len1 && i < len2) {
            console.log(parseInt(verArr1[i]), parseInt(verArr2[i]))
            if (parseInt(verArr1[i]) > parseInt(verArr2[i])) {
                res = 1;
                break;
            }
            else if (parseInt(verArr1[i]) < parseInt(verArr2[i])) {
                res = -1;
                break;
            }
            else {
                res = 0;
            }
        }
        else if (i >= len2) {
            if (parseInt(verArr1[i])) {
                res = 1;
                break
            }
            else {
                res = 0;
            }
        }
        else if (i >= len1) {
            if (parseInt(verArr2[i])) {
                res = -1;
                break;
            }
            else {
                res = 0;
            }
        }
        i++;
    }
    console.log(res)
};
let version1 = "1.0.1", version2 = "1";

compareVersion(version1, version2)