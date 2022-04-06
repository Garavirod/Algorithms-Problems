/* 
    Say that you are a traveler on a 2D grid. You being in the
    top-left corner and your goal is to travel to the bottom-right
    corner. You may only move down or right.
*/

const gridTravelTab = (m, n) => {
    const table = Array.from(
        {length:m+1}, ()=> Array.from({length:n+1},()=>0)
    )

    table[1][1] = 1 // base case

    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {            
            const current = table[i][j]
            if(j+1 <= n) table[i][j+1] += current   
            if(i+1 <= m) table[i+1][j] += current   
        }        
    }

    return table[m][n]

}


console.log( gridTravelTab(3,3) );