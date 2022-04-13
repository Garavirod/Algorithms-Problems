const rodsCutting = (n, lengthsPrices, memo = {}) => {
    if (n in memo) return memo[n]
    if (n <= 0) return 0
    let maxProfit = 0
    for (let i = 1; i <= n; i++) {
        let profitsum = lengthsPrices[i - 1] + rodsCutting(n - i, lengthsPrices, memo)
        maxProfit = Math.max(maxProfit, profitsum)
    }
    memo[n] = maxProfit
    return maxProfit
}

console.log(rodsCutting(20,[1,5,8,9,10,17,17,20,2,13,24,23,120,3,5,6,7,89,900,144]));