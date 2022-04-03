/* 
    Write a function that takes in a targetsum
     and an array of numbers as arguments.

     the function should return a boolean indicating
     whether or not is possible to generate the targert sum
     using memebr from array.

     Use one lemment of array as many taimes as need it
     You may assume that all input numbers are not negative

    m: targetsum
    n: numbers lnegth 
    ----Broute force---
    time complexity : O(n^m)
    space complexity : O(m)

    ---DP----
    time complexity : O(n*m)
    space complexity : O(m)
*/

const canSum = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo) return memo[targetSum]
    if (targetSum === 0) return true
    if (targetSum < 0) return false

    for (let num of numbers) {
        const reminder = targetSum - num
        if (canSum(reminder, numbers, memo)) {
            memo[targetSum] = true // save on memo
            return true
        }
    }
    memo[targetSum] = false // save on memo
    return false
}


console.log(canSum(300, [2, 3]));
