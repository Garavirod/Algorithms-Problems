/* 
    Given an array of positive integers
    where each element represent the max of 
    steps, you can jump forward in the array.
    Find the minimum jums needed to reach the 
    final index.
*/

const minArrayJumps = (i, arrayJumps, memo = {}) => {    
    if (i in memo ) return memo[i]
    if (i  >= arrayJumps.length - 1) return 0
    if (i === arrayJumps.length - 1) return 0
    let minJumps = Number.MAX_SAFE_INTEGER
    for (let index = 1; index <= arrayJumps[i]; index++) {       
        let min = 1 + minArrayJumps(i+index, arrayJumps, memo)
        minJumps = Math.min(min, minJumps)        
    }
    memo[i] = minJumps
    return minJumps
}

console.log(minArrayJumps(0, [3,4,2,1,2,3,7,1,1,1,2,5]));