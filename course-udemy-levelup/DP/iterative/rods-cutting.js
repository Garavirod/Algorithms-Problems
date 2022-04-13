const rodsCutting = (n, lengthsPrices, memo = {}) => {
    let table = Array(n+1).fill(0)

    for(let i = 1; i<=n; i++){
        let maxProfit = Number.MIN_SAFE_INTEGER
        for (let j = 0; j < i; j++) {            
            let current = lengthsPrices[j] + table[i-(j+1)]
            maxProfit = Math.max(maxProfit, current)
        }
        table[i] = maxProfit
    }

    return table[n]
}

console.log(rodsCutting(20,[1,5,8,9,10,17,17,20,2,13,24,23,120,3,5,6,7,89,900,144]));