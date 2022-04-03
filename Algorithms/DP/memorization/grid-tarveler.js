/* 
    Say that you are a traveler on a 2D grid. You being in the
    top-left corner and your goal is to travel to the bottom-right
    corner. You may only move down or right.
*/

const gridTraveller = (m,n, memo={}) => {
    const key = m + ',' + n

    if(key in memo) return memo[key]
    if (m===1 && n ===1) return 1
    if (m===0 || n ===0) return 0

    memo[key] = gridTraveller(m-1, n, memo) + gridTraveller(m,n-1, memo)
    console.log(memo);
    return memo[key]
}


console.log( gridTraveller(2,3) );
console.log( gridTraveller(18,18) );