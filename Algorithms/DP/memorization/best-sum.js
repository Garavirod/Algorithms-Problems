/* 
    Write a function that takes in a target sum
    and array of numbers as arguments.
    The function should return an array containing
    the shortest combination of numbers that add up
    to exactly the targetSum.
    If there is a tie for the shortest, you may 
    return anyone of them

    Broute force
    time complexity: O(n^m * m )
    space complexity: O(m^2)

    Memorizing
    time complexity: O(n^m * m )
    space complexity: O(n*m^2)
*/


const bestSum = (targetSum, numbers, memo={}) => {
    if(targetSum in memo) return memo[targetSum]
    if (targetSum === 0) return []
    if (targetSum < 0) return null
    let shortestCombination = null

    for(let num of numbers){
        const reminder = targetSum - num
        const reminderCombination = bestSum(reminder, numbers, memo)
        if(reminderCombination){
            const combination = [...reminderCombination, num]
            if(!shortestCombination || combination.length < shortestCombination.length)
                shortestCombination = combination
        }
    }
    memo[targetSum] = shortestCombination
    return shortestCombination
}

console.log( bestSum(100,[1,2,5,25]) );
