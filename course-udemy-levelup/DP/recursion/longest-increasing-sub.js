/* 
    Given an array suqeunce find the length of
    longest, subsecuence of such that all elements
    of the subsecuence are sorted in increasing order.
*/

const lis = (i, arr, n, prev, memo = {}) => {

    //Memorization
    if (i in memo) return memo[i]

    // Base case if nothing remaining
    if (i == n) return 0

    // Exclude the current element i and preoces
    // the remaining
    let exclude = lis(i + 1, arr, n, prev, memo)

    //Inlcuding current element if it is grater
    //than previous element
    let include = 0
    if (arr[i] > prev)
        include = 1 + lis(i + 1, arr, n, arr[i], memo)

    // retunr max above two choices
    return Math.max(include, exclude)
}

const arr = [50, 4, 10, 8, 30, 100]

console.log(lis(0, arr, arr.length, Number.MIN_SAFE_INTEGER));