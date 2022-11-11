/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    let string = "0ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let sum = 0, mod, cnt = 0, str='';
    
    while(1){
        if(columnNumber <= 26){
            str = str + string[columnNumber];
            return str.split("").reverse().join("");
        }
        mod = columnNumber % 26;
        if(mod !== 0) str = str + string[mod];
        else if(mod === 0) {
            str = str + 'Z';
            columnNumber -= 1;
        }
        columnNumber = parseInt((columnNumber/26), 10);
    }
};