/*

You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

Technique : Two pointers

*/

function maxProfit(prices: number[]): number {
    let l = 0, r = 1
    let maxProfit = 0
    
    while( r < prices.length ){
        if(prices[r] > prices[l])
            maxProfit = Math.max(maxProfit, prices[r] - prices[l])                     
        else
            l = r  
        r++
    }

    return maxProfit
};
