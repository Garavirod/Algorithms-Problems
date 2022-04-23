/* 
    Given an array of positive integers
    where each element represent the max of 
    steps, you can jump forward in the array.
    Find the minimum jums needed to reach the 
    final index.
*/


const minArrayJumps = (arr) => {
    const n = arr.length
    let table = Array(n).fill(0)

    if (n === 0 || arr[0] === 0) return Number.MAX_SAFE_INTEGER


    // Find the minimum number of jumps to reach arr[i]
    // from arr[0], and assign this value to jumps[i]
    for (let i = 1; i < n; i++) {
        table[i] = Number.MAX_SAFE_INTEGER
        for (let j = 0; j < i; j++) {
            // Current postion j +  arr[j] reaches arr[i] ?
            // has it been calculaded the min jumo in current positionW
            if(j + arr[j] >= i && table[j] != Number.MAX_SAFE_INTEGER ){
                table[i] = Math.min(table[i], table[j] + 1);
                break;
            }
        }
    }
    return table[n-1]
}

console.log(minArrayJumps([3,4,2,1,2,3,7,1,1,1,2,5]));