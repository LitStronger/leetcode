function maxSquare(matrix) {
  // write code here
  if(!matrix.length) return 0
  function getXLen(x_, y_) {
    let len = 0;
    while (y_ < matrix[0].length && matrix[x_][y_]) {
      for (let i = x_; i < x_ + len; i++) {
        if (!matrix[i][y_]) return len;
      }
      len++;
      y_++;
    }
    return len;
  }
  function getYLen(x_, y_) {
    let len = 0;
    while (x_ < matrix.length && matrix[x_][y_]) {
      for (let i = y_; i < y_ + len; i++) {
        if (!matrix[x_][i]) return len;
      }
      len++;
      x_++;
    }
    return len;
  }
  let temp = [[]];
  let maxS = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      let x = getXLen(i, j);
      let y = getYLen(i, j);
      //   console.log(i,j);
      //   console.log(i + 1, temp.length);
      if (i + 1 > temp.length) {
        temp.push([]);
      }
      let minLen = Math.min(x, y);
      temp[i].push(minLen * minLen);
    }
  }
  console.log(temp);

  for (let i = 0; i < temp.length; i++) {
    for (let j = 0; j < temp[i].length; j++) {
      maxS = Math.max(maxS, temp[i][j]);
    }
  }
  return maxS;
}
let a = [
  [1, 0, 1, 0, 0],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [1, 0, 0, 1, 0],
];
console.log(maxSquare(a));
