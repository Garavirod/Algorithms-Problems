/* 
    Given an array of coin denominations,
    and integer M representing target money.
    We need to finds the min coins required
    to make the change.
    NOTE: You can take the same coin as you want

    Time complexity O(N*M)
    Space complexity O(N)


*/


const coinChange = (targetChange, coins) => {
    let table = Array(targetChange + 1)
    table[0] = 0
    /* 
        Each iteration table[i] means you can form
        i-target with minimun cins of M

        [0, 1, 1, 2, ?]

        i = 4 coins = [1,2,13]
            (4 - 1) = 3 -  table[3]  = 2
            (4 - 2) = 2 - table[2] = 1

        
        Where table[3] implicates the minimun coins to form 3
        Where table[2] implicates the minimun coins to form 2

        Take table[2] + 1 (+1 implicates you pick up a coin to reach on state table[2])

    */
    for (let i = 1; i <= targetChange; i++) {
        table[i] = Number.MAX_SAFE_INTEGER
        for(let c of coins){
            if( i - c >= 0) // Because it the only way to form i with k coins in M
                table[i]  = Math.min( table[i], table[i - c] + 1 )            
        }      
    }
    return (table[targetChange] === Number.MAX_SAFE_INTEGER)? -1 : table[targetChange]
}



console.log(coinChange(15, [1,3,7,10]));