// resolve回调执行是在所有输入的promise的resolve回调都以resolve状态结束
// reject回调执行是，只要任何一个输入的promise的reject回调执行或者输入不合法的promise就会立即抛出错误

Promise.myAll = (pList) => {
  let resList = [];
  return new Promise((resolve, reject) => {
    pList.forEach((e) => {
      e.then(
        (res) => {
          resList.push(res);
          if (resList.length === pList.length) resolve(resList);
        },
        (rej) => {
          reject(rej);
        }
      );
    });
  });
};

/* test */
let p1 = new Promise((resolve) => {
  resolve("Y");
});
let p2 = new Promise((resolve) => {
  resolve("Y");
});
let p3 = new Promise((resolve) => {
  resolve("Y");
});
Promise.myAll([p1, p2, p3]).then(
  (res) => console.log(res),
  (rej) => console.log(rej)
);

let p4 = new Promise((resolve) => {
  resolve("Y");
});
let p5 = new Promise((resolve, reject) => {
  reject("N");
});
let p6 = new Promise((resolve) => {
  resolve("Y");
});
Promise.myAll([p4, p5, p6]).then(
  (res) => console.log(res),
  (rej) => console.log(rej)
);
