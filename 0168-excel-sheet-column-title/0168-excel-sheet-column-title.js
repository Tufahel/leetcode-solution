/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    let string = "ZABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let mod, str='';
    
    while(1){
        if(columnNumber <= 26){
            str = str + string[columnNumber];
            return str.split("").reverse().join("");
        }
        mod = columnNumber % 26;
        if(mod !== 0) str = str + string[mod];
        else if(mod === 0) {
            str = str + string[mod];
            columnNumber -= 1;
        }
        columnNumber = parseInt((columnNumber/26), 10);
    }
};