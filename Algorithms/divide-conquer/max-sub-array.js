/* 

    Given an integer array nums, find the contiguous subarray (containing at least one number) 
    which has the largest sum and return its sum.
*/


function helper(nums, left, right, m) {
    let acum = 0
    let leftSum = Number.MIN_SAFE_INTEGER
    let rightSum = Number.MIN_SAFE_INTEGER

    // Get left sum
    for (let i = m; i >= left; i--) {
        acum += nums[i]
        leftSum = Math.max(acum, leftSum)
    }

    acum = 0

    // Get right sum
    for (let i = m + 1; i <= right; i++) {
        acum += nums[i]
        rightSum = Math.max(acum, rightSum)
    }


    return Math.max(leftSum + rightSum, leftSum, rightSum)
}


function maxSub(nums, left, right) {

    if (left === right) return nums[left]

    const m = Math.floor((left + right) / 2)
    /* Return maximum of following three possible cases 
	a) Maximum subarray sum in left half 
	b) Maximum subarray sum in right half 
	c) Maximum subarray sum such that the subarray crosses the midpoint */
    const a = maxSub(nums, left, m)
    const b = maxSub(nums, m + 1, right)
    const c = helper(nums, left, right, m)

    return Math.max(a, b, c)

}


function maxSubArray(nums) {
    const n = nums.length - 1
    return maxSub(nums, 0, n)
};


console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));