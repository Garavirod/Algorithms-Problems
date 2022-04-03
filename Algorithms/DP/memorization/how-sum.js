/* 
    Write a function that takes ion targetsum 
    an array of numbers as arguments.
    the function should return an array containing any
    combination of elemetns that add up to exactly
    the traget sum. If there is not combination that adds
    up to the tragetsum, then return null

    m: targetsum
    n: numbers lnegth 
    ----Broute force---
    time complexity : O(n^m * (m))
    space complexity : O(m)

    ---DP----
    time complexity : O(n*m^2)
    space complexity : O(m^2)

*/

const howSum = (targetSum, numbers, memo={}) => {
    if(targetSum in memo) return memo[targetSum] // already computed
    if(targetSum === 0) return []
    if(targetSum < 0) return null
    for(let num in numbers){
        const reminder = targetSum - num
        const reminderArr = howSum(reminder, numbers)
        if(reminder){
            memo[targetSum] = [...reminderArr, num]
            return memo[targetSum]
        }
    }
    // it si not posible generate targetsum
    memo[targetSum] =  null
    return null
}

console.log( howSum(7, [5,3,4,7]) );