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

const canSumTab = (targetSum, numbers) => {
    let table = Array(targetSum + 1).fill(false)
    console.log(table.length);
    table[0] = true
    for (let i = 0; i <= targetSum; i++) {
        /*
         If my current postion is reacheable 
         I can asum that my current position 
         plus num is also reachable 
        */
        if (table[i] === true) {
            for (let num of numbers)
                table[i + num] = true
        }
    }

    return table[targetSum]
}


console.log(canSumTab(300, [7, 14]));
