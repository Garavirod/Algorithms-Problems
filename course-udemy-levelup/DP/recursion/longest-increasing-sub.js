/* 
    Given an array suqeunce find the length of
    longest, subsecuence of such that all elements
    of the subsecuence are sorted in increasing order.
*/




const lis = (i, arr) => {
    if (i === arr.length - 1) return 0

    let maxSub = 1
    
    for (let j = i; j <= arr.length-1; j++) {
        let resp = 1 + lis(j+1, arr)        
        if (arr[j] > arr[i]) {            
            maxSub += resp
        }
    }
    return maxSub
}

console.log(lis(0, [50, 4, 10, 8, 30, 100]));