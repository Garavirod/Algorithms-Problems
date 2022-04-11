/* 
    Given a ladder of size N, and an integer of K, write 
    function to compute number of ways to climb the ladder
    if you can take a jump of almost k a every step.

    1   stairs with 1,2,3,...k jumps
    
    2   stairs with 1,2,3,...k jumps
    
    3   stairs with 1,2,3,...k jumps
    
    4   stairs with 1,2,3,...k jumps

    it1 = up 1 st with 1,2,3 = 1 - All the ways to up 1 stairs with k jumps 
    it2 = it1 + up st 2 with(1,2,3)k = 2 - All the ways to up 2 stairs with k jumps 
    it3 = it1 + it2  + up 3 with (1,2,3)k = 4 - All the ways to up 3 stairs with k jumps 
    it4 = it1 + it2  + up 4 with (1,2,3)k = 7 - All the ways to up 4 stairs with k jumps 


    response = it1 + it2 + it3 it4
    
*/

let inputData = []
let i = 0

const readLine = () => (parseInt(inputData[i++]))

const ladderProblem = (k, n) => {
    let table = Array(n + 1).fill(0)
    table[0] = 1

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= k; j++) {
            if (i - j >= 0) table[i] += table[i - j]
        }
    }

    return table[n]

}

// Optimal solution O(k+n)

const optimalLadderProblem = (k, n) => {
    let table = Array(n + 1).fill(0)
    table[0] = 1
    table[1] = 1

    for(let i = 2; i<= k; i++){
        table[i] = 2*table[i-1]
    }
    for(let i = k+1; i<= n; i++){
        table[i] = 2*table[i-1] - table[i-k-1]
    }

    return table[n]
}


/* process.stdin.on("data", (data) => {
    inputData.push( data.toString().trim() )
})


process.stdin.on("end", () => {
    main()
})

const main = () => {
    const k = readLine()
    const n = readLine()
    console.log( ladderProblem(k,n) );
} */

console.log( ladderProblem(3,4) );
console.log(  optimalLadderProblem(3,4) );
