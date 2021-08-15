function findKthLargest(arr, k) {
  function swap(a, i, j) {
    let tmp = a[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }
  function partition(arr, left, right) {
    let x = arr[right];
    let index = left;
    for (let i = left; i < right; i++) {
      if (arr[i] < x) {
        swap(arr, index, i);
        index++;
      }
    }
    swap(arr, index, right);
    return index;
  }

  function quickSort(arr, left, right, kIndex) {
    if (left > right) return;
    let x = partition(arr, left, right);

    if (x === kIndex) return arr[x];
    else
      return x > kIndex
        ? quickSort(arr, left, x - 1, kIndex)
        : quickSort(arr, x + 1, right, kIndex);
  }
  return quickSort(arr, 0, arr.length - 1, arr.length - k);
}
console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));
