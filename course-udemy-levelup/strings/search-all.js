/* 
    Implement a function that returns
    a list of all occurences of a given substring
    inside a big string
*/

let inputData = []

process.stdin.on("data", (data) => {
    inputData.push(data.toString().trim())
})

process.stdin.on("end", () => {
    main()
})

const findAll = (big, small) => {
    let ocrruences = []
    let i = 0
    while (i < big.length) {
        // Compare if small[i] is cual to small[0] 
        if (big[i] === small[0]) { 
            // obetanin substring from i to small's length           
            const subs = big.substring(i,i+small.length)            
            if (subs === small) {
                ocrruences.push(i) //  add index were ocurence exist
                i += small.length // move index to search once again
            } else {
                i++
            }
        } else {
            i++
        }
    }
    return ocrruences
}


const main = () => {
    const big = inputData[0]
    const small = inputData[1]
    console.log(findAll(big, small));
}
