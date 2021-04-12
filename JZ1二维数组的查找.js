// 选取左下角或者右上角为起点（不选择左上/右下元素的原因是: 与target进行比较时会有两种选择...更麻烦）
// 另一种方法是对每一行都进行二分查找，复杂度为O(n * log(n)) 

function Find(target, array) {
    // write code here
    // i行j列
    let i = array.length - 1;
    let j = 0;

    while (j < array[0].length && i >= 0) {
        if (target > array[i][j]) {
            j++;
        }
        else if (target < array[i][j]) {
            i--;
        }
        else {
            return true
        }
    }
    return false
}
