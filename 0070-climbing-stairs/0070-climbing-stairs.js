/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let n1 = 0, n2 = 1, sum = 0, i = 1;
    while(i <= n ){
        sum = n1 + n2;
        i++;
        n1 = n2;
        n2 = sum;
    }
    return sum;
};