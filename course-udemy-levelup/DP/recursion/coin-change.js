/* 
    Given an array of coin denominations,
    and integer M representing target money.
    We need to finds the min coins required
    to make the change.
    NOTE: You can take the same coin as you want
*/

const coinChange = (targetMoney, coins, memo={}) => {
    if (targetMoney in memo) return memo[targetMoney]
    if (targetMoney === 0) return []
    if (targetMoney < 0 ) return null    
    let minChange = null
    for(let c of coins){        
        let change = coinChange(targetMoney - c, coins, memo)
        if( change !== null ){
            change = [...change, c]
            if ( !minChange || minChange.length > change.length )
                minChange = change
        }
    }
    memo[targetMoney] = minChange
    return minChange
}

const targetMoney = 1000
const coins = [1,2,3,15]

console.log( coinChange(targetMoney, coins) );