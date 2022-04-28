/*
  Given an integer array nums, handle multiple queries of the following type:

  Calculate the sum of the elements of nums between indices left and right inclusive where left <= right.
  Implement the NumArray class:

  NumArray(int[] nums) Initializes the object with the integer array nums.
  int sumRange(int left, int right) Returns the sum of the elements of nums between indices left and right inclusive (i.e. nums[left] + nums[left + 1] + ... + nums[right]).
   
  Technique: PrefixArray                                                                                                     
                                                                                                        

*/


class NumArray {    
    dp:Array<number> = []
    constructor(nums: number[]) {        
        const n = nums.length
        this.dp = Array(n).fill(0)
        this.dp[0] = nums[0]
        for(let i = 1; i<n; i++){
            this.dp[i] = this.dp[i-1] + nums[i]
        }
    }

    sumRange(left: number, right: number): number {
        if(left > 0)
            return this.dp[right] - this.dp[left-1]
        else
            return this.dp[right]  
    }
}
