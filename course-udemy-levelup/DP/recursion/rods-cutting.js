const rodsCutting = (n, lengthsPrices) => {
    if (n <= 0) return 0
    let maxProfit = 0
    for (let i = 1; i <= n; i++) {
        let profitsum = lengthsPrices[i - 1] + rodsCutting(n - i, lengthsPrices)
        maxProfit = Math.max(maxProfit, profitsum)
    }

    return maxProfit
}

console.log(rodsCutting(8,[1,5,8,9,10,17,17,20]));