/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let string1 = s ;
    let string2 = t ;

    let map = new Map();
    let map1 = new Map();

    for(let i = 0; i < string1.length; i++){
        if(map1.get(string1[i]+'1') == true && map.get(string1[i]) !== string2[i]){
            return false
        }
        if(map1.get(string2[i]+'2') == true && map.get(string2[i]) !== string1[i]){
            return false
        }
        if(map.get(string1[i]) === undefined ){
            map.set(string1[i], string2[i]);
            map1.set(string1[i]+'1', true);
            map1.set(string2[i]+'2', true);
        }
        if(map.get(string2[i]) === undefined ){
            map.set(string2[i], string1[i]);
            map1.set(string2[i]+'2', true);
            map1.set(string1[i]+'1', true);
        }
    }
    return true;
};