/* 
    Write a function that accepts a traget
    string and array of string. The function
    should return a 2D array that conatins all
    of the ways that the target can be constructed
    by concatenating elements of the wordBank.
    Each element of 2D array should represent
    one combination taht construct the 'target'
    You may reuse elements of 'wordBank' as
    many time syou needed.

    Broute Force

    Time complexity: O(n^m * n )
    Space complexity: O(m^2)

    Memorization
    
    Time complexity: O(n*m^2 )
    Space complexity: O(m^2)
*/

const allConstructs = (target, wordBank, memo = {}) => {
    if (target in memo) return memo[target]
    if (target === '') return [[]]
    const combinations = []
    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const sufix = target.slice(word.length)
            const sufixWays = allConstructs(sufix, wordBank, memo)
            const targetWays = sufixWays.map( way => [word, ...way])
            combinations.push(...targetWays)
        }   
    }
    memo[target] = combinations
    return combinations
}

console.log(allConstructs('purple', ['purp', 'p', 'ur', 'le', 'purpl']));
console.log(allConstructs('eeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee']));