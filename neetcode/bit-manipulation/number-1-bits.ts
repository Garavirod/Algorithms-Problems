/* 
    Write a function that takes an unsigned 
    integer and returns the number of '1' bits 
    it has (also known as the Hamming weight).

*/



/**
    Solution A 

    Equation    n      n-1    new n      counter
    7 & (7-1) - 0111 & 0110 - 0110 - 6 - 1
    6 & (6-1) - 0110 & 0101 - 0100 - 5 - 2
    4 & (4-1) - 0100 & 0011 - 0000 - 0 - 3

    There for:
    n & n-1 means remove the rightmost 1 of n in each iteration

    Time complexity: O(32) - O(1) 
    
*/

function hammingWeight(n: number): number {
    let res = 0
    while(n !== 0){
        n &= n & (n-1)
        res += 1
    }
    
    return res
};


/*
    Solution B 
    
    If number's bits are shifted to right it implicates that that number divide by 2.
    if there not exist a rest in division this means '0' but but when rest exist
    it means 1.    
    
    8 - 1000 - 0
    4 - 0100 - 0
    2 - 0010 - 0
    1 - 0001 - 1
    0 - 0000 - 0

    Time complexity: O(32) - O(1) 
*/


function hammingWeight2(n: number): number {
    
    let res = 0
    while(n !== 0){
        res += n % 2
        n = n >>1
    }
    
    return res
};