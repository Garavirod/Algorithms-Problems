/* 
    Write a function that accepts a traget
    string and array of string. The function
    should return the number of ways that the 
    target can be constructed by concatenating
    elements of the wordBank.
    You may reuse elements of 'wordBank' as
    many time syou needed.

    Broute Force

    Time complexity: O(n^m * n )
    Space complexity: O(m^2)

    Memorization
    
    Time complexity: O(n*m^2 )
    Space complexity: O(m^2)
*/

const countConstruct = (target, wordBank, memo = {}) => {
    if (target in memo) return memo[target]
    if (target === '') return 1
    let counterWays = 0

    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const prefix = target.slice(word.length)
            counterWays += countConstruct(prefix, wordBank, memo)
        }
    }
    memo[target] = counterWays
    return counterWays
}

console.log(countConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));
console.log(countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee']));