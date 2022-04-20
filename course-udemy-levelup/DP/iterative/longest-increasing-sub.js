/* 
    Given an array suqeunce find the length of
    longest, subsecuence of such that all elements
    of the subsecuence are sorted in increasing order.
*/


const lis = (arr) => {
    const n = arr.length
    let table = Array(n).fill(0)

    let maxSubsecuence = 1

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[j] < arr[i]) {
                // Keep the max seceunce if you added max secnece dp[i] into max seceunce of dp[j]
                table[i] = Math.max(table[i], 1 + table[j])
                maxSubsecuence = Math.max(maxSubsecuence, table[i])
            }
        }
    }

    return maxSubsecuence


}