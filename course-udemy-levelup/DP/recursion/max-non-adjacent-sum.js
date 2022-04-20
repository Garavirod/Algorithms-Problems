/* 
    Given an array of positive integers,
    find the maximun sum of non adjacent elements
    in the array.
*/


const maxSum = (i, arr, memo = {}) => {
    if (i in memo) return memo[i]
    if (i > arr.length - 1) return 0
    if (i == arr.length - 1) return arr[i]

    let max = 0
    let op1 = arr[i] + maxSum(i + 2, arr, memo)
    let op2 = arr[i + 1] + maxSum((i + 1) + 2, arr, memo)

    max += Math.max(op1, op2)
    memo[i] = max
    return max
}


console.log(maxSum(0, [6, 10]));