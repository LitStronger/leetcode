function format2(name) {
  // write code here
  let res = "";
  for (let i = 0; i < name.length; i++) {
    if (
      i != 0 &&
      "A" <= name[i] &&
      name[i] <= "Z" &&
      i < name.length - 1 &&
      "a" <= name[i + 1] &&
      name[i + 1] <= "z"
    ) {
      return (res += name.slice(i));
    }

    if ("A" <= name[i] && name[i] <= "Z") {
      res += name[i].toLowerCase();
    } else if (name[i] === "_" && i < name.length - 1) {
      res += name[i + 1].toUpperCase();
      i++;
    } else {
      res += name[i];
    }
  }
  return res;
}
console.log(format2("2TES2T_2VV_ARIABLE"));
console.log(format2("TestVariable"));

// console.log("_".toUpperCase());

/**
 * Note: 类名、方法名、参数名已经指定，请勿修改
 *
 *
 *
 * @param name string字符串 变量名
 * @return string字符串
 */
// function format(name) {
//   // write code here
//   let res = "";
//   for (let i = 0; i < name.length; i++) {
//     if ("A" <= name[i] && name[i] <= "Z") {
//       res += name[i].toLowerCase();
//     }
//     else if (
//       (name[i] === "_" &&
//         i < name.length - 1 &&
//         "a" <= name[i + 1] &&
//         name[i + 1] <= "z") ||
//       ("A" <= name[i + 1] && name[i + 1] <= "Z")
//     ) {
//       res += name[i + 1].toUpperCase();
//       i++;
//     }
//     else {
//       res += name[i];
//     }
//   }
//   return res;
// }
// module.exports = {
//     format : format
// };
