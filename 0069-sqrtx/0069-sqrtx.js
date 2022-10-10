/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let left=0,right=x, mid;
    while(left<=right){
        mid = parseInt((right+left)/2);
        if((mid*mid)<x) {
            left = mid+1;
        }
        else if((mid*mid)>x){
            right = mid-1;
        }
        else {
            return mid;
        }
    }

    return right;
};