/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
  let verArr1 = version1.split(".");
  let verArr2 = version2.split(".");
  let len1 = verArr1.length;
  let len2 = verArr2.length;
  let len = Math.max(len1, len2);
  let res,
    i = 0;
  j = 0;
  while (i < len) {
    if (i < len1 && i < len2) {
      console.log(parseInt(verArr1[i]), parseInt(verArr2[i]));
      if (parseInt(verArr1[i]) > parseInt(verArr2[i])) {
        res = 1;
        break;
      } else if (parseInt(verArr1[i]) < parseInt(verArr2[i])) {
        res = -1;
        break;
      } else {
        res = 0;
      }
    } else if (i >= len2) {
      if (parseInt(verArr1[i])) {
        res = 1;
        break;
      } else {
        res = 0;
      }
    } else if (i >= len1) {
      if (parseInt(verArr2[i])) {
        res = -1;
        break;
      } else {
        res = 0;
      }
    }
    i++;
  }
  console.log(res);
};
let version1 = "1.0.1",
  version2 = "1";

// compareVersion(version1, version2)

// 优化: 进行比较前先补零，使其长度相等

var compareVersion2 = function (version1, version2) {
  if (!version1 || !version2) return 0;
  const v1Arr = version1.split(".");
  const v2Arr = version2.split(".");
  if (v1Arr.length > v2Arr.length) {
    for (let i = v2Arr.length - 1; i < v1Arr.length; i++) v2Arr.push(0);
  }
  if (v2Arr.length > v1Arr.length) {
    for (let i = v1Arr.length - 1; i < v2Arr.length; i++) v1Arr.push(0);
  }
  for (let i = 0; i < v1Arr.length; i++) {
    let v1 = parseInt(v1Arr[i]);
    let v2 = parseInt(v2Arr[i]);

    if (v1 > v2) return 1;
    else if (v2 > v1) return -1;
  }
  return 0;
};
