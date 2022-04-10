/* 
    Given a ladder of size N, and an integer of K, write 
    function to compute number of ways to climb the ladder
    if you can take a jump of almost k a every step.
*/

let inputData = []
let i = 0

const readLine = () => (parseInt(inputData[i++]))

const ladderProblem = (k, n) => {
    let table = Array(n + 1).fill(0)
    table[0] = 1

    for (let i = 1; i <= n; i++) {
        for (let j = 0; j <= k; j++) {
            if (i - j >= 0) table[i] += table[i - j]
        }
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
