function threeSum(nums) {
    let res = []
    let i = 0, start = 0, end = 0;

    // if (nums.length < 3) return res
    for (i; i < nums.length - 2; i++) {
        if (i == 0 || nums[i] != nums[i - 1]) { // 去重
            start = i + 1
            end = nums.length - 1
            while (start < end) {
                if (nums[i] + nums[start] + nums[end] > 0) {
                    end--;
                }
                else if (nums[i] + nums[start] + nums[end] < 0) {
                    start++;
                }
                else {
                    res.push([nums[i], nums[start], nums[end]])
                    start++
                    end--
                    while (start < end && nums[start] === nums[start - 1]) {            // 去重
                        start++
                    }
                    while (start < end && nums[end] === nums[end + 1]) {
                        end--
                    }
                }
            }
        }
    }
    return res
}
let nums = [-2, 0]
console.log(threeSum(nums))
let i = 1
