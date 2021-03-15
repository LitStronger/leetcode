var maxSubArray = function (nums) {
    if (nums.length == 0) return nums[0]
    let maxSum = nums[0];
    let tempArr = []
    tempArr[0] = nums[0]
    for (let i = 1; i < nums.length; i++) {
        tempArr[i] = Math.max(tempArr[i - 1] + nums[i], nums[i])
    }
    for (let i = 1; i < tempArr.length; i++) {
        maxSum = Math.max(tempArr[i], maxSum)
    }
    console.log(maxSum)
    return maxSum
};
nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
maxSubArray(nums)