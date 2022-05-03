

/**

    
    
    arr = 2,7,11,15
    target sum = 9
    
    A + B = target
    
    therfore:
    
    target - B = A
    
    target - num[i] = A 
    
    Iterate each num[i]  (B) 
    if A exist in hashmap that is the missing number to from Two sum
    otherwise insert B into hashmap, becasuse it could be A from another 
    iteration.
   
   i = 0  
   9 - 2 = 7
    Hashmap
    2 - [0]
    
    i = 1
    9 - 7 = 2
    Hashmap
    2 - [0, 1]
 * 
 * Hashing technique
 * Time complexity: O(N)
 * 
 * @param nums 
 * @param target 
 * @returns {Array}
 */
function twoSum(nums: number[], target: number): number[] {
    let hashmap = {}
    for(let i = 0; i < nums.length; i++){
        const k = target - nums[i]
        if(k in hashmap){
            hashmap[k].push(i) 
            return hashmap[k]
        }else{
            hashmap[nums[i]] = [i]
        }
    }
    

};