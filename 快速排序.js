function partition(arr, low, high) {
    let x = arr[low]   // 将主元素取出(避免被其他数覆盖)
    let j = low;
    for (let i = low; i < high + 1; i++) {
        if (arr[i] < x) {
            let temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
            j++
        }
    }
    arr[j] = x  // 将主元素归位
    return j
}
function quickSort(arr, low, high) {
    if (low < high) {
        let k = partition(arr, low, high) // 取主元素，划分为两部分

        quickSort(arr, low, k - 1)
        quickSort(arr, k + 1, high)
    }
}
arr = [1, 4, 3, 2]
quickSort(arr, 0, arr.length - 1)
console.log(arr)