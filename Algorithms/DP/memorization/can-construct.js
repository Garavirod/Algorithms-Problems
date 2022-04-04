/* 
    Write a function that accepts a traget
    string and array of string.
    The function should return a boolean
    dindicating whether or no the 'traget'
    can be constructed by concatenating
    elements of the 'wordBank' array.
    You may reuse elements of 'wordBank' as
    many time syou needed.

    Broute force

    Time complexity: O(n^m * n)
    Space complexity: O(m^2) tree's height is always max num of stak frames m times recerve space of 'm' long

    Memorizing

    Time complexity: O(n*m^2)
    Space complexity: O(m^2) tree's height is always max num of stak frames m times recerve space of 'm' long
*/

const canConstruct = (target, wordBank, memo={}) => {
    if (target in memo) return memo[target]
    if (target === '') return true

    for(let word of wordBank){
        // is prefix of target any word of wordbank ?
        if(target.indexOf(word) === 0){
            const sufix = target.slice(word.length)
            const canBeConstructed = canConstruct(sufix, wordBank, memo)
            if( canBeConstructed ){ // send sufix and wordbank                
                memo[target] = canBeConstructed            
                return true
            }
        }
    }
    memo[target] = false
    return false

}

console.log( canConstruct('abcdef',['ab','abc','cd','def','abcd']) );
console.log( canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeef',['e','ee','eee','eeee']) );