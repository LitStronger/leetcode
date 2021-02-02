/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let res = []
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            if (nums[j] + nums[i] === target) {
                res.push(i);
                res.push(j);
                return res
            }
        }
    }
    return null
};
console.log(twoSum([3,2,4], 6))
