// function searchInsert(nums, target) {
//     let left = 0;
//     let right = nums.length - 1
//     let mid
//     while (left <= right) {
//         mid = Math.floor((right - left) / 2) + left
//         if (target === nums[mid]) {
//             return mid
//         }
//         else if (target < nums[mid]) {
//             right = mid - 1
//         }
//         else {
//             left = mid + 1
//         }
//     }
//     return left
// }
var searchInsert = function (nums, target) {
    const n = nums.length;
    let left = 0, right = n - 1, ans = n;
    while (left <= right) {
        let mid = ((right - left) >> 1) + left;
        if (target <= nums[mid]) {
            ans = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return ans;
};

let arr = [1, 2, 4, 6]
// console.log(searchInsert(arr, 3))
const test = {
    a: 1
}
test.a = 2
console.log(test)