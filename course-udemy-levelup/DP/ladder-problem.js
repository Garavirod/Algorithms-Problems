/* 
    Given a ladder of size N, and an integer of K, write 
    function to compute number of ways to climb the ladder
    if you can take a jump of almost k a every step.
*/

let inputData = []
let i = 0

const readLine = () => ( parseInt(inputData[i++]) )

const ladderProblem = (k,n) => {
    if (n <= 1) return 1    
    let ways = 0
    for (let i = 1; i<=n; i++) {
        ways += ladderProblem(k,n-i) 
        console.log(n-i+"-"+ways);
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