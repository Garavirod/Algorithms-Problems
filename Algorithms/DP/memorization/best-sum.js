/* 
    Write a function that takes in a target sum
    and array of numbers as arguments.
    The function should return an array containing
    the shortest combination of numbers that add up
    to exactly the targetSum.
    If there is a tie for the shortest, you may 
    return anyone of them

    Broute force


    Memorizing
*/


const bestSum = (targetSum, numbers) => {
    if (targetSum === 0) return []
    if (targetSum < 0) return null
    let shortestCombination = null
    for(let num of numbers){
        const reminder = targetSum - num
        const reminderCombination = bestSum(reminder, numbers)
        if(reminderCombination){
            const combination = [...reminderCombination, num]
            if(!shortestCombination || combination.length < shortestCombination.length)
                shortestCombination = combination
        }
    }
    return shortestCombination
}

console.log( bestSum(100,[1,2,5,25]) );