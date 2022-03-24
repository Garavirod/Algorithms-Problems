/* 
    Implements a function that takes 
    an input a vector of integers, and prints the 
    maximun subarray sum thta can be formed.  
    If all number are negatives print 0  
*/


const maxSumInSubarray = ( arr ) => {
    let maxSum = 0
    for (let i = 0; i < arr.length; i++) 
        maxSum += arr[i]
    
    if(maxSum<0) return 0

    let acumulates = Array.from({length:arr.length},i => 0)
    let max_num_idx = 0
    let buket = 0

    for (let i = 1; i < arr.length; i++){
        const s =  acumulates[i-1] + arr[i] 
        acumulates[i] = s
        console.log(s);        
        if(s > buket){
            buket = s
            max_num_idx = i
        }
    } 

    let it = 1
    maxSum = arr[max_num_idx]
    console.log(max_num_idx);
    return
    while (it !== max_num_idx) {
        console.log("hola");
        let sum_sub_arr = arr[max_num_idx] - acumulates[it-1]
        maxSum = Math.max( maxSum, sum_sub_arr )
        it++
    }

    it = arr.length-1
    while (max_num_idx !== arr.length-1) {
        let sum_sub_arr = arr[max_num_idx -1] - acumulates[it]
        maxSum = Math.max( maxSum, sum_sub_arr )
        max_num_idx++
    }

    return maxSum
}


const arr = [-1,2,3,4,-2,6,8,3]

console.log( maxSumInSubarray(arr) );