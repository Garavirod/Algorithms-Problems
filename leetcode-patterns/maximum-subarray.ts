/*
  Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
  A subarray is a contiguous part of an array.

  Technique: Kadane's algorithm
*/


function maxSubArray(nums: number[]): number {
    const n = nums.length
    let table = Array(n)
    let globalSum = nums[0], currentSum = nums[0]
    
    for(let i = 1; i<n; i++){
        currentSum = Math.max(nums[i], nums[i] + currentSum)
        if(currentSum > globalSum){
           globalSum = currentSum
        }
    }
    
    return globalSum
};
