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

var twoSum2 = function(nums, target) {
    if(nums.length === 0){
        return []
    }

    let left = 0, right = nums.length-1;
    let res = []
    tempArr = nums.slice(0)
    tempArr.sort((a, b) => a-b);
    while(left < right){
        if(tempArr[left] + tempArr[right] === target){
            res.push(left, right);
            break;
        }
        else if(tempArr[left] + tempArr[right] > target) right--
        else left++
    }
    if(!res.length) return []
    res.push(nums.indexOf(tempArr[res[0]]))
    // 避免 [3,3] 6
    for(let i=0; i<nums.length; i++){
        if(nums[i] === tempArr[res[1]] && i!=res[2]) res.push(i)
    }
    
    res.shift()
    res.shift()
    return res
};
console.log(twoSum2([2,7,11,5], 9))
