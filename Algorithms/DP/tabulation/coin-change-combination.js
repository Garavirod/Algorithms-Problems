/* 
    Given an amount and the denominations of coins available, determine how many ways change can be made for amount. 
    There is a limitless supply of each coin type.
*/

const getChangeCombination = (n,c) => {
    // Table[i] represent a combination of form amount i
    let table = Array(n).fill(0)
    table[0] = 1

    for(let a in c){
        for (let i = 1; i < c.length; i++) {
            if(i >= a ){
                table[i] += table[i - a]
            }            
        }
    }

    return table[n]
}