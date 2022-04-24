/* 
    Kadane’s method is a famous algorithm for sub array sum. 
    In this method we just iterate once over the given input array. 
    We take a current sum initially with value zero and add each element in the path. 
    We add each element to the current sum if the previous current sum is not negative 
    or otherwise we just break the continuity and update the current sum with current element. 
    Along with it at each position we check if the current sum is also global maximum or 
    not and update the global maximum according to that.

    -2,3,2-1

    i |  0  1, 2, 3
    c | -2, 3, 5, 4
    g | -2, 3, 5, 5
*/

const maxSubArray = (nums) => {
    let globalSum = currentSum = nums[0]
    for (let i = 1; i<nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i])
        if(globalSum < currentSum) 
            globalSum = currentSum
    }
    return globalSum
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));