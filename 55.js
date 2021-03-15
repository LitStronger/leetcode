// 解法一: 自底向上（bottom up）
// var canJump = function (nums) {
//     let reachable = new Array(nums.length).fill(0)
//     reachable[nums.length - 1] = 1
//     for (let i = nums.length - 2; i >= 0; i--) {
//         for (let j = i; j <= nums[i] + i && j <= nums.length - 1; j++) {
//             if (reachable[j] === 1) {
//                 reachable[i] = 1
//             }
//         }
//     }

//     if (reachable[0] === 1)
//         return true
//     else
//         return false
// };

// 解法二: 贪心
function canJump(nums) {
    let maxJump = nums.length - 1
    for (let i = nums.length - 2; i >= 0; i--) {
        if (nums[i] + i >= maxJump) {
            maxJump = i
        }
    }
    console.log(maxJump)
    if (maxJump === 0) return true

    return false
}
nums = [2, 3, 1, 1, 4]

console.log(canJump(nums))

