/* 
    Missign number
    
    
    Given an array nums containing n distinct numbers in the range [0, n], 
    return the only number in the range that is missing from the array.

    Using Gauss formula

    0 + 1 + 2 + 3 + ....N = r1

    0 + 1 + 2 + x + ....N = r2

    x = (0 + 1 + 2 + 3 + ....N) - (0 + 1 + 2 + ....N)


*/


const missingNumber = (nums) => {
    const n = nums.length
    
    for(let i = 0; i<nums.length; i++){
        n += i - nums[i]
    }

    return n
    
}
