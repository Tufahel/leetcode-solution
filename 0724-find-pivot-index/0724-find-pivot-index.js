/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let sum = 0, sum1 = 0;
    for(let i = 0; i < nums.length; i++){
        sum = sum + nums[i];
    }
    for(let i = 0; i < nums.length; i++){
        sum1 = sum1 + nums[i];
        if(sum1 === sum-(sum1-nums[i])) return i;
        else continue;
    }
    return -1;
};