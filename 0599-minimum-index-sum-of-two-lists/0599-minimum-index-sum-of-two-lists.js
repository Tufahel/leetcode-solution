/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    // map throgh the list1, key = string, value = index
    // loop through the list2
        // if list2[id] is in map
            // then, sum with the value of the map
    
    let listMap = new Map(), value, min = Infinity;
    let array = [];
    
    for(let i = 0; i < list1.length; i++){
        listMap.set(list1[i], i);
    }
    
    for(let i = 0; i < list2.length; i++){
        if(listMap.has(list2[i])){
           value = listMap.get(list2[i])+i;
           
           if(value < min) {
               min = value;
               array = [list2[i]];
           }
           else if(value === min){
               array.push(list2[i]);
           }
        }
    }

    return array;
    
};