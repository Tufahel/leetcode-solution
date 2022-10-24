/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    let string = "0ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let arr = [], sum = 0, powr, cnt = 0;
    for(let i = 1 ; i <= 26; i++){
        arr[i]=i;
    }
    
    for(let i = columnTitle.length -1 ; i >= 0; i--){
        for(let j = 1; j <= string.length; j++){
            if(columnTitle[i] === string[j]){
                powr = Math.pow(26, cnt);
                sum = sum + (arr[j] * powr);
                break;
            }
        }
        cnt++;
    }
    
    return sum;
};