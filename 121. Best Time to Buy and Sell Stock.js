/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0;
    let buy = prices[0];

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] - buy < 0) buy = prices[i];
        if (prices[i] - buy > 0) profit = Math.max(prices[i] - buy, profit);
    };

    return profit;
};

const prices = [7,6,4,3,1];

const result = maxProfit(prices);

console.log(result);