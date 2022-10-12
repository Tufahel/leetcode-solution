/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minn = 10000002;
    let profit_today = 0;
    let profit = 0

    for(let i = 0; i < prices.length; i++){
        if(minn > prices[i]){
            minn = prices[i];
        }
        profit_today = prices[i] - minn;
        if(profit < profit_today) profit= profit_today;
    }
    return profit;
};