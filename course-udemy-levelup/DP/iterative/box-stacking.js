/* 
    We are given an array of boxes.
    Each boxes is representated using 3 integers
    denoting, height, width, depth of the box.
    Our Goal is stack up the boxes and maximise
    the total goal height of the stak.

    You can´t rotate any box, ie integeres in each box
    must represent [width, depth, height] at all times

    A box must have strictely smaller width, depth and 
    height than any other box below it.
*/


const boxStacking = (boxes) => {
    const n = boxes.length

    // 1. sorting
    boxes.sort((a,b) => a[2] - b[2])

    // 2. Tabulation    
    let table = boxes.map( e => e[2])   

    // Dynamic program
    let maxHeight = 0
    for (let i = 1; i <= boxes.length; i++) {        
        for (let j = 0; j < i; j++) {
            if(table[i] > table[j]){
                if( boxes[i][0] > boxes[j][0] && boxes[i][1] > boxes[j][1] ){
                    table[i] = Math.max( table[i], table[j] + boxes[i][2]) 
                    maxHeight = Math.max( maxHeight, table[i] )
                }
            }   
        }        
    }
    return maxHeight
}

const boxes = [
    [2,2,1],
    [2,1,2],
    [3,2,3],
    [2,3,4],
    [4,4,5],
    [2,2,8]
]

console.log(boxStacking(boxes));
