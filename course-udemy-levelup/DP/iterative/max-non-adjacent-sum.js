/* 
    Given an array of positive integers,
    find the maximun sum of non adjacent elements
    in the array.
*/


const maxSum = (arr) => {
    const n = arr.length
    let table = Array(n).fill(0)
    table[0] = arr[0]
    table[1] = arr[1]
    for (let i = 2; i <= arr.length; i++)
        table[i] = Math.max(table[i - 1], (table[i - 2] + arr[i]))

    return table[n - 1]
}


console.log(maxSum([6, 10, 12, 7, 9, 14]));