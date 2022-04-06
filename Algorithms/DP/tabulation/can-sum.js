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

const canSumTab = (targetSum, numbers, memo = {}) => {
    let n = numbers.length
    let table = Array.from(
        {length: n},() => Array.from({length:n}, () => 0)
    )

    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < n; j++) {            
            if(numbers[i] + numbers[j] === targetSum) 
                return true
        }        
    }

    return false
}


console.log(canSumTab(300, [2, 3]));
