/*
  Given an array nums of n integers where nums[i] is in the range [1, n], 
  return an array of all the integers in the range [1, n] that do not appear in nums.
*/



function findDisappearedNumbers(nums: number[]): number[] {
    let res: Array<number> = []
    
    for(let n of nums){
        const i = Math.abs(n) - 1 
        nums[i] = -1 * Math.abs(nums[i])
    }
    
    for(let i = 0; i<nums.length; i++){
        if (nums[i] > 0) res.push(i+1)
    }
    
    return res
};
