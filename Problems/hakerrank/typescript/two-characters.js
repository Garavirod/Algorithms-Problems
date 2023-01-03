/* 
    Given a string, remove characters until the
    string is made up of any two alternating characters. 
    When you choose a character to remove, 
    all instances of that character must be removed. 
    Determine the longest string possible that 
    contains just two alternating letters
*/


let dataInput = ""

process.stdin.on("data", (data) => {
    dataInput = data.toString().trim()
})


process.stdin.on("end", () => {
    main()
})






function alternate(str){
    let j = 0
    let indexChar = {}
    for (let i = 0; i < str.length; i++) {
        if(indexChar[str[i]]){
            indexChar[str[i]] = j
            j++
        }
    }
    const n = Object.keys(indexChar)

    const matrix = Array.from({length: n }, () => Array.from({length: n},() => ''))

    for (let i = 0; i < str.length; i++) {
        let it = indexChar
        let idxChar = indexChar[str[i]]

        while (it < n) {                        
            if(matrix[idxChar][it] === str[i] )
                matrix[idxChar][it] = ''
            else
                matrix[idxChar][it] += str[i]
            
            if(matrix[it][indexChar] === str[i] )
                matrix[it][indexChar] = ''
            else
                matrix[it][indexChar] += str[i]            
            it++
        }
        
    }


}


function main() {
    console.log(alternate(dataInput));
}
