/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let l = 0, r = nums.length-1, m = parseInt((l+r)/2);

    while(l<=r) {
        if(nums[m] < target){
            l = m + 1;
        }
        else if(nums[m] > target){
            r = m - 1;
        }
        else {
            return m;
        }
        m = parseInt((l+r)/2);
    }
    return -1;
};