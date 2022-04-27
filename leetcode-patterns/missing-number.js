/* 
    Missign number

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