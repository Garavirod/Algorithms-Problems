/* 
    Given a ladder of size N, and an integer of K, write 
    function to compute number of ways to climb the ladder
    if you can take a jump of almost k a every step.
*/

let inputData = []
let i = 0

const readLine = () => (parseInt(inputData[i++]))

const ladderProblem = (k, n, memo={}) => {
    if (n in memo) return memo[n]
    if (n == 0) return 1
    if (n < 0) return 0

    let ways = 0
    for (let i = 1; i <= k; i++) {
        memo[n-i] = ladderProblem(k, n - i, memo)  
        ways += memo[n-i]
    }    
    return ways
}


process.stdin.on("data", (data) => {
    inputData.push( data.toString().trim() )
})


process.stdin.on("end", () => {
    main()
})

const main = () => {
    const k = readLine()
    const n = readLine()
    console.log( ladderProblem(k,n) );
}

